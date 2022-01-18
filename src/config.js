export default {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "curso-back",
    private_key_id: "7134088ba958127a8eb44ba55d523378aab61e2b",
    private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXcLbMyH1SnYMw\nJvSOOOHkKOcNDhSND78cQ5QxUiA5mKaXoNrX+7NhjFNT/fEw/dRYTpJ7g4+x6SIj\neVOmPSYJfFcQOucCr3dDziF8sqxP/UI/dKG0funPNVv2lf/2kNXh2XXfCGxL3aUN\nQt62CS6AH/yek+QeYfqsQezJ7bBLz3Wi3b2T7BA2tzCOG4EmAdO3HapFliww0R48\nUscfY3Nn+0oliufYQ+aP9FybKFn2M53Hkwnak0xyPJvaoiVGtMsPHw2nzNeqUSHf\nLfQIZa6oh9fTCg+qe2yrCQ6c7zCZedRVFRTOXK2cR2iMnPtf5YmUuwJ/TJEolUrj\nYCvpftuFAgMBAAECggEACOlxtmDoxj0byychYKy7s2t5u1GEyh0Ho8yr2apzCM7m\nvUj7JIoV7ogWflf33TXyzcBaUN+tVwe00NDZA/xtkWDiXRqCqdrGTTi+q+DcPebV\nEbjqY4QIefjUGAw2bWWqY1BSjupTSIQfqr/EZLVWhhhMo+asPhGBhBSqDeRWMZyM\n20DhzYvD0hJwg7uRomWrfD7WMRjkhkHanRAGXJ1pMimeN194RLQchD9xsQR/IEEv\nYYlKZ4NKJR/w0SVexA27k9A10pkN856ar+kGzaz1PSwotyplTOucAoFE7lHbVnTE\nHDAN9LeyLek9XjrC5sf0gQ/s+yyDJnmPRbXuzZIB9QKBgQD/EVnwgg3Fd5gAGa3+\nNn+tleWc1cPKw6et0lO3jGkySxTy1QgLDbleaymfOJOG7VoD11U+PegosQuO5vR4\nHU0yPe+WoG83ejcmR8wZv3UNDxNmWOd4+lJ5NVV5GDxeGcNVRUP+vWgHB97w9V6g\nt+8Le7BEpo4zJio92N2aMV5h4wKBgQDYOkk/ww9ca57+A0rqVvmdNtAjWc/FsnAV\nxN9K0NnJyyQQBUewTFi/EW//iXgCdkPenY03eD9VMme7Ks7UZ5ZHvppMvgFQzY7z\n5NeKJFLYu/qLaip6C8QDB6oBZXZTLXRXf/vxo0LBDqfNqq8XXuMzr22zQtYiDCv+\n2dvyLeYpdwKBgQD94naEl98/S6AnkWgH3pVN4iNP7dLaM8/mi7E6xO882VE7uGIu\nJnX5jm86heUKa5yqsB6wOoyoXDml/ysdmATr2oxtgLnTHbphRxvYESNgYT4tJJca\nawfGkBjI1R/ZholQigZ5PGycevAlJgcPsKWm53H3k1V9giKPtxo0zaklgwKBgGza\nwv9/kp8javJT9AYPbTCRZK03TJspXrYG26bNh6bIRspt7g46ET93ZtvNeAY9RaOv\ny2UOe0vHyWL3hRJ3Z7eMpB9YVE86fOoZ3cykxrRnxhUjiGjSvYYM+LAlRTFQo85d\nFxgp6bRJTX8Dm4v3cAgYG/DwB98yI3/0a377TnC3AoGBALydoZ1copxVDEH/tsnY\n7JdAjd88ir3v/i2MkWXWpvQtQdrpL53nDcA3kWYdOwIwww75Urk7vgT+jE4qptkb\n/lJUZJPbqIeZXXHSqYkU6MWuCgVvDoeAdcX3PDZ+h4Mm61RUfV7nz128j5bsBM2L\n6Sr0jgQcflXU1VbWcPcDTX/2\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-dh6zi@curso-back.iam.gserviceaccount.com",
    client_id: "103565030758591757229",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dh6zi%40curso-back.iam.gserviceaccount.com",
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: `./DB/ecommerce.sqlite`,
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "secret",
      database: "desafio-7",
    },
  },
};
