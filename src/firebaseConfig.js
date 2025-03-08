import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvEui540Ih4WeNoc_JfOV7FTtpy7ROnXw",
    authDomain: "clothing-swd.firebaseapp.com",
    projectId: "clothing-swd",
    storageBucket: "clothing-swd.appspot.com",
    messagingSenderId: "77106374985",
    appId: "1:77106374985:web:becc553ff7612d79cd9298",
    measurementId: "G-4C9TBF58DZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
