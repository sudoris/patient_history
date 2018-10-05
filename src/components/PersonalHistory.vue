<template>
    <div>
        <div class="container">

            <h2 class="title">{{ title }}</h2>

            <!-- <button @click="LoadForm">Standard Care Patient</button>
            <button @click="LoadForm">ER Patient</button> -->
            <label for="patient-select">Select patient:</label>
            <select id="patient-select">
                <option value="">--Please select a patient--</option>
                <option value="patient1">Patient1</option>    
                <option value="patient2">Patient2</option>             
            </select>

            <br>
            <br>

            

            <text-input></text-input>

        </div>    

            
        
    </div>
    
</template>

<script>
import TextInput from './form_components/TextInput.vue';

export default {
    name: 'PersonalHistory',
    components: {        
        TextInput           
    },
    data() {
        return {
          title: 'Patient History'
        }
    },
    methods: {        
        LoadForm() {
            console.log('button clicked')   
        }
    }
}
</script>

<style>

.container {
    margin: 20px 20px;
}
#patient-select {
    border-style: solid;
}
.title {
    margin-bottom: 10px;
}
</style>


