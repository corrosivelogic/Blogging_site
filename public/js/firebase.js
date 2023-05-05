let firebaseConfig = {
    apiKey: "AIzaSyBgiZYyJgpkyMhFAj4GkT3PedRmcBy7T-c",

  authDomain: "blogging-website-dcd95.firebaseapp.com",

  projectId: "blogging-website-dcd95",

  storageBucket: "blogging-website-dcd95.appspot.com",

  messagingSenderId: "773429718318",

  appId: "1:773429718318:web:3f41a950a24c528dfd5ebf"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();