var btnsAdd = document.querySelectorAll(".btn") 

btnsAdd.forEach( (btn , i ) => {

    const containerServicos = document.getElementById("servico-" + i)
    const imagemServico = containerServicos.children[1].children[0].src
    const nomeServico = containerServicos.children[1].children[0].innerText
    console.log(nomeServico)
})