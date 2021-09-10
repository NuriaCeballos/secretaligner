<template>
      <button type = "primary" @click = "download"> Descarga CVS</button>

</template>

<script>
export default {
    
 methods: {
    download (csv) {
      if (!csv) {
        return;
      }
      console.log("downLoad");
      var csv = Papa.unparse(this.itemList);
      console.log("downLoad", csv);
             // Defina el contenido del archivo, el tipo debe ser Blob, de lo contrario createObjectURL informará un error
      let content = new Blob([csv], {
        type:
          'text/plain;charset=utf-8;'
        // application/vnd.openxmlformats-officedocument.wordprocessingml.document;
      });
             // Generar objeto url
      let urlObject = window.URL || window.webkitURL || window;
      let url = urlObject.createObjectURL(content);
             // Generar elemento DOM <a> </a>
      let el = document.createElement("a");
             // Asignación de enlace
      el.href = url;
             el.download = "Todo archivo export.csv";
             // Debe hacer clic, de lo contrario no se descargará
      el.click();
             // Eliminar el enlace para liberar recursos
      urlObject.revokeObjectURL(url);
    },
 }

}
</script>

<style>

</style>