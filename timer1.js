const args = process.argv.slice(2)

args.sort((a, b) => a - b)

if (args.length === 0) {
  return
}

for (let i of args) {
  if (i <= 0 || Number.isNaN(parseInt(i))) {
    continue
  }

  setTimeout(() => {
    process.stdout.write(`\x07`)
  }, i * 1000)
}

console.log(args)