// globals    - no window!!
// __driname  - path to current directory
// __filename - file name
// require    - function to use modules(CommonJs)
// module     - info about current module (file)

// process    - info about env where the program is being executed

const names = require('./4-names');
const sayHi = require('./5-utils')



sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)