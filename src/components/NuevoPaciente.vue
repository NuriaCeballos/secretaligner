<template>
  <div>
    <transition name="fade">
      <div class="modal" v-if="showModal"></div>
    </transition>

    <transition name="fade">
      <div class="modal-overlay" v-if="showModal" id="modal">
        <h1>Nuevo Paciente</h1>
        <form>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre y apellidos"
              />
              <br />
              <input type="text" class="form-control" placeholder="Clínica" />
              <br />
              <input
                type="text"
                id="datepicker"
                placeholder="Fecha de nacimiento"
              />
              <br />
              <select class="genero mt-3">
                <option v-for="(item, index) in genero" :key="index">
                  {{ item }}
                </option>
              </select>

              <p>¿SecretRetainer?</p>
              <div>
                <input  type="radio" id="no" name="drone" value="no" checked />
                <label for="no">NO</label>
              </div>
              <div>
                <input type="radio" id="si" name="drone" value="si" />
                <label for="si">SI</label>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-sm">
                <button class="boton" @click="showModal = false" >
                  Cancelar
                </button>
              </div>
              <div class="col-sm">
                <ButtonSave/>
              </div>
              <div class="col-sm">
                <button  class="boton" @click="Limpiar" type ="reset" >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <button class="boton" @click="showModal = true">Nuevo Paciente</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import ButtonSave from '@/components/ButtonSave'
import Paciente from '@/components/Paciente'
import picker from '../../public/script.js';

// console.log('esto es ', picker)

export default {
  name: "NuevoPaciente",
  components:{
    Paciente,
    ButtonSave
  },

  setup() {
    let showModal = ref(false);
    let genero = ref(["Femenino", "Masculino", "Otro"]);

    console.log(picker);

    return {
      showModal,
      picker,
      genero,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
}

.boton {
  background: rgb(253, 166, 4);
  margin-bottom: 40px;
  margin-top: 40px;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  page-break-after: 15 20px;
  color: whitesmoke;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.boton:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.7);
}
#modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: whitesmoke;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  z-index: 101;
  height: 700px;
}


</style>