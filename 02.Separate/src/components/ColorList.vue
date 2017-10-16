<template>
  <div>
    <h1>Color List</h1>
    <ul>
      <li v-for="color in $store.state.colors" :style="{ color: color.code }">{{ color.name }}</li>
    </ul>

    <input placeholder="color code" v-model="colorCode"><br />
    <input placeholder="color name" v-model="colorName"><br />
    <button @click="addColorToStore">Add Color To Store</button>
  </div>
</template>

<script>
export default {
  name: 'ColorList',
  data () {
    return {
      colorCode: undefined,
      colorName: undefined
    }
  },
  methods: {
    addColorToStore() {
      this.$store.dispatch('addColor', { code: this.colorCode, name: this.colorName })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
