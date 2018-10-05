<template>
    <div>        
        <div>
            <label v-bind:for="name">{{ name }}</label>
            <input id="text-input" type="text" v-bind:name="name" v-model="textContent">
        </div>            
    </div>
</template>

<script>
// Imports

export default {
    components: {
        
    },
    data () {
        return {
            name: 'Allergies:',
            textContent: null
        }
    }
}
</script>

<style>
#text-input {
    border-style: solid;
    border-width: 0.5px;
}
</style>