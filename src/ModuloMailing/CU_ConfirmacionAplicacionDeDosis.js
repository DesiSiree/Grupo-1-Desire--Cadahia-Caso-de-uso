function CasoDeUso_ConfirmacionAplicacionDeDosis(pdfConversor, daoSolicitudesDeTurno, builder, sender) {

    return {
        ejecutar: async (dni) => {

            //obtener el turno
            let turno = daoSolicitudesDeTurno.get(dni);
            //valido el estado del turno y accionas en base a ese estado
            //actualizo el turno (estado y fecha)
            let nombrepdf;
            if(turno.estado == "CONFIRMADO_PARA_VACUNARSE") {
                turno.estado = "VACUNADO_PRIMERA_DOSIS"
                turno.fecha.setDate(turno.fecha.getDate() + 30);
                nombrepdf = "Primera Dosis"
            } else if (turno.estado == "VACUNADO_PRIMERA_DOSIS"){
                turno.estado = "VACUNADO_SEGUNDA_DOSIS"
                turno.fecha = null
                nombrepdf = "Segunda Dosis"
            } else {
                console.log("esto no deberia pasar nunca, tiro error")
            }
            //mandas el mail
            pdfConversor.pasarAPdf("Datos de la vacunacion:", nombrepdf, turno.paciente);
            let email = builder.createEmailWithAttachment('Yo', to, "Prueba 1", "hola", "prueba.pdf", "./pdfs/prueba.pdf", "application/pdf");
            sender.send(email);

            daoSolicitudesDeTurno.update(dni, turno);
        },
    }
}
export {CasoDeUso_ConfirmacionAplicacionDeDosis}