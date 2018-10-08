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
            
            
            <div v-for="(field, key) in requiredFields" :key="key"> 
                    <!-- track current key so it can be used to get corresponding value from patient record                -->
                    {{ updateCurrentKey(key) }} 
                    <!-- dyanamically render input fields according to component name and pass object containing
                    the values of the label, name and value of input component as a prop                -->
                    <component :is="field.componentName" v-bind:info="currentProperties" ></component>
                
            </div>            

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
          title: 'Personal History',
          // track value of key for each iteration through requiredFields
          currentKey: null,
          // fake data to use as form schema
          requiredFields: {
              name: {
                label: 'Name:',
                componentName: 'TextInput'
              },
              gender: {
                  label: 'Gender:',
                  componentName: 'TextInput'
              },
              department: {
                  label: 'Department',
                  componentName: 'TextInput'
              }
          },
          // fake patient data
          patient_record: {
              name: 'David',
              gender: 'Male',
              department: 'orthopedic'
          }
        }
    },
    methods: {        
        updateCurrentKey(key) {
            this.currentKey = key
        }
    },
    computed: {
        // returns object to pass as a prop to dynamic input components 
        currentProperties() {
            var currentKeyName = this.currentKey
            return {                
                    label: this.requiredFields[currentKeyName].label,
                    name: this.currentKey,
                    value: this.patient_record[currentKeyName]
                
            }
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


