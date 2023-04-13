var firebaseConfig = {
    apiKey: "AIzaSyAIIgWjSHGRge26tdfJ-5iYlfEteQUa8bY",
    authDomain: "monitoringtools-74cd1.firebaseapp.com",
    databaseURL: "https://monitoringtools-74cd1-default-rtdb.firebaseio.com",
    projectId: "monitoringtools-74cd1",
    storageBucket: "monitoringtools-74cd1.appspot.com",
    messagingSenderId: "877431183042",
    appId: "1:877431183042:web:ab181f3db7a8f701c00d5b"
}; // tu configuración de Firebase

firebase.initializeApp(firebaseConfig);

// Obtén una referencia al nodo que contiene tus datos
var dataRef = firebase.database().ref("sensor_data");

// Escucha cambios en la base de datos y actualiza la página cuando se produzcan
dataRef.on("value", function(snapshot) {
  // Obtiene los datos de la base de datos
  var data = snapshot.val();
  console.log(data)

  // Actualiza la página con los nuevos datos
  document.getElementById("temperature").innerHTML = data.temperature;
  document.getElementById("humidity").innerHTML = data.humidity;
  document.getElementById("voltage").innerHTML = data.voltage;
  document.getElementById("time").innerHTML = data.time;
});