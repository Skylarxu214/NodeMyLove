// globals    - no window!!
// __driname  - path to current directory
// __filename - file name
// require    - function to use modules(CommonJs)
// module     - info about current module (file)

// process    - info about env where the program is being executed

const names = require('./4-names');
// it doesnty matter what the function name will be in here,
// any function got exported to app, will be the one from require
// doingWhat => sayHi
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// sayHi('Susan')
// sayHi(names.Sky)
// sayHi(names.Tian)

// sayHi(data.singlePerson.name)
// sayHi(data.items[0])


require('./7-mind-grenade')