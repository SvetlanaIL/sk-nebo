<template>
  <div id="app">
    <yandex-map :coords="coords" zoom="11" @click="onClick">
      <ymap-marker 
        marker-id="123" 
        :coords="coords"
        :balloon-template="balloonTemplate"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    coords: [55.754880, 37.620663],
  }),
  computed: {
    balloonTemplate() {
      return `
        <p>I am here: ${this.coords}</p>
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.ymap-container {
  height: 100vh;
}
.red {
  color: red;
}
</style>