import nodemailer from 'nodemailer'


function createEmailSender(user, pass) {

    const transporter = nodemailer.createTransport({
        /*host: "smtp.ethereal.email",
        port: 587,
        secure: false,*/
        host: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    });

    return {
        send: async(emailOptions) => {
            let info = await transporter.sendMail(emailOptions, function(error){
                if(error) 
                console.log(error);
                else 
                console.log("Message sent: " + info);

            });
        }
    }
}

export {createEmailSender}