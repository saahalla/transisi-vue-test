<template>
  <v-container id="login">
    <v-row wrap>
      <v-col class="xs12 sm8 md6 lg6" justify="center">
        <v-card light class="pa-4 card mt-4" justify="center">
          <h2 class="mb-4">Login</h2>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="username"
              label="Username"
              :rules="usernameRules"
              required
            ></v-text-field>

            <v-text-field type="password"
              v-model="password"
              label="Password"
              required
              :rules="passwordRules"
              @keyup.enter="username !== '' && password !== '' ? login() : ''"
            ></v-text-field>

            <p>
              <v-btn
                color="primary"
                @click="login"
                class="mr-4"
              >
                Login
              </v-btn>
              Don't have an account ? 
              <a href="/register">Register</a>
            </p>
          </v-form>
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
			username: 'eve.holt@reqres.in',
			password: '',
      usernameRules: [
        value => !!value || 'Required.',
      ],
      passwordRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 4) || 'Min 4 characters',
      ]
		}
	},
	methods: {
		login: async function(){
			const data = {
				username: this.username,
				password: this.password
			}
      if(this.username && this.password){
        console.log(data)
        await axios({
          method: 'post',
          url: 'https://reqres.in/api/login',
          data: data,

        }).then(response => {
          localStorage.setItem('token', response.data.token)
          alert('Login Success')

          if(localStorage.getItem('token')!=="" && localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined){
            this.$router.push('/users/list')
          }
        }).catch(err=>{
          alert('Wrong Username / password')
          console.log(err)
        })
      }else if(!this.username){
        alert('Please Input Username')
      }else if(!this.password){
        alert('Please Input Password')
      }
		}
	},
	mounted() {
		console.log(this.username)
	}
}
</script>

<style scoped>
#login {
  max-width: 500px;
}
.card {
  border: solid 3px grey;
}
</style>