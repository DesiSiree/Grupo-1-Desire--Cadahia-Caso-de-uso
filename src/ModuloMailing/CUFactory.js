import { CasoDeUso_EnviarComprobante } from "./CU_EnviarComprobante.js"
import { crearConversorPdf } from './ConvertirAPDF.js'
import { crearDaoSolicitudesDeTurno } from '../Dao/daoSolicitudesDeTurno.js'
import { createEmailBuilder } from "./EmailBuilder.js";
import { createEmailSender } from "./EmailSender.js";

const user = 'ort.proy.integrador.21@gmail.com';
const pass = 'Ort123456';

const pdfConversor = crearConversorPdf('./pdfs/');
const daoSolicitudesDeTurno = crearDaoSolicitudesDeTurno();
const builder = createEmailBuilder(user, pass);
const sender = createEmailSender(user, pass);

function createCU_EnviarComprobante() {
    const CU_EnviarComprobante = CasoDeUso_EnviarComprobante(
        pdfConversor, 
        daoSolicitudesDeTurno, 
        builder, 
        sender
    );

    return CU_EnviarComprobante;
}

export default { createCU_EnviarComprobante }