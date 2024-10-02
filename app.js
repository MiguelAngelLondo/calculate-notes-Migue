// const username = document.getElementById("name")
// const saludar = document.querySelector("#Saludar")

// saludar.addEventListener("click",great)

// function great(){
//     alert("hola como estas! mi estimado " + username.value)
// }


const nombre= document.getElementById("nombre")
const input1= document.getElementById("nota1")
const input2= document.getElementById("nota2")
const input3= document.getElementById("nota3")
const calcular= document.querySelector("#calcular")
const predecir= document.querySelector("#predecir")
const resultado= document.getElementById("resultado")

calcular.addEventListener("click",calc)
predecir.addEventListener("click",prede)

function calc(event){

    event.preventDefault()

    let nota1= Number(input1.value)*0.3
    let nota2= Number(input2.value)*0.3
    let nota3= Number(input3.value)*0.4
    let result= (nota1+nota2+nota3).toFixed(2)
    resultado.style.color= "gray"
   resultado.textContent= `SR/SRA/SRE ${nombre.value} su nota definitiva es: ${result}`

   if (result<3.5) {
      resultado.style.color= "black"
   resultado.textContent= `SR/SRA/SRE ${nombre.value} su nota definitiva es: ${result} Perdio la materia`
    
   }
   else if(result >3.5 && result<4.5){
     resultado.style.color= "orange"
   resultado.textContent= `SR/SRA/SRE ${nombre.value} su nota definitiva es: ${result} Gano la materia`
   }
   else if(result>4.5){
         resultado.style.color= "green"
   resultado.textContent= `SR/SRA/SRE ${nombre.value} su nota definitiva es: ${result} Su nota es sobresaliente`


   }
}

function prede(event){
    event.preventDefault()
    
    let nota1= Number(input1.value)*0.3
    let nota2= Number(input2.value)*0.3
    let result= ((3.5-(nota1+nota2))/0.4).toFixed(2)
    if(result<=5){
      input3.value=`${result}`
    }
    else{
      alert(`${result} necesita mas de 5 para pasar la materia, Perdio la materia`)
    }
}