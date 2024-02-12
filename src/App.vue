<script setup lang='ts'>

import useStore from './composable/useStore';

const { APP_STATUS, appStatus } = useStore();

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
    <h1 v-if="appStatus === APP_STATUS.INIT" class="text-4xl font-bold  pb-32 opacity-60">
      CHAT WITH YOUR PDF
    </h1>
    <h1 v-if="appStatus === APP_STATUS.ERROR" class="text-4xl font-bold text-white">
      ERROR, TRY REALOADING</h1>
  </div>
</template>
