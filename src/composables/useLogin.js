import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "@/firebase/config";
let error=ref(null);

let Login=async(email,password)=>{
    try{
        let res=await signInWithEmailAndPassword(auth,email,password);
        if(!res){
            throw new Error("Could not log in user");
        }
        return res;
    } catch(err) {
        error.value=err.message;
        console.log(err.message);
    }
}
let useLogin=()=>{
    return {error,Login};
}
export default useLogin;