<template>
  
    <div class="container">
      <div class="row">
        <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          {{ paciente.imagen }}
        </div>
        <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          {{ paciente.nombre }}
        </div>
        <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          {{ paciente.clinica }}
        </div>
        <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          {{ paciente.objetivo}}
        </div>
        <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          {{ paciente.estado }}
        </div>
         <div class="col" v-for="(paciente, index) in pacientes" :key="index">
          <select>
            <option>{{ paciente.acciones[0] }}</option>
            <option>{{ paciente.acciones[1] }}</option>
            <option>{{ paciente.acciones[2] }}</option>
          </select>
        </div>
        </div>
      </div>
    
  
</template>

<script>


import { reactive, ref } from "vue";
export default {
  name: "Paciente",
 
  props: {}, // Props
  setup() {
    let pacientes = ref([
      {
        imagen: "avatar1.jpg",
        nombre: "Katherine Hughes",
        clinica: "Clínica dental",
        objetivo: "lo que sea",
        estado:"completado",
        acciones:["completado","pendiente","finalizado"]
      },
     
    ]);

    // Init logic, lifecycle hooks, etc...
    return {
      pacientes,
    };
  },
};
</script>

<style lang="scss" scoped>
div{
  color:white;
  background:rgb(2, 2, 207);
  border-style:outset;
  border-width: 1px;
  
}

</style>>
