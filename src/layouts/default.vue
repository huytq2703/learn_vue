<template>
  <NavigationHeader/>
  <slot/>
  <NavigationBottom v-if="meta.footer" />
</template>

<script>
import NavigationBottom from '@/components/NavigationBottom.vue'
import NavigationHeader from '@/components/NavigationHeader.vue'
import { useRouter } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
  components: {
    NavigationBottom,
    NavigationHeader
  },
  setup() {
    const route = useRouter();
    const meta = computed(() => route.currentRoute.value.meta);
    return{
      meta,
    }
  }
}
</script>
