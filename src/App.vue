<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      
    }
  }  
}
</script>

<style>

</style>

