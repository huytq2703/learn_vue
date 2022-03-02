<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { PUBLIC_LAYOUT } from "./constants/index";
  export default{
    setup(){
      const route = useRoute();
      return{
        layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT )+ "-layout" ),
      }
    }
  }
</script>
