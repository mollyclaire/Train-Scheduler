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


// When user hits submit...
$("#click-button").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Receives user inputs
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
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    // Clear the input fields
    $("#input-name").val("");
    $("#input-destination").val("");
    $("#input-time").val("");
    $("#input-frequency").val("");

});

// Listens for changes that have been made in Firebase and adds the data to the server...
database.ref().on("child_added", function(childSnapshot) {
    // Console test
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);

    // New variables for the snapshots of each child
    var newName = childSnapshot.val().name;
    var newDest = childSnapshot.val().destination;
    var newTime = childSnapshot.val().time; 
    var newFreq = childSnapshot.val().frequency; 

    // User input "newTime" is converted (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(newTime, "HH:mm").subtract(1, "years");

    // Current Time
    var currentTime = moment();
    
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var remainder = diffTime % newFreq;

    // Minutes Until Train
    var minutesAway = newFreq - remainder;
    
    // Next Train
    var nextTrain = moment().add(minutesAway, "minutes");
    var convertedNextTrain = moment(nextTrain).format("HH:mm");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // A new row is created, and the new data is displayed on the page
    var newRow = $("<tr>");
    newRow.append(
        $("<td>").text(newName),
        $("<td>").text(newDest),
        $("<td>").text(newFreq + " min"),
        $("<td>").text(convertedNextTrain),
        $("<td>").text(minutesAway + "min")
    )
    $("#table").append(newRow);

})

