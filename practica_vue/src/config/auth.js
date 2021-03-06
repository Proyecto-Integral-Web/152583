import fireApp from './_firebase'
import router from '@/router'

export default {
  logOut () {
    fireApp.auth().signOut()
    router.push({ name: 'login' })
  },
  async checkUser () {
    let user = await fireApp.auth().currentUser
    if (user) {
      return user
    }
    return null
  },

  async login (data) {
    await fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then((restul) => { router.push({ name: 'about' }) }).catch((err) => {
      // Regresar el error que se capture
      return Promise.reject(err)
    })
  },

  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password ===
      '') {
      return console.log('Todos los campos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((result) => {
      let newUser = {
        displayName: data.nombre,
        email: result.user.email,
        uid: result.user.id
      }
      fireApp.auth().updateCurrentUser(newUser).catch(err => console.table(err))
    }).catch((err) => {
      console.table(err)
    })
    console.log(data)
  }
}

/*  async login(data){
    fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then((result)=>{
      console.log(result)
      router.push({name})
    }).catch((err) =>{ console.log(err)
})
},
  //console.log(data)
  },

  signUp (data){
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return console.log('Todos los campos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }
        fireApp
          .auth()
          .updateCurrentUser(newUser)
          .catch(err => console.table(err))
      })
      .catch(err => {
        console.table(err)
      })
    console.log(data)
  }
}
*/
