// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOcdpNqfkAwYvGuxfq9TzlRgQC7IjJ6IE",
    authDomain: "train-scheduler-125fc.firebaseapp.com",
    databaseURL: "https://train-scheduler-125fc.firebaseio.com",
    projectId: "train-scheduler-125fc",
    storageBucket: "train-scheduler-125fc.appspot.com",
    messagingSenderId: "134379270047",
    appId: "1:134379270047:web:c62240160d26fc81"
  };

  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial variables
var name = "";
var destination = "";
var time = "";
var frequency = "";

// Click Button changes what is stored in firebase
$("#click-button").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#input-name").val().trim();
    destination = $("#input-destination").val().trim();
    time = $("#input-time").val().trim();
    frequency = $("#input-frequency").val().trim();

    // Change what is saved in firebase
    database.ref().set({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });
    });