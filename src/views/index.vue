<template>
  <div class="home"><h1>Home....! Welcome to Huy's House</h1></div>
  <div class="mt-6" v-if="userLogin">{{userLogin.displayName}}</div>
</template>

<script>
import { useUser } from '@/composables/useUser';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const { getUser } = useUser();
    const { userLogin } = getUser();
    const router = useRouter();
    console.log(userLogin);
    // function test(){
    //   if(userLogin)
    //     router.push({name: 'Profile', params: {}});
    // }
    // test();
    return {
      userLogin
    }
  }
}
</script>
