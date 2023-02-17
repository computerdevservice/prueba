var firebaseConfig = {
    apiKey: "AIzaSyCldZAozuK0nHWBx0SsfLN-xiOD_r1WADI",
  authDomain: "prueba-app-web-server.firebaseapp.com",
  databaseURL: "https://prueba-app-web-server-default-rtdb.firebaseio.com",
  projectId: "prueba-app-web-server",
  storageBucket: "prueba-app-web-server.appspot.com",
  messagingSenderId: "106595098298",
  appId: "1:106595098298:web:6c91b426359d733e39ec83"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Agregar un usuario
db.collection("usuarios").add({
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25
})
.then(function(docRef) {
    console.log("Usuario agregado con ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error al agregar el usuario: ", error);
});


// Obtener los usuarios en tiempo real
db.collection("usuarios").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});


// Actualizar un usuario
db.collection("usuarios").doc("ID_DEL_USUARIO").update({
    nombre: "Pedro",
    apellido: "Gómez"
})
.then(function() {
    console.log("Usuario actualizado correctamente");
})
.catch(function(error) {
    console.error("Error al actualizar el usuario: ", error);
});


// Eliminar un usuario
db.collection("usuarios").doc("ID_DEL_USUARIO").delete().then(function() {
    console.log("Usuario eliminado correctamente");
}).catch(function(error) {
    console.error("Error al eliminar el usuario: ", error);
});
