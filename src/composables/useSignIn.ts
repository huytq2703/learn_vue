import { ref } from "vue";
import { projectAuth, signInWithEmailAndPassword } from "@/configs/firebase";

const err = ref(null);
const isPending = ref(false);

async function signin(email, password){
  isPending.value = true;
  err.value = null;
  try {
    const response = await signInWithEmailAndPassword(projectAuth.getAuth(), email, password);
    return response;
  } catch (error) {
    console.log(error.message);
    err.value = error.message;
  }finally{
    isPending.value = false;
    
  }
}

export function useSignIn(){
  return {
    err,
    isPending,
    signin
  }
}
