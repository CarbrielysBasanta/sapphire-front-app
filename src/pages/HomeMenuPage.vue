
<template>
  <div class=" row col-12 absolute" style=" height: 100vh; ">

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
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
