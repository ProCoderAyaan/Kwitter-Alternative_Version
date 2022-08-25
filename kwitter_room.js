firebaseConfig = {
      apiKey: "AIzaSyDUnMp870Mnmxb3jZly4cYNHOfsSRXffZ4",
      authDomain: "kwitter-project-b06e6.firebaseapp.com",
      databaseURL: "https://kwitter-project-b06e6-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-b06e6",
      storageBucket: "kwitter-project-b06e6.appspot.com",
      messagingSenderId: "754846147678",
      appId: "1:754846147678:web:29fa6bd30764ba363a80cf"
    };
    
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "! ";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().rel("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}



function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";      
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}