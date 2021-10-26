const fs = require("fs")
const yaml = require('js-yaml')
const { argv } = require("process")

const whichFile = argv[2]
let fileAsString = fs.readFileSync(whichFile).toString()

// make messages have keys
fileAsString = fileAsString.replace(/((\n|^)Date:.+)/g, "$1\nMessage: |")
// indent everything
fileAsString = fileAsString.replace(/(\n|^)(.+)/g, "$1    $2")
// convert commits to be keys
fileAsString = fileAsString.replace(/(\n|^)    commit (.+)/g, "$1$2:")

// save yaml file
fs.writeFileSync(whichFile+".yaml", fileAsString)

// save the json file
const parsedCommitData = yaml.load(fileAsString)
fs.writeFileSync(whichFile+".json", JSON.stringify(parsedCommitData,0,4))