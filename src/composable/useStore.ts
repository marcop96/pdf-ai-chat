import { ref } from 'vue'


const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: 3
}
const appStatus = ref(APP_STATUS.INIT)


function setAppStatusLoading() {
  appStatus.value = APP_STATUS.LOADING
}
function setAppStatusChatMode(response: any) {
  appStatus.value = APP_STATUS.CHAT_MODE
}
function setAppStatusError() {
  appStatus.value = APP_STATUS.ERROR
}

export default function useStore() {
  return { APP_STATUS, appStatus, setAppStatusLoading, setAppStatusChatMode, setAppStatusError }
}
