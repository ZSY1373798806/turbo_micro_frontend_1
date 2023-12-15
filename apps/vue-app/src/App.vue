<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <remote mfName="ReactApp" module="./ReactButton"/>
    <remote mfName="ReactApp" module="./ReactCube"/>
  </div>
</template>

<script>
import Remote from '@/components/remote';

export default {
  name: 'App',
  components: {
    Remote
  }
}
</script>
