<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'
import useStore from '../composable/useStore';

const { setAppStatusLoading, setAppStatusChatMode, setAppStatusError } = useStore();

const filesData = ref<{ name: string, size: number, type: string, lastModified: number }[]>([])

async function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
    if (filesData.value.length > 0) {
      const formData = new FormData()
      formData.append('file', files[0])

      const res = await fetch('api/upload', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) {
        setAppStatusError()
        return
      }
      const result = await res.json()
      console.log((resuilt))
      setAppStatusChatMode(result)

    }
    setAppStatusLoading()
  }
}


const dropZoneRef = ref<HTMLElement>()


const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)




</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="w-full h-auto relative">
      <h3 class="text-center pt-4 m-4 text-4xl font-bold opacity-60">
        Chat with your PDF
      </h3>



      <div class="flex justify-center  h-screen">
        <div ref="dropZoneRef" class="flex h-64 </div>w-64 mt-6 rounded bg-red-500 justify-center items-center">
          <p v-if="filesData.length === 0">Drop your PDF here</p>
          <div class="flex justify-center ">
            <div v-for="(file, index) in filesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
              <p>Name: {{ file.name }}</p>
              <p>Size: {{ file.size }}</p>
              <p>Type: {{ file.type }}</p>
              <p>Last modified: {{ file.lastModified }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
