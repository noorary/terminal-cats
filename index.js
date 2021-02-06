#!/usr/bin/env node

const axios = require('axios')
const chalk = require('chalk')
const boxen = require('boxen')

const fact = async () => {
  const response = await axios.get('https://catfact.ninja/fact')
  console.log(chalk.hex('#ff00ea').bold('Here is a cat fact for you:', '\n'))



  const fact = chalk.black.bgHex('#7dafff')(response.data.fact)

  console.log(fact, '\n')
  console.log(chalk.hex('#ff00ea').bold('Thank you bye! :3', '\n'))
}

fact()


