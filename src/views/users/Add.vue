<template>
  <v-container>
    <v-row wrap class="xs12 sm6 md6 lg6">
      <v-col>
        <v-card
          outlined
          class="pa-6"
          max-width="600px"
        >
          <v-card-title class="pa-0 mb-4">Add New User</v-card-title>

          <v-text-field 
            label="name" 
            :rules="rule" 
            hide-details="auto" 
            v-model="data.name"
          >
          </v-text-field>
          <v-text-field 
            type="name"
            label="job" 
            :rules="rule" 
            hide-details="auto" 
            v-model="data.job">
          </v-text-field>
                    
          <v-btn @click="submit" color="primary" class="mt-6">
            <v-icon>mdi-plus</v-icon>
            <span>Add User</span>
          </v-btn>

        </v-card>
        <v-card
          outlined
          class="pa-4 mt-2 blue--text"
          max-width="600px"
          v-if="result"
        >
          <v-card-title class="pa-0 mb-4">User {{result.name}} added successfully</v-card-title>
          <p class="black--text">
            Name : {{result.name}} <br>
            Job : {{result.job}}

          </p>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      data: {
        name: '',
        job: ''
      },
      rule: [
        value => !!value || 'Required.'
      ],
      result: null
    }
  },
  mounted() {

  },
  methods: {
    submit: function(){
      /* data yang akan dikirim ke API create VA */  
      const data = this.data
      console.log(JSON.stringify(data))

      axios({
        method: 'post',
        url: 'https://reqres.in/api/users',
        data: data

      }).then(response => {
        const results = response.data;
        if(results.name !== null){
            alert(`User ${results.name} added successfully`)
            this.result = results
        }

      }).catch(error => {
          console.log(error)
      })
    }
  }
}
</script>