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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage().ref();
// updating db settings
db.settings({ timestampsInSnapshots: true });

console.log(firebase)

const login_form = document.querySelector("#auth_box > form")
const login_container = document.querySelector(".login_container")
const log_out_btn = document.querySelector(".log_out_btn")
const main_input = document.querySelector("#main_input")

login_container.style.display = 'none'
log_out_btn.style.display = 'none'
main_input.style.display = 'none'

auth.onAuthStateChanged((user) => {
    if (user != null) {
        pp = user;
        login_container.style.display = 'none'
        log_out_btn.style.display = 'block'
        main_input.style.display = 'block'
        console.log(pp)
    } else {
        login_container.style.display = 'block'
        log_out_btn.style.display = 'none'
        main_input.style.display = 'none'
        console.log(user)
    }
});

login_form.onsubmit = (e) => {
    e.preventDefault()
    let email = login_form.elements.email.value
    let password = login_form.elements.password.value
    
    auth.signInWithEmailAndPassword (email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
    });

}

function logOut(){
    auth.signOut()
}