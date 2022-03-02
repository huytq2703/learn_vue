<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
            <img 
              src="https://lh3.googleusercontent.com/a-/AOh14Gi8iqnhijk64ZmAiXjkRHdl46zA_ebhypphOX58=s83-c-mo" 
              alt="User profile Avatar" 
              class="w-full h-auto object-cover"
              size="sm"
              >
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{meta.text}}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="fa-solid fa-bell text-xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const route = useRouter();
    // console.log(route.currentRoute.value.meta);
    return{
      meta: computed(() => route.currentRoute.value.meta),
    }
  }
}
</script>
