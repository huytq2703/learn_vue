<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
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
    return {
      onSubmit,
    }
  }
}
</script>
