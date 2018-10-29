import firebase from 'firebase'

const prodConfig  = {
    apiKey: 'AIzaSyCCWys-hhpBFZurEiJDkMaH7eCEil_l_KQ',
    authDomain: 'resultpagemanager.firebaseapp.com',
    databaseURL: "https://resultpagemanager.firebaseio.com",
    projectId: "resultpagemanager",
    storageBucket: "resultpagemanager.appspot.com",
    messagingSenderId: "579200608080"
}

const devConfig = {
    apiKey: 'AIzaSyCCWys-hhpBFZurEiJDkMaH7eCEil_l_KQ',
    authDomain: 'resultpagemanager.firebaseapp.com',
    databaseURL: "https://resultpagemanager.firebaseio.com",
    projectId: "resultpagemanager",
    storageBucket: "resultpagemanager.appspot.com",
    messagingSenderId: "579200608080"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();