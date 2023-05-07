// Initialize Firebase, same as the login script
var firebaseConfig = {
    apiKey: "AIzaSyBLIboJTu2GA53lZXFwh92Mk3_31NuNj2w",
    authDomain: "arnotes.com.au",
    projectId: "arnotes-8c46e",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "1:113656353278:web:ee7790cf047aa8cc76b0af"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, so grant access to the current page
      console.log("User is signed in:", user);
    } else {
      // No user is signed in, so redirect to the login page
      console.log("User is signed out.");
      window.location.href = "login.html";
    }
  });
  