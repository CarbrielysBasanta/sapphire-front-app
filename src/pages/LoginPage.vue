
<template>
  <div class=" row col-12 absolute" style=" height: 100vh; ">
    <div class=" q-pa-md col-xs-12 col-sm-12 full-height row justify-center col-md-6">

      <q-card class="form-login row col-md-6 col-sm-8 col-xs-12 q-pa-xs text-white"
        style=" margin-right: 0%; margin-top: 100px; height: 80%;">
        <q-card-section class="row col-12 justify-center items-center content-center full-height">
          <div class="column col-12 justify-center items-center">
            <div class="logo">
              <q-img src="../img/LogoDifuminado.png"></q-img>
            </div>
            <div class=" text-h5 text-bold q-my-sm">Inicia sesión en Sapphire
            </div>
          </div>
          <div class="q-mt-smf column justify-center items-center" style="width: 100%;">
            <q-input class="email q-mb-sm" rounded outlined bg-color="grey-2" v-model="nickName" label="Correo o usuario"
              style="min-width: 75%" />

            <q-input class="email q-my-sm" rounded outlined bg-color="grey-2" type="password" v-model="password"
              label="Contraseña" style="min-width: 74%" />

            <q-btn class="email q-mt-sm text-weight-light text-italic" rounded unelevated color="primary"
              text-color="white" label="Entrar" style="width: 40%" @click="login" />
          </div>

          <p class="row items-center justify-center" style="width: 88%;">
            <span class="col-5">
              <hr>
            </span>
            <span class="col-2 text-h6 q-mx-sm" style="width: 5%">
              O
            </span>
            <span class="col-5">
              <hr>
            </span>
          </p>
          <div class="column col-12 justify-center items-center">
            <q-input rounded outlined bg-color="grey-2" v-model="name" label="Inicia sesión con Google"
              style="min-width: 60%; " />
            <p class="row items-center justify-center q-mt-sm" style="width: 88%;">
              <span class="col-7 text-weight-light">
                ¿No tienes una cuenta?
              </span>
              <a href="/#/Register" class="col-3 text-bold text-italic text-white" style="text-decoration: none;">
                Regístrate
              </a>
            </p>
          </div>
        </q-card-section>

      </q-card>

    </div>
    <div class=" full-height row justify-center col-md-6 xs-hide sm-hide">
      <div style="margin-top: 100px;" class=" row col-12 justify-center q-pa-md">

        <div class="right-side row col-md-7 col-sm-8 col-xs-12 q-pa-md text-white"
          style=" margin-left: 18%; margin-top: 30px; height: 80%;">
          <div class="row col-12 justify-center">
            <div class="logo2">
              <q-img src="../img/LogoDifuminado.png"></q-img>
            </div>
            <div class="right-text text-h4 text-bold text-grey-5 text-italic">
              Da rienda suelta a tu <br>
              imaginación al escribir <br>
              sin perder la coherencia <br>
              en los detalles.
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { IndexLayout } from '../layouts/MainLayout.vue'
import gql from 'graphql-tag'
import { getData } from '../composables/useQuery'

export default {
  name: 'HomePage',
  setup() {
    const { query, login, nickName, password } = getData()
    const leftDrawerOpen = ref(false)
    onMounted(() => {
      query()
    })
    return {
      leftDrawerOpen,
      nickName,
      password,
      login,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style >
@media screen and (max-width: 1024px) {
  .form-login {
    margin: 0px auto;
  }
}

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
