const fs = require("fs")
const yaml = require('js-yaml')
const path = require('path')
const { argv } = require("process")
const { snakeCase } = require("snake-case")

const whichFile = argv[2]
let fileAsString = fs.readFileSync(whichFile).toString()

// remove non printable characters
fileAsString = fileAsString.replace(/[^ -~\n ]+/g, "");
// make messages have keys
fileAsString = fileAsString.replace(/((\n|^)Date:.+)/g, "$1\nMessage: |")
// indent everything
fileAsString = fileAsString.replace(/(\n|^)(.+)/g, "$1    $2")
// convert commits to be keys
fileAsString = fileAsString.replace(/(\n|^)    commit (.+)/g, "$1$2:")
// replace "bad" indentation
fileAsString = fileAsString.replace(/(\n|^)        +/g, "        ")
// double indent everything that doesn't have a colon
fileAsString = fileAsString.replace(/(\n|^)(    [^: ][^:\n]*)(?=\n)/g, "$1    $2")


const fileName = path.join(path.dirname(whichFile), snakeCase(path.basename(whichFile).replace(/.txt$/, "")))
// save yaml file
fs.writeFileSync(fileName+".yaml", fileAsString)

// save the json file
const parsedCommitData = yaml.load(fileAsString)
fs.writeFileSync(fileName+".json", JSON.stringify(parsedCommitData,0,4))