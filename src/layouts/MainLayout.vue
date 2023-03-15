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

    <div class="home row col-12">

      <q-header
        style="background: linear-gradient(to right, #8D094D, #1441B5); border-radius: 0px 0px 40px 40px; min-height: 10vh;"
        show-if-above class="row items-center col-12">
        <q-toolbar class="items-center justify-between">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <q-img src="../img/SapphireLogo.png" class="q-my-xs" style="height: 70px; width: 120px; left: 2%;" />
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="row col-12 justify-end">
              <q-btn flat dense label="Inicio" class="q-mx-md text-weight-light" />
              <q-btn flat dense label="Registrarse" class="q-mx-md text-weight-light" />
            </div>

          </div>
        </q-toolbar>
      </q-header>
      <div class=" col-12 row"
        style="height: 100vh; width: 100vw; background: linear-gradient(to right, #14141C 45%,  transparent); opacity: 0.9;">
        <q-page-container class=" row  no-padding no-margin" style=" overflow: hidden;">
          <router-view></router-view>
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