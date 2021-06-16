import { CasoDeUso_ConfirmacionAplicacionDeDosis } from "./CU_ConfirmacionAplicacionDeDosis.js"
import { crearConversorPdf } from '../../../compartido/ModuloMailing/ConvertirAPDF.js'
import { crearDaoSolicitudesDeTurno } from '../../persistencia/dao/daoSolicitudesDeTurno.js'
import { createEmailBuilder } from "../../../compartido/ModuloMailing/EmailBuilder.js";
import { createEmailSender } from "../../../compartido/ModuloMailing/EmailSender.js";

const user = 'ort.proy.integrador.21@gmail.com';
const pass = 'Ort123456';

const pdfConversor = crearConversorPdf('./pdfs/');
const daoSolicitudesDeTurno = crearDaoSolicitudesDeTurno();
const builder = createEmailBuilder(user, pass);
const sender = createEmailSender(user, pass);

function createCU_ConfirmacionAplicacionDeDosis() {
    const CU_ConfirmacionAplicacionDeDosis = CasoDeUso_ConfirmacionAplicacionDeDosis(
        pdfConversor, 
        daoSolicitudesDeTurno, 
        builder, 
        sender
    );

    return CU_ConfirmacionAplicacionDeDosis;
}

export default { createCU_ConfirmacionAplicacionDeDosis }