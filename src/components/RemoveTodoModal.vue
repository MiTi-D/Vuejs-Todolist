<template >
    <div class=" w-full flex justify-center -translate-y-44 items-center h-screen backdrop-blur-lg fixed">
        <div class="w-60 h-28 fixed rounded-md  flex flex-col items-center justify-around bg-slate-700">
            <p class="text-2xl text-white">Are You Sure?</p>
            <div class="space-x-3 text-xl font-600 mb-2">
                <button @click="nofunc" class="border-none outline-none bg-white w-16 h-8 rounded-md">No</button>                
                <button @click="yesfunc" class="border-none outline-none bg-white w-16 h-8 rounded-md">Yes</button>

            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore} from 'vuex';
import { defineProps } from 'vue'
import { useToast } from "vue-toastification";
import WToast from './toasts/WRemoveTodoT.vue'
const toast = useToast();
const store = useStore()
const props = defineProps(['todo'])
function nofunc() {
    store.commit('showDelModal',false)
}
function yesfunc() {
    toast.warning(WToast, {
      position: "bottom-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 1,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
    store.commit('showDelModal',false)
    store.commit('removeTodo',props.todo)
}
</script>