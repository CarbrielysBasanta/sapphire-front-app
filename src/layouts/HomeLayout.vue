<template>
  <q-layout view="hHh lpR fFf" style="background-color: #ECECEC;">

    <q-drawer show-if-above v-model="leftDrawerOpen" width="110" side="left"
      style="background: linear-gradient(to bottom, #8D094D, #1441B5); border-radius: 0px 40px 40px 0px;"
      class="row justify-center">
      <div class="col-md-12" style="height: 22%;">
        <q-img src="../img/SapphireLogo.png" class="q-my-xs" style="height: 70px; width: 100%" />
      </div>
      <div style="height: 78%;">
        <q-list>
          <q-item clickable v-ripple class="q-mb-sm">
            <q-item-section avatar>
              <q-btn flat to="/" size="20px" icon="mdi-home" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-mb-sm">
            <q-item-section avatar>
              <q-btn flat to="/" size="20px" icon="mdi-rhombus-outline"
                :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-mb-sm">
            <q-item-section avatar>
              <q-btn flat to="/" size="20px" icon="mdi-earth" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-mb-sm">
            <q-item-section avatar>
              <q-btn flat to="/" size="20px" icon="mdi-account-group"
                :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple style="position: fixed; bottom: 0;">
            <q-item-section avatar>
              <q-btn flat to="/" size="20px" icon="mdi-logout" :color="$route.name === 'dashboard' ? 'white' : 'accent'">
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>



    <div class=" col-12" style="height: 700px; width: 1480px; background-color: #ECECEC;">
      <q-page-container class="row">
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
.q-drawer--standard {
  background-color: #ECECEC;
  /* opacity: 0.1; */
}

.q-item__section--side {
  padding-right: 0px;
}
</style>
