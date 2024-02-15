<script setup lang='ts'>


import StepChat from './components/StepChat.vue';
import StepLoading from './components/StepLoading.vue';
import StepUpload from './components/StepUpload.vue';
import useStore from './composable/useAppStatus';

const { APP_STATUS, appStatus } = useStore();


</script>

<template>
  <StepUpload v-if="appStatus === APP_STATUS.INIT" />
  <StepLoading v-if="appStatus === APP_STATUS.LOADING" />
  <StepChat v-if="appStatus === APP_STATUS.CHAT_MODE" />

  <div v-if="appStatus === APP_STATUS.ERROR" class="text-4xl font-bold text-white">
    ERROR, TRY REALOADING</div>
</template>
