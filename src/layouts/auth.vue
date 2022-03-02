<template>
  <NavigationBrandVue/>
  <slot/>
</template>

<script>
import NavigationBrandVue from "@/components/NavigationBrand.vue";

export default {
  components: {
    NavigationBrandVue
  },
};
</script>
