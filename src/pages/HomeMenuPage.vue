
<template>
  <div class=" row col-12" style=" height: 100vh;">
    <div class="row justify-end items-center col-9">
      <div class="col-10 bg-accent q-mr-xl row justify-center" style="height: 85%; border-radius: 0px 100px 0px 100px;">
        <div class="col-12 row justify-between" style="height: 24%;">
          <div class="bg-white q-ml-lg q-mt-lg col-7 row justify-center items-center content-center"
            style="border-radius: 0px 60px 0px 60px; height: 60%;">
            <div class="col-12 row justify-start items-center">
              <p class=" col-10 q-ml-md text-weight-bold text-h5 no-marging">¡Hola, {{ userName }}!</p>
            </div>
            <div class="col-12 row justify-end">
              <p class="text-italic text-weight-light text-h6 q-mr-md">Bienvenido al baúl de los mundos fantásticos.</p>
            </div>
          </div>
          <div class="col-3 q-mr-xl q-mt-lg" style="height: 100px;">
            <q-img src="../img/Sapphire.png" class="q-my-xs" style="height: 100px; width: 100%" />
          </div>
        </div>
        <div class="col-12 row justify-center items-start" style="height: 38%;">
          <div class="col-11 row">
            <div class="col-12 row justify-start items-center ">
              <p class="col-10 q-mb-md text-weight-medium text-h4 no-marging">Lugares</p>
            </div>

            <div class="col-12 bg-primary row justify-center items-center" style="height: 150px; border-radius: 38px;">
              <div class="col-12 row" :class="array == 2 ? 'justify-start' : 'justify-between'" style="height: 60%">

                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px; position: relative;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Arquitectura/ImgArquitec%20032.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 18px; text-overflow: ellipsis;">Castellum</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Jeslar</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>

                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Arquitectura/ImgArquitec%20032.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 18px; text-overflow: ellipsis;">Castellum</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Jeslar</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>
                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Arquitectura/ImgArquitec%20032.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 18px; text-overflow: ellipsis;">Castellum</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Jeslar</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 row justify-center items-start" style="height: 38%;">
          <div class="col-11 row">
            <div class="col-12 row justify-start items-center ">
              <p class="col-10 q-mb-md text-weight-medium text-h4 no-marging">Personajes</p>
            </div>
            <div class="col-12 bg-primary row justify-center items-center" style="height: 150px; border-radius: 38px;">
              <div class="col-12 row" :class="array == 2 ? 'justify-start' : 'justify-between'" style="height: 60%">

                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://i.pinimg.com/736x/c0/24/df/c024dfaaada11a57aadb6adf107f4dbc.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 14px; text-overflow: ellipsis;">Annabeth Blathorne</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Princesa</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Bellatorum</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>

                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://i.pinimg.com/736x/c0/24/df/c024dfaaada11a57aadb6adf107f4dbc.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 14px; text-overflow: ellipsis;">Annabeth Blathorne</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Princesa</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Bellatorum</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>
                <q-card class="q-mx-lg bg-accent col-3 row" style="border-radius: 20px;">
                  <q-card-section class="col-5 row justify-center items-center">
                    <div class="bg-secondary" style="position: absolute; height: 80%; width: 60%; border-radius: 10px;">
                      <img style="height: 100%; width: 100%; border-radius: 10px;"
                        src="https://i.pinimg.com/736x/c0/24/df/c024dfaaada11a57aadb6adf107f4dbc.jpg">
                    </div>
                  </q-card-section>
                  <q-card-section class="col-6 row items-center no-marging no-padding">
                    <div style="height: 80%; width: 100%;">
                      <p class="col-12 text-bold" style="font-size: 14px; text-overflow: ellipsis;">Annabeth Blathorne</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Princesa</p>
                      <p class="col-12 text-weight-light" style="font-size: 11px;">Bellatorum</p>
                    </div>
                  </q-card-section>
                  <div style="height: 15px; width: 15px; border-radius: 10px; position: absolute; right: 22%; top: 60%;">
                    <q-btn flat to="/" size="15px" icon="mdi-arrow-right-bold-circle-outline"
                      :color="$route.name === 'dashboard' ? 'primary' : 'primary'" />
                  </div>
                </q-card>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" full-height row justify-center items-center col-3">
      <div class="col-10 bg-accent" style="height: 85%; border-radius: 66px;">

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// import { getData } from '../composables/useQuery'

export default {
  name: 'HomePage',
  setup() {
    // const { query, login, nickName, password } = getData()
    const leftDrawerOpen = ref(false)
    const userName = ref("MysteriousAngel")
    const array = ref(3)
    onMounted(() => {
      // query()
    })
    return {
      leftDrawerOpen,
      userName,
      array,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style >
p {
  margin: 0 0 0px;
  white-space: nowrap;
  overflow: hidden;
}
</style>
