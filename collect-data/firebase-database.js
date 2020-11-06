function collect() {
    console.log(document.getElementById("data").value)

    var database = firebase.database();

    // function writeUserData(userId, name, email, imageUrl) {
    
  database.ref('data'+Math.random().toString(36).substr(2, 9)).set({
    name: document.getElementById("data").value,
  });
// }
}
