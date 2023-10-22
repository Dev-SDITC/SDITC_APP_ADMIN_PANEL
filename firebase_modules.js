import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from '@firebase/firestore/lite';
import { getStorage } from "@firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDA0gUscc3xCO8lvKODC6VZ7rpAGzGVi5k",
    authDomain: "bafsditc.firebaseapp.com",
    projectId: "bafsditc",
    storageBucket: "bafsditc.appspot.com",
    messagingSenderId: "833500036504",
    appId: "1:833500036504:web:9f444c0e9a10302b3affed",
    measurementId: "G-L8LZG61X0V"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const login_form = document.querySelector("#auth_box > form")

login_form.onsubmit = () => {
    let email = login_form.elements.email.value
    let password = login_form.elements.password.value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
    });

}