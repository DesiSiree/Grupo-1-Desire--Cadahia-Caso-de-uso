import { crearCasoDeUso_ConfirmacionAplicacionDeDosis } from "./CU_ConfirmacionAplicacionDeDosis.js"
import { crearConversorPdf } from '../../../compartido/ModuloMailing/ConvertirAPDF.js'
import { createEmailBuilder } from "../../../compartido/ModuloMailing/EmailBuilder.js";
import { createEmailSender } from "../../../compartido/ModuloMailing/EmailSender.js";
import { getDaoSolicitudes } from "../../persistencia/factoryDaoSolicitudes.js";

const user = 'ort.proy.integrador.21@gmail.com';
const pass = 'Ort123456';

const pdfConversor = crearConversorPdf('./pdfs/');
const daoSolicitudes = getDaoSolicitudes();
const builder = createEmailBuilder(user, pass);
const sender = createEmailSender(user, pass);

function createCU_ConfirmacionAplicacionDeDosis() {
    const CU_ConfirmacionAplicacionDeDosis = crearCasoDeUso_ConfirmacionAplicacionDeDosis(
        pdfConversor, 
        daoSolicitudes, 
        builder, 
        sender
    );

    return CU_ConfirmacionAplicacionDeDosis;
}

export default { createCU_ConfirmacionAplicacionDeDosis }