
"use strict"
const inputTarefas = document.getElementById("inputTarefas")
const mostraTarefas = document.getElementById("mostraTarefas")
const adicionar = document.getElementById("adicionar")
const remover = document.getElementById("remover")
/*
*/
//adiciona itens da lista
let i = 0
let a
let user = []
adicionar.addEventListener("click", () => {    
    let restauradb =JSON.parse(localStorage.getItem("usuario"))
    if (restauradb != null ) {
        
   
    i = restauradb.length
    user = restauradb}else{
        i= 0
        user =[]
    }
    
    
    if (inputTarefas.value != "") {
        alert("entrei")
        user[i] = inputTarefas.value
        inputTarefas.value = ""        
        localStorage.setItem("usuario", JSON.stringify(user))
        a = JSON.parse(localStorage.getItem("usuario"))
        mostraTarefas.innerHTML += `<div class="js"> <li>${a[i]}</li><button id="botao">limpar</button> </div>`
        console.log(a)
        i++
    } else {
        alert("digite a tarefa")
    }
})

//remover itens da lista
mostraTarefas.addEventListener("click", (e) => {   
    //console.log(jsDiv)
    console.log(e.composedPath()[1].children[0].innerText)
    let txt =e.composedPath()[1].children[0].innerText // pega o texto do elemeto
    const clickElement = e.target
    if (clickElement.tagName === "BUTTON") {
        //clickElement.remove()      
        console.log(txt)    
        e.composedPath()[1].remove()          
        let restauradb =JSON.parse(localStorage.getItem("usuario"))          
        restauradb.splice(restauradb.indexOf(txt),1)           // remove o texto do array pela posição dele       
        localStorage.setItem("usuario",JSON.stringify(restauradb))
        
    }
})
//remover tudo
remover.addEventListener("click",()=>{
    mostraTarefas.innerHTML= ""
    // perugntar usuario
    //zerar localstorage
})

//manter itens quando recarregar a pagina
let restauradb =JSON.parse(localStorage.getItem("usuario"))
if (restauradb != null ) {
restauradb.map((valor)=>{
mostraTarefas.innerHTML += `<div class="js"><li>${valor}</li><button id="botao">limpar</button></div>` })
}