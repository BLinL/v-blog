<template>
  <!-- Button trigger modal -->
<button type="button" v-show="showTriggerBtn" @click="show" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
    {{ triggerBtnTxt }} + {{ showModel }}
</button>
<!-- Modal -->
<div v-show="showModel" class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{{ modalTitle }}</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        {{ modalBodyTxt }}
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
        @click="hideModel = true"
        class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">{{ closeBtnTxt }}</button>
        <button type="button"
        @click="save"
         class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">{{ saveBtnTxt }}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed, toRefs, ref} from 'vue'
export default {
    props: {
        triggerBtnTxt: {
            type: String,
            default: " Launch demo modal"
        },
        modalTitle: {
            type: String,
            default: " Modal title"
        },
        modalBodyTxt: {
            type: String,
            default: " Modal body text goes here."
        },
        saveBtnTxt: {
            type: String,
            default: " Save changes"
        },
        closeBtnTxt: {
            type: String,
            default: " Close"
        }
    },
    setup(props, ctx) {
        let showTriggerBtn = ref(true)
        let hideModel = ref(true)
        const modelShow = computed(() => {
            return hideModel.value === false
        })

        const showModel = () => {
            hideModel.value = false

        }

        const dialogSave = () => {
            ctx.emit('parentConfirm');
        }
        return {modelShow, dialogSave, showModel, hideModel, showTriggerBtn, ...toRefs(props) }
    }
}
</script>