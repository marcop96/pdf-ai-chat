import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

const useAppStatus = createSharedComposable(() => {
  const APP_STATUS = {
    INIT: 0,
    LOADING: 1,
    CHAT_MODE: 2,
    ERROR: 3
  }

  const appStatus = ref(APP_STATUS.INIT)

  return { APP_STATUS, appStatus }
}
)

export default useAppStatus
