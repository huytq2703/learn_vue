<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col justify-start space-y-6"  @submit.prevent="onSubmit">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="">Full Name</span>
            <input 
              id="fullName" 
              type="text" 
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1" 
              placeholder="iMoney..."
              v-model="fullName"
            >
          </label>
        </div>
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
            class="px-4 py-3 rounded-lg mt-1 w-full bg-primary text-white font-bold "
          >Sign Up
          </button>

          <button 
            v-else
            type="button" 
            class="px-4 py-3 rounded-lg mt-1 w-full bg-gray-500 text-white font-bold cursor-not-allowed "
            disabled
          >Loading...
          </button>
        </div>
      </form>
      <!-- Start: Error -->
      <div v-if="err" class="text-left mt-4 text-rose-700">
        <span>{{err}}</span>
      </div>
      <!-- End: Error -->

      <!-- Start: direction -->
      <div class="w-fill text-center mt-6">
         <span class="font-semibold">I'm already a member</span>
         <span class="ml-1">
           <router-link 
           :to="{name:'Login', parrams:{}}"  class="text-primary">Sign In</router-link>
         </span>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {useSignUp} from "@/composables/useSignUp"
import { useRouter } from 'vue-router';
export default {
  setup() {
    const {err, isPending, signup} = useSignUp();

    const router = useRouter();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit(){
      await signup(email.value, password.value, fullName.value);
      if(!err.value) {
       router.push({name: 'Home', params: {}});
      }
      
    }
    return {
      onSubmit,
      fullName,
      email,
      password,
      err,
      isPending
    };
  },
}
</script>
