import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC_JBcxPMM8L-ITB6ZksCsZhGlxb2k_wTY',
  authDomain: 'login152583.firebaseapp.com',
  databaseURL: 'https://login152583.firebaseio.com',
  projectId: 'login152583',
  storageBucket: 'login152583.appspot.com',
  messagingSenderId: '137625136503',
  appId: '1:137625136503:web:99a08bc8f0cc3116f10572',
  measurementId: 'G-28TXVJ1283'
}

var fireApp = firebase.initializeApp(firebaseConfig)
export default fireApp
