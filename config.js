import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyCcN-83g5YCIu9VE6TP_jY3AqJ2ae5jPmQ",
        authDomain: "project-4227038244079884650.firebaseapp.com",
        databaseURL: "https://project-4227038244079884650-default-rtdb.firebaseio.com",
        projectId: "project-4227038244079884650",
        storageBucket: "project-4227038244079884650.appspot.com",
        messagingSenderId: "290763640078",
        appId: "1:290763640078:web:f5af23560d678b55ffdb5f"
}
      

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();