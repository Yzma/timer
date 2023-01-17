const process = require('node:process')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.on('close', () => {
  console.log('Thanks for using me, ciao!')
  process.exit(1)
})

process.stdin.on('keypress', (str, key) => {

  const number = parseInt(str)
  if (!Number.isNaN(number) && number > 0) {
    console.log(`Setting timer for ${number} seconds...`)
    setTimeout(() => {
      console.log(`${number} second timer went off!`)
    }, number * 1000)
    return
  }

  if (str === 'b') {
    console.log(`beep`)
    process.stdout.write(`\x07`)
    return
  }

  if (key.ctrl && key.name === 'c') {
    rl.close()
  }
})

