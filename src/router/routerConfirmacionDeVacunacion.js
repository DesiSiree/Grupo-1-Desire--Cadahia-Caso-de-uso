import express from 'express'
import CUFactory from '../ModuloMailing/CUFactory.js'

const routerConfirmacionDeVacunacion = express.Router()

routerConfirmacionDeVacunacion.post('/confirmacion/:id', async (req, res, next) => {
  try {
    const CU_ConfirmacionAplicacionDeDosis = CUFactory.createCU_ConfirmacionAplicacionDeDosis();
    await CU_ConfirmacionAplicacionDeDosis.ejecutar(req.params.id);
    res.json({status: 'ok'})
  } catch (error) {
    next(error)
  }
})

export default routerConfirmacionDeVacunacion