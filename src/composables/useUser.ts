import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const userLogin = ref(projectAuth.getAuth().currentUser);
projectAuth.getAuth().onAuthStateChanged(function(user){
  if(user) userLogin.value = user;
});

function getUser(){
  return { userLogin };
}

export function useUser(){
  return{
    getUser
  }
}
