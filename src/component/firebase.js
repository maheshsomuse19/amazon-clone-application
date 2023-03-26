import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAalTP44NFdJ5qN-CmKGcQVKoI3mkO3cfA",
//     authDomain: "first-clone-app.firebaseapp.com",
//     projectId: "first-clone-app",
//     storageBucket: "first-clone-app.appspot.com",
//     messagingSenderId: "571009866890",
//     appId: "1:571009866890:web:86187c75100ecf3c096173",
//     measurementId: "G-V8C7E5VY6L"

// })

const firebaseConfig = {
        apiKey: "AIzaSyAalTP44NFdJ5qN-CmKGcQVKoI3mkO3cfA",
        authDomain: "first-clone-app.firebaseapp.com",
        projectId: "first-clone-app",
        storageBucket: "first-clone-app.appspot.com",
        messagingSenderId: "571009866890",
        appId: "1:571009866890:web:86187c75100ecf3c096173",
        measurementId: "G-V8C7E5VY6L"
    
    }

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };    
