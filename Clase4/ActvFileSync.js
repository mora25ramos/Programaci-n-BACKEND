const fs = require ('fs')

const date = new Date().toLocaleDateString()
const hour = new Date().toLocaleTimeString()

fs.writeFile ('./fecha.txt', `Fecha: ${date}`, (error) => {
  if (error) throw new Error (`Error en lectura: ${error} `) 
  fs.readFile ('./fecha.txt', 'utf-8', (error, result) => {
    if (error) throw new Error (`Error en lectura: ${error}`)
    console.log (result)

    fs.appendFile ('./fecha.txt', `Hora: ${hour}`, (error) => {
      if (error) throw new Error (`Error en lectura: ${error}`) 
      fs.readFile ('./fecha.txt', 'utf-8', (error, result) => { if (error) throw new Error (`Error en lectura: ${error}`)
    console.log (result)
      } )
    } )
  } )
}) 
