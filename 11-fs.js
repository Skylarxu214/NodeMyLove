const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {
  
    if(err){
        console.log(err)
        return 
    }
    const first  = result
    console.log('2')
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return 
        }
        const second  = result
        console.log('3')
        writeFile('content/result-async.txt',
        `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return 
            }
            console.log(result)
            console.log('4')
        })
    })
})
console.log('1')