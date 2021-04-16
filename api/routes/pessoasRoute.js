const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPesoas)
router.get('/pessoas/:id', PessoaController.pegarUmaPessoa)

module.exports = router