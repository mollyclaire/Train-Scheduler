// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAwUYseLuV5Sk2YI6ybNSuwPdUYjIEiJTA",
    authDomain: "new-project-aac7c.firebaseapp.com",
    databaseURL: "https://new-project-aac7c.firebaseio.com",
    projectId: "new-project-aac7c",
    storageBucket: "new-project-aac7c.appspot.com",
    messagingSenderId: "1083406849836",
    appId: "1:1083406849836:web:1188b12bf96dc830"
  };

  firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

// Initial variables
var name = "";
var destination = "";
var time = "";
var frequency = "";

// Click Button changes what is stored in Firebase
$("#click-button").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#input-name").val().trim();
    console.log(name);
    destination = $("#input-destination").val().trim();
    time = $("#input-time").val().trim();
    frequency = $("#input-frequency").val().trim();

    // Change what is saved in Firebase
    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });
    });

// Listens for changes that have been made in Firebase and adds the data to the server...
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);

    // A new row is created, and the new data is displayed on the page
    var newRow = $("<tr>");
    newRow.append(
        $("<td>").text(childSnapshot.val().name),
        $("<td>").text(childSnapshot.val().destination),
        // $("<td>").text(childSnapshot.val().time),
        $("<td>").text(childSnapshot.val().frequency)
    )
    $("#table").append(newRow);
   


})