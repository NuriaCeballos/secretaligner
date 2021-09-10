const pacientes = [
    {nombre: "Katherine Hughes"},
    {nombre: "Paulina Rubio"},
    {nombre: "Segio Dalma" },
    {nombre: "Franco Battiato" },
    {nombre: "Carlos Vives"}
      ]

const formulario = document.querySelector('#formulario')
const boton = document.querySelector ('#boton')
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
    console.log(formulario.value)
    resultado.textContent = ""

    const texto = formulario.value.toLowerCase()
   

    for (let paciente of pacientes){
        let nombre = paciente.nombre.toLowerCase()
        
        if(nombre.indexOf(texto) !== -1){
            resultado.textContent = formulario.value
            
        }
    }
    if(resultado.textContent === ""){
            resultado.textContent = "Paciente no encontrado"

    }
    
 }
    // boton.addEventListener('click',filtrar)
    formulario.addEventListener('keyup',filtrar)


    // export default buscador