
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBnCGiWlCnmxWPGi8kZA0q6D7QsfIe5ovA",
  authDomain: "netflix-clone-91574.firebaseapp.com",
  projectId: "netflix-clone-91574",
  storageBucket: "netflix-clone-91574.firebasestorage.app",
  messagingSenderId: "28152714854",
  appId: "1:28152714854:web:70aa54ae4d32754488ffa7",
  measurementId: "G-F09ZYRJE21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

const signUp=async(name,email,password)=>
{
  try {
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,

   })
} catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logIn=async(email,password)=>
{
    try {
      await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}
const logOut=async()=>
{
    signOut(auth)
}

export default{
    auth,
    db,
    signUp,
    logIn,
    logOut
}