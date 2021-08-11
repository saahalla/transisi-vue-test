<template>
  <v-card
    max-width="344"
    outlined
    class="pa-4 ma-4"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Detail User
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ data.fullname }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ data.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="data.avatar" max-width="80px" max-height="80px">
        </v-img>

      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        rounded
        color="primary"
        blue
        router
        to="/users/list"
        class="pa-4"
      >
        List User
      </v-btn>
      
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      data: {
        first_name: '',
        last_name: '',
        fullname: '',
        email: '',
        avatar: ''
      },
      id: ''
    }
  },
  mounted(){
    this.id = this.$route.params.id
    this.detailUser()
  },
  methods: {
    detailUser: function(){
      axios({
        method: 'get',
        url: `https://reqres.in/api/users/${this.id}`

      }).then(response => {
        // alert(JSON.stringify(response.data))
        const results = response.data;
        if(results.data.id !== null){
          this.data = results.data
          this.data.fullname = `${results.data.first_name} ${results.data.last_name}`
        }

      }).catch(error => {
          console.log(error)
      })
    }
  }

}
</script>