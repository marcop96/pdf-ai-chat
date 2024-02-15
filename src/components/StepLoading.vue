<script setup lang='ts'>


</script>

<template>
  <!-- create an animated loading spin -->
  <div class="flex flex-col gap-2">
    <div class="w-full h-auto relative">
      <h3 class="text-center pt-4 m-4 text-4xl font-bold opacity-60">
        Chat with your PDF
      </h3>
      <div class="w-full h-96 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h2 class="text-2xl p-5 font-bold text-gray-500 ">processing your file</h2>
        <p class="text-2xl  font-bold text-gray-500 anima1te-spin loader"></p>

      </div>
    </div>
  </div>
</template>
<style>
.loader {
  border: 8px solid #f3f3f3;
  /* Light grey */
  border-top: 8px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.5s linear infinite;
}
</style>
