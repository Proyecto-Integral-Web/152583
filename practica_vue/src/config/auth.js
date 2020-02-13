import fireApp from '/_firebase'
export default {
  singup (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('Todos los campos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email.data.password)
      .then((result) => {
        let newUser = result.user
        newUser.displayName = data.nombre
        fireApp.auth().updateCurrentUser(newUser).catch(err => console.log(err))
      }).catch((err) => {
        console.log(err)
      }
      )

    console.log(data)
  }
}
