<template>
  <div>
    <v-subheader><strong>List Users</strong></v-subheader>
    <v-data-table
      :headers="headers"
      :items="data"
      sort-by="calories"
      class="elevation-1 pa-4"
    >
      <!-- Action update and delete -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2 blue--text"
          @click="detailUser(item.id)"
          router
        >
          mdi-details
        </v-icon>
        <v-icon
          small
          class="mr-2 blue--text"
          @click="editUser(item.id)"
          router
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          class="red--text"
          @click="deleteUser(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.fullname="{ item }">
          {{item.first_name + ' ' + item.last_name}}
      </template>
      <template v-slot:item.image="{ item }">
          <v-img :src="item.avatar" max-width="60px" max-height="60px">

          </v-img>
      </template>
    </v-data-table>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      result: null,
      headers: [
        { text: 'id', value: 'id' },
        { text: 'firstname', value: 'first_name' },
        { text: 'lastname', value: 'last_name' },
        { text: 'fullname', value: 'fullname' },
        { text: 'email', value: 'email' },
        { text: 'image', value: 'image' },
        { text: 'actions', value: 'actions'}
      ],
      data: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData: function(){
      axios({
        method: 'get',
        url: 'https://reqres.in/api/users',
      }).then(response => {
        const results = response.data;
        if(results.data.length > 0){
          console.log(results.data)
          this.data = results.data
        }
      }).catch(error => {
        console.log(error)
      })
    },
    editUser: function(id){
      this.$router.push(`/users/edit/${id}`)
    },
    detailUser: function(id){
      this.$router.push(`/users/detail/${id}`)
    },
    deleteUser: function(id){
      axios({
        method: 'delete',
        url: `https://reqres.in/api/users/${id}`
      }).then(response => {
        // alert(JSON.stringify(response))
        if(response.status === 204){
          console.log(response)
          const newData = this.data.filter(el => el.id != id)
          this.data = newData
        }

      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {

  },
}
</script>