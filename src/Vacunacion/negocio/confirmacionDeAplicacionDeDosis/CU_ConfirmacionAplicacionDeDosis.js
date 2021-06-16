import {actualizarSolicitudDeTurno} from "../../modelos/SolicitudDeTurno.js"


function CasoDeUso_ConfirmacionAplicacionDeDosis(pdfConversor, daoSolicitudesDeTurno, builder, sender) {

    return {
        ejecutar: async (dni) => {

            //obtener el turno
            let turno = daoSolicitudesDeTurno.get(dni);

            actualizarSolicitudDeTurno(turno);
            pdfConversor.pasarAPdf("Datos de la vacunacion:", turno.estado, turno.paciente);
            //mando el mail de confirmacion de vacunacion
            let email = builder.createEmailWithAttachment('Yo', to, "Prueba 1", "hola", "prueba.pdf", "./pdfs/prueba.pdf", "application/pdf");
            sender.send(email);

            daoSolicitudesDeTurno.update(dni, turno);
        },
    }
}
export {CasoDeUso_ConfirmacionAplicacionDeDosis}