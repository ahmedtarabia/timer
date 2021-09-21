let argument = process.argv.slice(2)


for(let i = 0; i < argument.length; i++){
  if(Number(argument[i]) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(argument[i])
    }, argument[i]*1000)
  }
}



