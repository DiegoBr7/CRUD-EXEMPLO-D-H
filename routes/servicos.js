var express = require('express');
var router = express.Router();
var ServicosControler = require('../controller/ServicosControler')
const multer = require('multer')
var path = require('path');


const storage = multer.diskStorage({

    destination  : (req,file,cb) =>{
        cb(null , "public/images/servicos")
    },
   filename : (req,file,cb) =>{
       cb(null , Date.now() + path.extname(file.originalname) )
    }
    
})
const upload = multer({storage:storage , limits:{fileSize:100000}})

/* GET home page. */
router.get('/', ServicosControler.listaServicos );

router.get('/admin',ServicosControler.mostraAdminServicos)

// rotas parametrizadas

router.get('/servicos/:id/:nome?' , ServicosControler.listaServico)


// rota de criacao de produtos
router.post('/create',upload.single("imagem"), ServicosControler.CriarServico )

//rota de busca de produtos

router.get('/search', ServicosControler.buscaServico)

router.delete('/remove' , ServicosControler.deletarServico)

router.put('/edit' , ServicosControler.atualizarServico)

module.exports = router



