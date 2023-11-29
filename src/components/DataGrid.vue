<template>
  <div class="hello">
    <button @click="getDataGridRegs">Buscar</button>
  </div>
</template>

<script>

import DataGridService from '../services/DataGrid.service'

export default {
  name: 'DataGrid',
  data() {
  },
  methods: {
    async getDataGridRegs()
    {
      let reg = await DataGridService.getDatagrid();
      console.log(reg);
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
