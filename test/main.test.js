import { createEmailComprobante } from "../src/EmailComprobante.js"

async function main() {
   
    const emailComprobante = await createEmailComprobante('ort.proy.integrador.21@gmail.com', 'Ort123456');

    //emailService.sendEmailPlainText('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - prueba Envio de mails', '1,2,3 probando');
    //emailService.sendEmailWithAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
    //emailService.sendEmailWithImageAndAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
    const fecha = new Date();
    
    const datosObj = {
      nombre: "Nombre: Pepito ",
      Apellido: "Apellido: Perez",
      Edad: "Edad: 32",
      sede: "Sede: Centro",
      hoy: "Fecha: " + fecha.toLocaleDateString('en-GB'),
      tipoVacuna: "Vacuna: AstraZeneca",
      dosis: "Dosis: Primera dosis",
      FOTO_Persona: "Aca va la foto",
    }; 

    emailComprobante.send('ort.proy.integrador.21@gmail.com', datosObj);


    const aplicacion = await createEmailModule();

}

main()