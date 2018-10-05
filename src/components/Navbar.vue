<template>
  <v-toolbar class="navbar">        
    <v-btn flat router-link :to="{ name: 'AppHome' }" exact class="green">Home</v-btn>  
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat router-link>List</v-btn>      
      <v-btn flat router-link :to="{ name: 'PersonalHistory' }">Edit</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style>

</style>