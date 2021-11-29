const fs = require("fs")
const yaml = require('js-yaml')
const path = require('path')
const { argv } = require("process")
const { snakeCase } = require("snake-case")
const process = require("process")

const whichFile = argv[2]
const midOutputFileName = path.join(path.dirname(whichFile), snakeCase(path.basename(whichFile).replace(/\.(broken|json)/g, ""))+".mid.json")
const outputFileName = path.join(path.dirname(whichFile), snakeCase(path.basename(whichFile).replace(/\.(broken|json)/g, ""))+".json")
let fileAsString = fs.readFileSync(whichFile).toString()

// remove non printable characters
fileAsString = fileAsString.replace(/[^ -~\n ]+/g, "");
// fix the ending/start
// example:
    // ^@^},
    // ^@^^@^End^@^^@^
    // docs/index.html                         | 10 +++++-----
    // docs/special.c2cbe016.js                |  2 +-
    // docs/website.baea1d43.js                |  8 ++++----
    // web_server/code/skeletons/Waterfall.jsx |  4 ++--
    // 4 files changed, 12 insertions(+), 12 deletions(-)
    // ^@^^@^Start^@^^@^
const linesChangedRegex = /\},\^@\^\^@\^End\^@\^\^@\^([\w\W]*?)(\^@\^\^@\^Start\^@\^\^@\^|[ \n\t]*$)/g
console.error("replaceing filechange count")
fileAsString = fileAsString.replace(linesChangedRegex, (eachString)=>{
    const match = eachString.match(linesChangedRegex)
    const lines = eachString.split("\n")
    const nonEmptyLines = lines.filter(each=>each.replace(/[ \n\t]+/g, "").length>0)
    const originalNonEmptyLines = [...nonEmptyLines]
    // remove },^@^^@^End^@^^@^
    nonEmptyLines.shift()
    // remove ^@^^@^Start^@^^@^ (if its there)
    const nextItemExists = nonEmptyLines.slice(-1)[0].match(/\^@\^\^@\^Start\^@\^\^@\^/)
    let endingBracket = "}"
    if (nextItemExists) {
        nonEmptyLines.pop()
        endingBracket = "},"
    }
    const filesChangedString = nonEmptyLines.pop()
    // const files = {}
    // for (const eachFile of nonEmptyLines) {
    //     files.replace()
    // }
    let filesChanged = 0
    let insertions = 0
    let deletions = 0
    try {
        filesChanged = filesChangedString.match(/[ \t]*(\d+)[ \t]*files?[ \t]*changed/)[1]
    } catch (error) { }
    try {
        insertions = filesChangedString.match(/[ \t]*(\d+)[ \t]*insertions?/)[1]
    } catch (error) { }
    try {
        deletions = filesChangedString.match(/[ \t]*(\d+)[ \t]*deletions?/)[1]
    } catch (error) { }
    // console.debug(`error is:`,error)
    // console.debug(`eachString is:`,eachString)
    // console.debug(`lines is:`,lines)
    // console.debug(`originalNonEmptyLines is:`,originalNonEmptyLines)
    // console.debug(`nonEmptyLines is:`,nonEmptyLines)
    // filesChanged = 0
    // insertions = 0
    // deletions = 0
    return `,    \n^@^filesChanged^@^: ${filesChanged},    \n^@^linesChanged^@^:${(insertions-0)+(deletions-0)},    \n^@^insertions^@^:${insertions},    \n^@^deletions^@^:${deletions}\n${endingBracket}`
})
console.error("writing mid file", midOutputFileName)
fs.writeFileSync(midOutputFileName, fileAsString)
console.error("done replaceing filechange count")
// replace the hanging / first ^@^^@^Start^@^^@^ with nothing
fileAsString = fileAsString.replace(/\^@\^\^@\^Start\^@\^\^@\^/g, '')

// escape all the slashes
fileAsString = fileAsString.replace(/\\/g, '\\\\')
// escape all the double quotes
fileAsString = fileAsString.replace(/"/g, '\\"')
// replace all the ^@^ with quotes
fileAsString = fileAsString.replace(/\^@\^/g, '"')
// put it inside an array
fileAsString = `[${fileAsString}]`


// save json file
console.error("writing to file")
fs.writeFileSync(outputFileName, fileAsString)

// format/validate it
console.error("formatting+validating file")
const fileString = fs.readFileSync(outputFileName).toString()
const commits = JSON.parse(fileString)
const commitsWithEasyDate = commits.map(each=>({...each, commitDate: each.commitFullDate.replace(/^(\d+-\d+-\d+) .+/, "$1")}))
// save it again but formatted
fs.writeFileSync(outputFileName, JSON.stringify(commitsWithEasyDate,0,4))
console.log(outputFileName)