<style></style>

<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message :text="['hey, how are you?']" sent />
      <q-chat-message :text="['doing fine, how r you?']" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { IndexLayout } from '../layouts/MainLayout.vue'

export default {
  name: 'HomePage',
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