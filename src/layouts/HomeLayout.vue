<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer show-if-above v-model="leftDrawerOpen" width="110" side="left" overlay
      style="background: linear-gradient(to bottom, #8D094D, #1441B5); border-radius: 0px 40px 40px 0px;"
      class="row justify-center">
      <div class="col-md-12">
        <q-img src="../img/SapphireLogo.png" class="q-my-xs" style="height: 70px; width: 100%" />
      </div>
      <div>
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-btn flat to="/" icon="mdi-home" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-btn flat to="/" icon="mdi-rhombus-outline" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-btn flat to="/" icon="mdi-earth" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-btn flat to="/" icon="mdi-account-group" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple style="position: fixed; bottom: 0; margin-left: 7.5px">
            <q-item-section avatar>
              <q-btn flat to="/" icon="mdi-logout" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <!-- <q-item clickable v-ripple>
            <q-item-section class="row justify-center items-center" avatar>
              <q-icon class="col-12" color="white" name="bluetooth" />
            </q-item-section>
          </q-item> -->
        </q-list>
      </div>
    </q-drawer>

    <div class=" col-12 row" style="height: 100vh; width: 100vw; background-color: #ECECEC;">
      <q-page-container class=" row no-padding no-margin" style=" overflow: hidden;">
        <router-view></router-view>
      </q-page-container>
    </div>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const $route = useRoute()
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.q-drawer--on-top {
  background-color: #ECECEC;
}

.q-item__section--side {
  padding-right: 0px;
}
</style>
