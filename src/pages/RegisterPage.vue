
<template>
  <div class=" row col-12 absolute" style=" height: 100vh; ">
    <div class=" q-pa-md col-xs-12 col-sm-12 full-height row justify-center col-md-12">

      <q-card class="form-login row col-md-5 col-sm-8 col-xs-12 q-pa-md text-white"
        style="  margin-top: 120px; height: 75%;">
        <q-card-section class="row col-12 justify-center items-center content-center full-height">
          <div class="column col-12 justify-center items-center">
            <div class="logo" style="height: 20%;">
              <q-img src="../img/LogoDifuminado.png"></q-img>
            </div>
            <div class=" text-h5 text-bold q-mb-md" style="height: 6%;">Regístrate en Sapphire
            </div>
          </div>
          <div class="column col-12 justify-center items-center">
            <div class="q-mt-md row justify-center" style="width: 70%; height: 50%;">
              <div class="col-12 row justify-between">
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="name" label="Nombre"
                  style="min-width: 47%" />
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="user" label="Nombre de usuario"
                  style="min-width: 47%" />
              </div>
              <div class="col-12 row justify-between">
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="email" label="Correo"
                  style="min-width:  47%" />
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="password" label="Contraseña"
                  type="password" style="min-width:  47%" />
              </div>
              <div class="col-12 row justify-between">
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="repeatPassword"
                  label="Repita su contraseña" type="password" style="min-width:  47%" />
                <q-input class="q-mb-md col-5" rounded outlined bg-color="grey-2" v-model="date"
                  label="Fecha de nacimiento" style="min-width:  47%" />
              </div>
            </div>
            <q-btn class="email q-my-sm text-weight-light text-italic" rounded unelevated color="primary"
              text-color="white" label="Registrarse" style="width: 30%; height: 8%;" @click="register" />
          </div>
          <p class="row items-end justify-center no-marging no-padding" style="width: 88%; height: 6%;">
            <span class="col-5 no-marging no-padding text-weight-light">
              ¿Ya tienes una cuenta?
            </span>
            <a href="/" class="col-3 no-marging no-padding text-bold text-white text-italic"
              style="text-decoration: none;">
              Inicia sesión
            </a>
          </p>
        </q-card-section>

      </q-card>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { registerUser } from 'src/composables/useRegister'

export default {
  name: 'HomePage',
  setup() {

    const leftDrawerOpen = ref(false)
    const { register, name, user, email, password, repeatPassword, date } = registerUser()
    onMounted(() => {

    })
    return {

      leftDrawerOpen,
      register,
      name,
      user,
      email,
      password,
      repeatPassword,
      date,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style >
.form-login {
  background: linear-gradient(to bottom, #8D094D, #1441B5);
  border-radius: 20px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.8);
}

.right-side {
  background: transparent;
  text-shadow: 8px 8px 10px rgba(205, 205, 205, 0.5);
  ;
}

.logo {
  border-radius: 50%;
  width: 90px;
  height: 90px;
}

.logo2 {
  border-radius: 50%;
  width: 170px;
  height: 170px;
  /* margin-top: 30px;*/
  margin-left: 50px;
}

.right-text {
  opacity: 0.8;
  max-width: 400px;
  text-align: center;
  margin-top: -100px;
  line-height: 1.0;
}

.inputLogin {
  height: 20px;
}

.q-field--outlined.q-field--rounded .q-field__control {
  border-radius: 28px;
  height: 45px;
}

hr {
  height: 1px;
  width: 100%;
  background-color: #E0E0E0;
}

.section {
  width: 100%;
}
</style>
