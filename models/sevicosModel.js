const servicos = require('../database/servicos.json');
const fs = require('fs')
var path = require('path');

module.exports = {

index:()=>{
  return servicos
},

createOne:(req,res)=>{ 
       const {nome, valor,descricao} = req.body
        let novoCadastro = {
        id: servicos[servicos.length - 1 ].id + 1,
        nome: nome,
        valor: valor,
        descricao: descricao,
        imagem:req.file.filename

      };
      servicos.push( novoCadastro);
      console.log(novoCadastro)
      console.log(servicos);
      fs.writeFileSync(path.join(__dirname, "../database/servicos.json"),JSON.stringify(servicos , null , 4)
      )
        
},
findOne:(req,res)=>{
   let found = servicos.find(servico => servico.id == req.query.id)
   return found
},
findByParams:(req,res)=>{
  let found = servicos.find(servico => servico.id == req.params.id)
  return found 
},

deletarOne: (req, res) => {
  let novoDeletar = servicos.filter(servico => servico.id != req.body.id)
     if(!novoDeletar.length);return
  fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(novoDeletar, null, 4));

},

updateOne:(req,res) =>{
  servicos.forEach(servico => {
          if(servico.id != req.body.id)
             return
             servico.id = req.body.id
             servico.nome = req.body.nome
             servico.descricao = req.body.descricao
             servico.valor = req.body.valor
             servico.imagem = req.body.imagem 
            })
            fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(servicos, null, 4));
          }

};






//   index: (req,res) => {
//     res.render('servicos', { title: 'express' });
//   },

//   criarCadastro:
//   },

//   findOne: (req, res) => {
//     let found = servicos.find((servico) => servico.id == req.query.id);
//     return found;
//   },

// // ------------------------------------------------------------------------------------------------------
//   deletar:(req,res)=>{
 
//     let novoSevicos = servicos.filter(servico =>  servico.id != req.body.id)
//     if(!novoSevicos.length) return
//     fs.writeFileSync(path.join(__dirname, "../database/cadastrados.json"), JSON.stringify(novoSevicos, null , 4))

//     console.log(novoSevicos)
//   },
// //   --------------------------------------------------------------------------------------------------
//   paginaAtualizar: (req, res) => {
//     res.render('atualizar', { title: 'express' });
// },
//   update:(req,res)=>{
//     res.render('update',{title:'express'})
//   },
//   updateOne:(req,res)=>{
//      servicos.forEach(servico => {
//         if(servico.id != req.body.id)
//         return
//         servico.id = req.body.id
//         servico.nome = req.body.nome
//         servico.telefone = req.body.telefone
//         servico.email = req.body.email
//         servico.senha = req.body.senha
        
//      });
//   }
