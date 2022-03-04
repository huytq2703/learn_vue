<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <!-- Start: Row Total -->
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text leading-10 mr-4 pb-1">
                <span class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold">USD</span>
              </div>
              <div class="flex flex-col border border-b border-gray-100 pb-1">
                <span>Total</span>
                <input id="total" type="text" class="text-4xl text-dark w-full outline-none mt-1" placeholder="0">
              </div>
            </label>
          </div>
          <!-- End: Row Total -->
        
          <!-- Start: Row Category -->
          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4 pb-1">
                <span class="inline-block ml-auto w-8 h-8 rounded-full bg-orange-400"></span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="category" type="text" class="text-xl text-dark w-full outline-none" placeholder="Select a category">
              </div>
            </label>      
          </div>
          <!-- End: Row Category -->

          <!-- Start: Row Note -->
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                 <i class="fa-solid fa-note-sticky text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="note" type="text" class=" text-dark w-full outline-none" placeholder="Note">
              </div>
            </label>
          </div>
          <!-- End: Row Note -->

          <!-- Start: Row Date -->
          <div class="row">
            <label for="date" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                  <i class="fa-solid fa-calendar-days text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="date" type="date" class=" text-dark w-full outline-none" v-on:change="test" v-model="toDay" placeholder="22/12/2022">
              </div>
            </label>
          </div>
          <!-- Start: Row Date -->

          <!-- Start: Row Wallet -->
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                  <i class="fa-solid fa-wallet text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 py-3">
                <div class="text-dark">My wallet</div>
              </div>
            </label>
          </div>
          <!-- End: Row Wallet -->

        </div>
      </div>

      <div class="bg-white rounded-lg py-4 mt-4">
        <div class="container mx-auto px-8">
          <!-- Start: Row Location -->
          <div class="row">
            <label for="location" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                 <i class="fa-solid fa-location-dot text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="location" type="text" class=" text-dark w-full outline-none" placeholder="Select a location">
              </div>
            </label>
          </div>
          <!-- End: Row Location -->
          
          <!-- Start: Row Person -->
          <div class="row">
            <label for="person" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                 <i class="fa-solid fa-user-group text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="person" type="text" class=" text-dark w-full outline-none" placeholder="With person">
              </div>
            </label>
          </div>
          <!-- End: Row Person -->
        </div>
      </div>

      <div class="bg-white rounded-lg py-4 mt-4">
        <div class="container mx-auto px-8">
          <!-- Start: Row Location -->
          <div class="row">
            <label for="location" class="flex items-center">
              <div class="flex items-center flex-none w-10 text leading-10 mr-4">
                <span class="flex-none w-10">
                 <i class="fa-solid fa-location-dot text-2xl float-right"></i>
                </span>
              </div>
              <div class="flex-1 border border-b border-gray-100 py-3">
                <input id="location" type="text" class=" text-dark w-full outline-none" placeholder="Select a location">
              </div>
            </label>
          </div>
          <!-- End: Row Location -->
        </div>
      </div>

    </div>
  </form>
</template>
<script>
export default {
  setup(){
    const onSubmit = () => {
      alert('ok');
    }
    function test(){
      console.log(this.toDay);
    }
  const date = new Date();
  console.log(date);
    return {
      onSubmit,
      toDay: date,
      test,
    }
  }
}
</script>
