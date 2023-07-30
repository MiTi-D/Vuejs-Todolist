import { createStore } from "vuex";
export const store = createStore({
    state () {
      return {
        todos:[],
        showDelModal:false,
        showEditModal:false
      }
    },
    mutations:{
        addTodo(state,n){
            state.todos.push(n)
        },
        removeTodo(state,n){
            state.todos.splice(n,1)

        },
        showDelModal(state,n){
            state.showDelModal = n
        },
        showEditModal(state,n){
            state.showEditModal = n
        },
        editTodo(state,todoo){
            state.todos[todoo[0]] = todoo[1]
        }
    }
  })