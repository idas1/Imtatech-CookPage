<template>
  <div class="container-sign">
    <div class="justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><h2>Login</h2></div>
          <div class="card-body">
            
            <form class="form-controller" action="#" @submit.prevent="Login">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div v-if="error" class="alert alert-danger">{{ error }}</div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset">
                  <button type="submit" class="btn btn-primary-login"><p>Login</p></button>
                  <RouterLink to="/register"
                    ><button type="submit" class="btn btn-primary-register">
                      <p>Register</p>
                    </button></RouterLink
                  >
                </div>
              </div>
              <button class="btn-gg" @click="signInWithGoogle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#D27722"
                  height="16"
                  width="15.25"
                  viewBox="0 0 488 512"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import { RouterLink } from 'vue-router'

export default {
  name: 'LoginComponent',
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('signIn', {
          email: email.value,
          password: password.value
          
        })
        router.push('/')
        alert("You have successfully logged in ")       
      } catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  },
  methods: {
    signInWithGoogle() {
      this.$store.dispatch('signInWithGoogle')
    },
   
  }
};
</script>
<style lang="css">
.container-sign{
  background-image: url(../img/background-login.jpg);
  margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
    height: 100vh;
}
.justify-content-center {
  display: flex;
  justify-content: center;
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: fit-content;
  margin: 10% auto;
  padding: 70px 40px;
  border: 1px solid #d27722;
  background-color: #fff;
}
.form-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.form-controller {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.card-header {
  color: #d27722;
}
.offset {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.btn {
  padding: 5px 17px;
  border-radius: 16px;
  cursor: pointer;
  color: white;
  background-color: #d27722;
  border: none;
}
.form-control {
  border-radius: 16px;
  border: #d27722 1px solid;
  padding: 5px 10px;
}
.btn-gg {
  background-color: unset;
  padding: 8px 0 5px 0;
  border: #d27722 1px solid;
}
.alert-danger{
  color: red;
  text-align: center;
}
input:focus {
  outline: none;
}

</style>