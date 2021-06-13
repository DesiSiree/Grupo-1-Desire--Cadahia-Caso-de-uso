import express from 'express'
import CUFactory from '../ModuloMailing/CUFactory.js'

const routerEmail = express.Router()

routerEmail.post('/confirmacion/:id', async (req, res, next) => {
  try {
    const CU_EnviarComprobante = CUFactory.createCU_EnviarComprobante();
    await CU_EnviarComprobante.ejecutar(req.params.id);
    res.json({status: 'ok'})
  } catch (error) {
    next(error)
  }
})

export default routerEmail