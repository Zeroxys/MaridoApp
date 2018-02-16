//ModelFORM for the Register Component

import t from 'tcomb-form-native'

const Person = t.struct({
  Nombre : t.String,
  Correo_Electronico : t.String,
  Contraseña: t.String,
  Telefono : t.Number,
  Domicilio : t.String
})

export default Person