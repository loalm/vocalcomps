const firebase = require('firebase');
const admin = require('firebase-admin')

var firebaseConfig = {
    apiKey: "AIzaSyANEghZfS1VKbQfEhjGk2-XCLbCBm_vEc8",
    authDomain: "vocalcomps.firebaseapp.com",
    databaseURL: "https://vocalcomps.firebaseio.com",
    projectId: "vocalcomps",
    storageBucket: "vocalcomps.appspot.com",
    messagingSenderId: "53843723119",
    appId: "1:53843723119:web:fb6e770d1958267fd71e9a"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const data_path = database.ref('/myData/');

/**
  * Get all the repositories and the information about them.
  * @returns {object}
	*/
async function getData(){

    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("error: " + errorMessage)
    });
    var data = null;
    try {
        await data_path.once(('value'), snapshot => {
            data = snapshot.val();
        })
    } catch(error){
        console.log(error)
    } finally{
        console.log("Data: " + data)
        return data
    }
}

data_path.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

exports.data = async function(){
    return getData()
}
