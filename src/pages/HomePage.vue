
<template>
  <div class=" row col-12 absolute" style=" height: 100vh; ">
    <div class=" q-pa-md col-xs-12 col-sm-12 full-height row justify-center col-md-6">

      <q-card class="form-login row col-md-6 col-sm-8 col-xs-12 q-pa-md text-white"
        style=" margin-right: 18%; margin-top: 120px; height: 80%;">
        <q-card-section class="row col-12 justify-center">
          <div class="logo">
            <q-img src="../img/LogoDifuminado.png"></q-img>
          </div>
          <div class=" text-h5 text-bold q-my-md">Inicia sesión en Sapphire
          </div>
          <div class="q-mt-sm row justify-center" style="width: 90%;">
            <q-input class="email q-mb-sm" rounded outlined bg-color="grey-2" v-model="name" label="Correo o usuario"
              style="min-width: 240px" />

            <q-input class="email q-my-sm" rounded outlined bg-color="grey-2" type="password" v-model="age"
              label="Contraseña" style="min-width: 240px" />

            <q-btn class="email q-mt-sm text-weight-light text-italic" rounded unelevated color="primary"
              text-color="white" label="Entrar" style="width: 40%" />
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
          <q-input rounded outlined bg-color="grey-2" v-model="name" label="Inicia sesión con Google"
            style="min-width: 240px; " />
          <p class="row items-center justify-center q-mt-md" style="width: 88%;">
            <span class="col-7 text-weight-light">
              ¿No tienes una cuenta?
            </span>
            <span class="col-3 text-bold text-italic">
              Regístrate
            </span>
          </p>
        </q-card-section>

      </q-card>

    </div>
    <div class=" full-height row justify-center col-md-6 xs-hide sm-hide">
      <div style="margin-top: 100px;" class=" row col-12 justify-center q-pa-md">

        <q-card class="right-side row col-md-7 col-sm-8 col-xs-12 q-pa-md text-white"
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

        </q-card>

      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { IndexLayout } from '../layouts/MainLayout.vue'
import gql from 'graphql-tag'
// import { apolloClient } from '../utils/apollo.js'
import { useQuery } from '@vue/apollo-composable'
import { getData } from '../composables/useQuery'
const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
export default {
  name: 'HomePage',
  setup() {
    const { query } = getData()
    const leftDrawerOpen = ref(false)
    // const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    // console.log(result, loading, error);
    onMounted(() => {
      query()
    })
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style >
@media screen and (min-width: 600px) {
  .form-login {
    margin-right: 0px;
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
