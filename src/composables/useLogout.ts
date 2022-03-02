import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const err = ref(null);

async function logout(){
  err.value = null;
  try {
    const response = await projectAuth.signOut(projectAuth.getAuth());
    if(response) useRouter.push({name: 'Login', params: {}});
    return response;
  } catch (error) {
    console.log(err);
    err.value = error.message;
  }
}

export function useLogout(){
  return {
    err,
    logout
  }
}
