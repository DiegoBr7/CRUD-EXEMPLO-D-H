const ServicosModel = require('../models/sevicosModel')
const Servicos = require('../database/servicos')

module.exports = {

  listaServicos: (req, res) => {
    const servicos = ServicosModel.index();
    res.render('servicos', {listaServicos: servicos, title: "Lista de Serviços", js:"/js/adicionarAoCarrinho.js"})

  },

  mostraAdminServicos: (req, res) => {
    res.render('admin')
  },

  CriarServico: (req, res) => {

    if(!req.file){
      return res.send("favor enviar o arquivo")
    }

    ServicosModel.createOne(req)
    console.log("Dados do formulário recebidos:", req.body);
    res.send("o prduto " + req.body.nome + " foi criado com sucesso")
    
    // DER ALGUM ERRO USE console.LOG

  },

  //listar servicos

  listaServico:(req,res) =>{
    res.send(ServicosModel.findByParams(req))
  },

  buscaServico:
    (req,res)=>{
      res.send(ServicosModel.findOne(req)) 

    },

    deletarServico: 
    (req,res) =>{
      ServicosModel.deletarOne(req)
      res.send("o prduto " + req.body.id + " foi deletado com sucesso")
      console.log(deletarServico)
    },

    atualizarServico:(req,res) =>{
      ServicosModel.updateOne(req)
      res.send("o prduto " + req.body.id + " foi atualizado com sucesso")
    }

   
   


}

