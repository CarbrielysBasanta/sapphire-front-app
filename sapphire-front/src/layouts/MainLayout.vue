<style>
.home {

  background-image: url('../img/Fondo.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ECECEC;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">

    <div class="home">

      <q-header
        style="background: linear-gradient(to right, #8D094D, #1441B5); border-radius: 0px 0px 40px 40px; min-height: 10vh;"
        show-if-above class="row items-center">
        <q-toolbar class="items-center">
          <div class="col-lg-10 col-md-5 col-sm-7 col-xs-5">
            <q-img src="../img/SapphireLogo.png" class="q-my-xs" style="height: 70px; width: 120px; left: 2%;" />
          </div>
          <div class="col-lg-2 col-md-7 col-sm-5 col-xs-7 just">
            <q-btn flat dense label="Inicio" class="q-mx-md text-weight-light" />
            <q-btn flat dense label="Registrarse" class="q-mx-md text-weight-light" />
          </div>
        </q-toolbar>
      </q-header>
      <div
        style="height: 100vh; width: 100vw; background: linear-gradient(to right, #14141C 45%,  transparent); opacity: 0.9;">
        <q-page-container>
          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
            </div>
          </div>
        </q-page-container>
      </div>
    </div>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { HomePage } from '../pages/HomePage.vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>