import express from 'express'
import routerConfirmacionDeVacunacion from './router/routerConfirmacionDeVacunacion.js'

function crearServidor({ port = 0 }) {

    const app = express()

    app.use(express.json())

    app.use('/api', routerConfirmacionDeVacunacion);

    return new Promise((resolve, reject) => {
        const server = app.listen(port)
            .once('error', () => {
                reject(new Error('error al conectarse al servidor'))
            })
            .once('listening', () => {
                server.port = server.address().port
                console.log("Running server on port: " + port);
                resolve(server)
            })
    })
}

export { crearServidor }