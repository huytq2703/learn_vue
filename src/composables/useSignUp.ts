import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const err = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName){
  isPending.value = true;
  err.value = null;
  try {
    const auth = projectAuth.getAuth();
    const response = await projectAuth.createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    );
    if(!response) throw new Error("Could not create a new user.");
    projectAuth.updateProfile(response.user, {displayName : fullName});
    console.log(response.user);
    return response;
  } catch (error) {
    err.value = error.message;
  } finally {
    isPending.value = false
  }
}

export function useSignUp(){
  return{
    err,
    isPending,
    signup
  }
}
