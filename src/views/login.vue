<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="">Email</span>
            <input 
              id="email" 
              type="email" 
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1" 
              placeholder="example@gmail.com"
              autocomplete="username" 
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="pwd" class="flex flex-col">
            <span class="">Password</span>
            <input 
              id="pwd" 
              type="password" 
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1" 
              placeholder=""
              autocomplete="current-password" 
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button 
            v-if="!isPending" 
            type="submit" 
            class="px-4 py-3 rounded-lg mt-1 w-full bg-primary text-white font-bold ">Sign In</button>

          <button 
            v-else
            type="button" 
            class="px-4 py-3 rounded-lg mt-1 w-full bg-gray-500 text-white font-bold cursor-not-allowed ">Loading...</button>
        </div>
      </form>
      <!-- Start: Error -->
      <div v-if="err" class="text-left mt-4 text-rose-700">
        <span>{{err}}</span>
      </div>
      <!-- End: Error -->
      <!-- Start: direction -->
      <div class="w-fill text-center mt-6">
         <span class="font-semibold">I'm a new user</span>
         <span class="ml-1">
           <router-link 
           :to="{name:'Register', parrams:{}}"  
           class="text-primary">Sign Up</router-link>
         </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useSignIn } from '@/composables/useSignIn';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const {err, isPending, signin} = useSignIn();

    const router = useRouter();

    const email = ref('');
    const password = ref('');

    async function onSubmit(){
      console.log(email.value, password.value);
      await signin(email.value, password.value);
      if(!err.value){
        router.push({name: 'Home', params: {}});
      };
    }
    return {
      email,
      password,
      err,
      isPending,
      onSubmit
    };
  },
}
</script>
