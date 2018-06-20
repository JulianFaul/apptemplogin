import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDOqsD2_YatNhre6jctw6edA2iZUEBeyto",
    authDomain: "test-2502a.firebaseapp.com",
    databaseURL: "https://test-2502a.firebaseio.com",
    projectId: "test-2502a",
    storageBucket: "test-2502a.appspot.com",
    messagingSenderId: "640357951384"
});

export const db = app.database();
export const usersRef = db.ref('users');