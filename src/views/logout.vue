<template>
  <h1>Bye! See you again!</h1>
</template>

<script>
import { useLogout } from '@/composables/useLogout';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const {logout, err} = useLogout();
    const router = useRouter();
    async function onLogout(){
      await logout();
      if(!err.value)
      router.push({name: "Login", params: {}});
    }
    onLogout();
    return {
      err
    }
  }  
}
</script>
