<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpToLine } from "lucide-vue-next"
import { CornerDownLeft, Link,X,Upload } from "lucide-vue-next"

const { t } = useI18n()

const count = ref(0)
const msg = ref("")
const emit = defineEmits(["sendMsg"])
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})

const handleSendMsg = (e: Event) => {
  emit("sendMsg", msg.value)
  msg.value = ""
}

// 监听回车键
const initEvent = () => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSendMsg(e)
    }
  })
}
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault()
    handleSendMsg(e)
  } else if (e.key === "Enter" && e.shiftKey) {
    // 允许默认换行行为
    e.stopPropagation() // 添加这行防止事件冒泡
  }
}


const uploadedFiles = ref<File[]>([])
const isUpload = ref(false)
const upLoad = (event: Event) => {
  const input = event.target as HTMLInputElement
  console.log('input.files=======>', input.files)
  if (input.files) {
    uploadedFiles.value.push(...Array.from(input.files))
  }
  console.log(uploadedFiles.value)
}
const isImage = (file: File) => {
  return file.type.startsWith('image/')
}

const getObjectURL = (file: File) => {
  return URL.createObjectURL(file)
}

</script>

<template>
  <div v-if="uploadedFiles.length > 0" style="margin-top: 20px;">
    <div style="display: flex; flex-wrap: wrap;">
      <div v-for="(file, index) in uploadedFiles" :key="index" style="margin: 10px;">
        <img v-if="isImage(file)" :src="getObjectURL(file)" alt="Image Preview" style="max-width: 100px; max-height: 100px;" />
      </div>
    </div>
  </div>
  <div style="height: 200px" v-if="isUpload">
    <input type="file" id="input" multiple @change="upLoad">
      <div class="title" style="display: flex;  padding: 12px;border-radius:10px 10px 0 0;justify-content: space-between;background-color: #FAFAFA;">
        <span>Attachments</span>
          <X @click="isUpload = false" style="cursor: pointer;"/>
      </div>
      <div  @click="upLoad" style="display: flex;height: calc(100% - 48px); justify-content: center;align-items: center;flex-direction: column;">
        <Upload />
        <div style="font-size: 500;padding: 20px;">Upload file</div>
        <div style="    color: gray;
    font-size: 14px;">Click or drag file to this area to upload</div>
      </div>
    </div>
  <div class="relative l-footer">
    
    <form @submit.prevent="handleSendMsg"   >
      <Textarea
        v-model="msg"
        class="h-[120px] rounded-none focus-visible:ring-offset-0 focus-visible:ring-0 border-l-0"
        :placeholder="t('chat.inputPlaceholder')"
       
        @keydown="handleKeyDown"
      ></Textarea>
      <Link  @click="isUpload = !isUpload" style="position: absolute;
      cursor: pointer;
    left: 12px;
    top: 7px;
    width: 20px;"/>
      <Button
       
        type="submit"
        :disabled="disabled"
        size="icon"
        class="ml-auto gap-1.5 absolute bottom-12 right-4"
      >
        <CornerDownLeft class="size-3.5"/>
      </Button>
    </form>
  </div>
  
</template>
