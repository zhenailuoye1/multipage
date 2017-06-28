<template>
  <div id="app">
    <app-header></app-header>
    <div class="scroll">
      <div class="content">
        <h1 v-for="n in 100">{{n}}</h1>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import appHeader from 'components/appHeader/appHeader';

  export default {
    name: 'app',
    components: {
      appHeader
    }
  }
</script>

<style>
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .scroll {
    position: relative;
    width: 100%;
    height: 100%; 
  }
  .content {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: auto;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

  }
  .footer {
    width: 100%;
    height: 1rem;
    background-color: red;
  }
</style>
