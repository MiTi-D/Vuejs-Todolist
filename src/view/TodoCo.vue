<template>
  <div
    class="w-72 mx-auto h-[4rem] mt-10 flex flex-col items-center rounded-md"
  >
    <input
      type="text"
      v-model="input"
      class="w-64 px-2 h-8 shadow-cus rounded-lg outline-none border-none"
    />
    <button
      @click="addTodo"
      class="border-none outline-none shadow-cus mt-2 w-20 h-8 rounded-md"
    >
      Add Todo
    </button>
  </div>
  <div
    class="w-72 overflow-y-scroll todocon mx-auto flex flex-col items-center pb-2 h-[30rem] mt-10 rounded-lg shadow-cus"
  >
    <Todo />
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import Todo from "../components/Todo.vue";
import SToast from "../components/toasts/SAddTodoT.vue";
import EToast from "../components/toasts/EAddTodoT.vue";
const toast = useToast();
const store = useStore();
const input = ref("");
function addTodo() {
  if (input.value == "") {
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
    store.commit("addTodo", input.value);
    input.value = "";
  }
}
</script>
