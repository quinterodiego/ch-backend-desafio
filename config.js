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
        type: "service_account",
        project_id: "ch-dosan",
        private_key_id: "c3bfa4ef17944ab59a57aae9a0767f8fe5340037",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5jD1LeIZ5wjw0\nxxGHm/MXPpXgVFqCj8oSdy2QQPRobZRO8Di2PmO82UuP1Y24kFn+ANRcqT027JcF\nRKjvIYDujry8oSnaQIDANaygHCxMxTXXdFprD0a9CnjjonI4UXC99D6GzgKCbPZK\n5lKVExrioGchTFy1hezIFZqRZZb5ihMt7MIW1bA5k9gJG/ad6YgL+D1hgnC7i+K4\nMSE5FW4BQAHz/Osvxa3y0+xcL6bgTfscX5NLSAcZmuDbhsCgKhRc8Jt5yPcYH7xF\nsnfw8wyOW3AqmMVzi/M9pFeM/u9b5glFj3Shwr7Ate4weVueJVnskqR9O6aTgRre\nurgK9qLrAgMBAAECggEABJZktuajny5f4geAoHNeSZcriiCryDSZO2b6QmnItoLs\nZXM9A7cmgiHL43d/3y36e57g9pWHROyz4yvKaCHSQpOsM5cMe4VCvv3UvHSrMmQM\ngRIzC23qQtGXzDuqSp2A2xbHK6VmRyaTLvuOKSS6x8Wi0cjwizBkz/bwxmLWSRRy\naTTgt60tZbZhJ6GIxj2rHU6GFwwQUiAcCmJGJ5YNdG4rZ0zKuqnpE0h1S+iJ906H\neZc3eTxGK8s7E5hWCX+/jK+rNbfxkT1ePvdCzr7iNp3Wp0s2F42XoYSBRzX84x4W\niU16eu4uEpxx0ItZs/Wiv9QVV/tb/yQt2NfNps3FkQKBgQDcGwnMeUdjNJtdJGOY\nrIdLWm+XmP+kSSsShkHSkEyftrDl8SwSuS1jn8V6YzvrcQz2IjUdCAyzk27jFdMh\nEDXbaWKadMTqsAK6zfKqWI/hlEPhPnZcLvmfRD64Qguzk5BdC4E0rGPI7pXX60a/\nwTailGgM6JUZf6nY3Y+bXq/WOQKBgQDXznulASkEJlecwTiXsr+2WfU7GdpEpiGy\nC8Gdd4LBk1jxwL6DjKpXuSPyJsu6Me1sY/bJ0lwf2ZS1Ooz5K4E/yCABU7luVTeT\ntzwSy3e2nZsSCPaIo+QImDXV5csJDOg9JjLwNpHwRXu1NlICnULC6OnkuSQbCIsA\niiZzvG4iQwKBgH4NDgOHwRZTXlZtLIyW4bSJyjarbFwNexlUwgVwljExUwWcpHzk\nh9Xx/golIn+ncqDS3lAN+BgvauWp7guVWQKay9lg3hT5T9bjcwGTTnMFkgpA10/b\npyFK2BB14nWpIJfoqsobn9nGqRHKr+3JHRzmmOAropfDwOVtnXyBMXohAoGAbTZT\noGd76Fu3Dt9B0pNlLdVMo4Ir0X35o28LprLqeygkZQPT5iLzub06EbvMcgf+TVIx\nfGV2ta+Y8DYXTanUmQCgIcvLFakOnTSntCNADCyqY3Ahw3idWDQfWoYWQBhGF1wT\nfzk+lce0GTrKOgR32segRl3jhcLHBZjkaMG9Qp0CgYEAmmNsFMQM0aOlIUNzPI9a\noswa2yf2tK0X2vmBj1Uf9cqYPX1LXrJ+Hf7hNOqY8ViUkwNV3Z0TE7hkH2+6vkDS\nnSRumUlK6kg4ycuFbsal+/fxHg9KaZR1CgxJ9iAIxotxpHVy3K0XIFxR3k9PiEw6\nG++or/ZHn8q3PHJ3l/84ZuA=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-cg5bc@ch-dosan.iam.gserviceaccount.com",
        client_id: "110403838512478335565",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cg5bc%40ch-dosan.iam.gserviceaccount.com"
        },
    mysql: {

    },
    sqlite: {

    }
}

module.exports = options;