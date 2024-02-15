import { ref } from 'vue'


const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: 3
}
const appStatus = ref(APP_STATUS.INIT)

export default function useStore() {




  return { APP_STATUS, appStatus }
}
