function CasoDeUso_EnviarComprobante(pdfConversor, daoSolicitudesDeTurno, builder, sender) {

    return {
        ejecutar: async (dni) => {

            //obtener el turno
            let turno = daoSolicitudesDeTurno.get(dni);
            //valido el estado del turno y accionas en base a ese estado
            //actualizo el turno (estado y fecha)
            let nombrepdf;
            if(turno.estado == "CONFIRMADO") {
                turno.estado = "COMPLETADOPD"
                turno.fecha.setDate(turno.fecha.getDate() + 30);
                nombrepdf = "Primera Dosis"
            } else if (turno.estado == "COMPLETADOPD"){
                turno.estado = "COMPLETADODS"
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
export {CasoDeUso_EnviarComprobante}