<template>
    <div>        
        <div>
            <label v-bind:for="name">{{ info.label }}</label>
            <input id="text-input" type="text" v-bind:name="info.name" v-model="info.value">
        </div>            
    </div>
</template>

<script>
// Imports

export default {
    components: {
        
    },
    props: ['info'],
    data () {
        return {
            // track input value
            value: this.info.value
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