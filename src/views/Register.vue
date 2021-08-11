<template>
  <v-container id="register">
    <v-row wrap>
      <v-col class="xs12 sm8 md6 lg6" justify="center">
        <v-card light class="pa-4 card mt-4" justify="center">
          <h2 class="mb-4">Register</h2>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="username"
              label="Username"
              required
              :rules="rules"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
              :rules="rules"
            ></v-text-field>

            <v-text-field type="password"
              v-model="password"
              label="Password"
              required
              :rules="rules"
            ></v-text-field>
            <p>
              <v-btn
                color="primary"
                @click="register"
              >
              Register
              </v-btn>
              Already have an account ? <a href="/login">Login</a>
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
			username: 'saahalla',
			email: 'eve.holt@reqres.in',
			password: 'pistol',
      rules: [
        value => !!value || 'Required.',
      ],
		}
	},
	methods: {
		register: function(){
			const data = {
				email: this.email,
				password: this.password
			}
			console.log(data)
      if(this.username && this.email && this.password){
        axios({
          method: 'post',
          url: 'https://reqres.in/api/register',
          data: data,

        }).then(response => {
          const token = response.data.token
          if(token !== "" && token !== null && token !== undefined){
            // alert('ok')
            localStorage.setItem('token', token)
            console.log('token', localStorage.getItem('token'))
            alert('Register Success')

            if(localStorage.getItem('token')!=="" && localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined){
              this.$router.push('/users/list')
            }
          }else{
            alert(response.data.error)
          }
        }).catch(err => {
          alert(err)
        })
      }
      
		}
	},
	mounted() {
		console.log(this.username)
	}
}
</script>

<style scoped>
#register {
  max-width: 500px;
}
.card {
  border: solid 3px grey;
}
</style>