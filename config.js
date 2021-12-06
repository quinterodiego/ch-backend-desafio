const options = {
    mongodb: {
        host: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    file: {
        path: './data'
    },
    firestore: {
        apiKey: "AIzaSyCqpneGnZ_J6rjrlEZcSzRGi1vFA5LSCUM",
        authDomain: "ch-backend.firebaseapp.com",
        projectId: "ch-backend",
        storageBucket: "ch-backend.appspot.com",
        messagingSenderId: "472057868363",
        appId: "1:472057868363:web:2ce0c479b03924f2111dce"
    },
    mysql: {

    },
    sqlite: {

    }
}

module.exports = options;