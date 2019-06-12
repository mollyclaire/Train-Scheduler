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
// var database = firebase.database();

// // Initial variables
// var name = "";
// var destination = "";
// var time = "";
// var frequency = "";

// // Click Button changes what is stored in Firebase
// $("#click-button").on("click", function(event) {
//     // Prevent the page from refreshing
//     event.preventDefault();

//     // Get inputs
//     name = $("#input-name").val().trim();
//     destination = $("#input-destination").val().trim();
//     time = $("#input-time").val().trim();
//     frequency = $("#input-frequency").val().trim();

//     // Change what is saved in Firebase
//     database.ref().push({
//         name: name,
//         destination: destination,
//         time: time,
//         frequency: frequency
//     });
//     });

// // Listens for changes that have been made in Firebase...
// database.ref().on("value", function(snapshot) {
//     console.log(snapshot.val());
//     console.log(snapshot.val().name);
//     console.log(snapshot.val().destination);
//     console.log(snapshot.val().time);
//     console.log(snapshot.val().frequency);

//     // A new row is created, so the new inputs can be displayed on the page
//     newRow = $("<tr>");
//     newRow.append(
//         $("<td>").text(snapshot.val().name),
//         $("<td>").text(snapshot.val().destination),
//         $("<td>").text(snapshot.val().time),
//         $("<td>").text(snapshot.val().frequency)
//     )
//     $("#table").append(newRow);
    
// })