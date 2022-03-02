<template>
  <!-- Start : info -->
    <div class="row">
      <div class="container mx-auto p-8">
        <div class="text-center">
          <!-- Logo -->
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
            <img
              class="w-full h-auto object-cover"
              size="xs" 
              src="https://lh3.googleusercontent.com/a-/AOh14Gi8iqnhijk64ZmAiXjkRHdl46zA_ebhypphOX58=s83-c-mo" 
              alt="User's Profile Avartar"
            />
          </div>
          <!-- name -->
          <div class="font-bold text-2xl text-primary mt-3">{{userLogin?.displayName}}</div>
          <!-- email -->
          <p class="font-semibold text-gray-400 mt-1">{{ userLogin?.email }}</p>
        </div>
      </div>
    </div>
  <!-- End: info -->

  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>

        <div class="col-span-1">
          <ul class="">
            <li class="last:text-red" v-for="profileOption in profileOptions" :key="profileOption.name">
              <router-link class="flex items-center justify-between py-3" :to="profileOption.route">
                <!-- left -->
                <div class="flex items-center text-left">
                  <i class="text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{profileOption.name}}</h5>
                </div>
                <!-- right -->
                <div class="text-right">
                  <i class="fa-solid fa-angle-right"></i>
                </div>

              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End: Menu -->

</template>

<script>
import { reactive } from '@vue/reactivity'
import { useUser } from '@/composables/useUser';
export default {
  setup(){
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "fa-solid fa-wallet",
        route: {
          name: "Home",
          params:{},
        }
      },
      {
        name: "Tools",
        icon: "fa-solid fa-toolbox",
        route: {
          name: "Home",
          params:{},
        }
      },
      {
        name: "Privacy",
        icon: "fa-solid fa-circle-info",
        route: {
          name: "Home",
          params:{},
        }
      },
      {
        name: "About",
        icon: "fa-solid fa-address-card",
        route: {
          name: "Home",
          params:{},
        }
      },
      {
        name: "Logout",
        icon: "fa-solid fa-arrow-right-from-bracket",
        route: {
          name: "Logout",
          params:{},
        }
      },
    ]);
    
    const { getUser } =  useUser();
    const { userLogin } = getUser();

    return{
      profileOptions,
      userLogin,
    }
  }
}
</script>

