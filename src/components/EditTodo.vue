<template>
  <div
    class="w-full flex justify-center -translate-y-44 items-center h-screen backdrop-blur-lg fixed"
  >
    <div
      class="w-60 h-36 fixed rounded-md flex flex-col items-center justify-around bg-slate-700"
    >
      <p class="text-2xl text-white">Edit Todo</p>
      <input
        v-model="input"
        type="text"
        class="outline-none border-none rounded-md px-2 h-7"
      />
      <div class="space-x-3 text-xl font-600 mb-2">
        <button
          @click="canselFunc"
          class="border-none outline-none bg-white w-16 h-8 rounded-md"
        >
          cansel
        </button>
        <button
          @click="okFunc"
          class="border-none outline-none bg-white w-16 h-8 rounded-md"
        >
          ok
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import SToast from "./toasts/SEditTodoT.vue";
import EToast from "./toasts/EEditTodoT.vue";
const toast = useToast();
const props = defineProps(["todo"]);
const store = useStore();
const input = ref("");
function canselFunc() {
  store.commit("showEditModal", false);
}
function okFunc() {
  if ((input.value == "")) {
    toast.error(EToast, {
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
  } else {
    toast.success(SToast, {
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
    store.commit("editTodo", [props.todo, input.value]);
    store.commit("showEditModal", false);
    input.value = "";
  }
}
</script>
