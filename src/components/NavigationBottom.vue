<template>
  <footer 
    id="footer" 
    class="
      fixed w-full 
      bottom-0 
      left-0 
      bg-white 
      py-4"
      >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.text">
          <router-link 
            :to="{ name: navItem.name, params:{} }">
            <i class=" text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <button 
      class="
      bnt-add 
      rounded-full 
      w-12 
      h-12 
      bg-orange-600 
      absolute 
      top-0 
      cursor-pointer"
      v-on:click="addTransection()"  
    >
      <i class="fa-solid fa-plus"></i>
    </button>
    <!-- Center button -->
    <div id="shape" class="mx-auto">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </footer>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router';
export default {
  setup(){
    const navItems = reactive([
      {
        icon:"fa-brands fa-mendeley",
        text:"Home",
        name:"Home",
      },
      {
        icon:"fa-solid fa-chart-column",
        text:"Report",
        name:"Report",
      },
      {
        icon:"fa-solid fa-square-envelope",
        text:"Budget",
        name:"Budget",
      },
      {
        icon:"fa-solid fa-user",
        text:"Profile",
        name:"Profile",
      },
    ]);
    const router = useRouter();
    const addTransection = () =>{
      router.push({name: 'New-transection', params: {}});
    }

    return{
      navItems,
      addTransection
    }
  }
}
</script>

<style lang="css" scoped>
.bnt-add{
  margin-left: 50%;
  z-index: 9;
  transform: translateX(-50%);
  top: -25%;
  box-shadow: inset 0 0 0.5em 0 black
              , 0 0 0.5em 0 black;
}

#shape{
  position: absolute;
  top: 0px;
	display:flex;
	justify-content: space-between;
	width: 100px;
	height: 30px;
	/* background-color: gray; */
	margin-left: 50%;
  transform: translateX(-50%);
	
}
#shape:before{
	position: absolute;
	content: "";
	width: 61px;
	height: 40px;

	background-color: #f8fafb;
	top: 0;
	margin-left: 50%;
	transform: translateX(-50%);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
	
}
#curved-corner-bottomleft,
#curved-corner-bottomright,
#curved-corner-topleft,
#curved-corner-topright {
  width: 20px;
  height: 17px;
  overflow: hidden;
  position: relative;
}
#curved-corner-bottomleft:before,
#curved-corner-bottomright:before,
#curved-corner-topleft:before,
#curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}
#curved-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -20px 20px 0 0 #f8fafb;
}
#curved-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 50px 50px 0 0 #f8fafb;
}
#curved-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -20px -20px 0 0 #f8fafb;
}
#curved-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 20px -20px 0 0 #f8fafb;
}

footer#footer ul li:nth-child(2){
  margin-right: 10%;
}
footer#footer ul li:nth-child(3){
  margin-left: 10%;
}

</style>
