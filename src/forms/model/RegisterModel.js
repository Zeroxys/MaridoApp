//ModelFORM for the Register Component

import t from 'tcomb-form-native'

const Person = t.struct({
  name : t.String,
  email : t.String,
  password : t.String,
  phone : t.Number,
  home : t.String
})

export default Person