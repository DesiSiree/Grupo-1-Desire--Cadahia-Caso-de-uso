import { crearServidor } from './compartido/router/servidor.js'

async function main() {
  const servidor = await crearServidor({port: 8080 })
}

main()