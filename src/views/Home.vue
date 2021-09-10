<template>
<div>
  <div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo3.png">  
  </div>
  
    
  </div>
  <Descarga class="boton"/><NuevoPaciente/>
  <Buscador/>
  <div class="container encabezado">
      <div class="row">
        <div class="col"></div>
        <div class="col">Nombre y apellido</div>
        <div class="col">Clínica</div>
        <div class="col">Objetivo tratamiento</div>
        <div class="col">Estado</div>
        <div class="col">Acciones</div>
       </div> 
      </div>
  <Paciente />
  <Paciente/>
  </div>
</template>

<script>
// @ is an alias to /src
import Buscador from '@/components/Buscador'
import Paciente from '@/components/Paciente'
import Descarga from '../components/Descarga.vue'
import NuevoPaciente from '../components/NuevoPaciente.vue'

export default {
  name: 'Home',
  components: {
    Paciente,
    Descarga,
    NuevoPaciente,
    Buscador
  },
  

  }


</script>

<style lang="scss" scoped>
.home{
  background-color: blue;
  text-align: center;
}
.encabezado{
  background: rgb(95, 95, 255);
  color: white;
  border: solid;
}
.boton{
 background:rgb(253, 166, 4);
 margin-bottom: 40px;
 margin-top: 40px;
 margin: 20px;
 border-radius: 10px;
 cursor: pointer;
 display: block;
 page-break-after: 15 20px;
 color: whitesmoke;
 box-shadow: 3px 3px rgba(0,0,0,0.4);

}
.boton:hover{
    box-shadow: 6px 6px rgba(0,0,0,0.7);
}



</style>