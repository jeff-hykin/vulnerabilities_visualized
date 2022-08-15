const fs = require("fs")
const yaml = require('js-yaml')
const path = require('path')
const { argv } = require("process")
const { snakeCase } = require("snake-case")
const process = require("process")

const whichFile = argv[2]
const uniqueIdentifier = argv[3]
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
const linesChangedRegex = RegExp(`\\},${uniqueIdentifier}${uniqueIdentifier}End${uniqueIdentifier}${uniqueIdentifier}([\\w\\W]+?)(${uniqueIdentifier}${uniqueIdentifier}Start${uniqueIdentifier}${uniqueIdentifier}|[ \\n\\t]*$)`,"g")
console.error("replaceing filechange count")
let replaceNumber = 0
fileAsString = fileAsString.replace(linesChangedRegex, (eachString)=>{
    replaceNumber++
    const match = eachString.match(linesChangedRegex)
    const lines = eachString.split("\n")
    const nonEmptyLines = lines.filter(each=>each.replace(/[ \n\t]+/g, "").length>0)
    const originalNonEmptyLines = [...nonEmptyLines]
    // remove },^@^^@^End^@^^@^
    nonEmptyLines.shift()
    // remove ^@^^@^Start^@^^@^ (if its there)
    try {
        var nextItemExists = nonEmptyLines.slice(-1)[0].match(
            RegExp(`${uniqueIdentifier}${uniqueIdentifier}Start${uniqueIdentifier}${uniqueIdentifier}`)
        )
    } catch (error) {
        // console.error(`replaceNumber is:`,replaceNumber)
        // console.error(`linesChangedRegex is:`,linesChangedRegex)
        // console.error(`eachString is:`,eachString)
        // console.error(`match is:`,match)
        // console.error(`match[1] is:`,match[1])
        // console.error(`match[2] is:`,match[2])
        // console.error(`lines is:`,lines)
        // console.error(`eachString is:`,eachString)
        // console.error(`originalNonEmptyLines is:`,originalNonEmptyLines)
        // console.error(`nonEmptyLines is:`,nonEmptyLines)
    }
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
    return `,    \n${uniqueIdentifier}filesChanged${uniqueIdentifier}: ${filesChanged},    \n${uniqueIdentifier}linesChanged${uniqueIdentifier}:${(insertions-0)+(deletions-0)},    \n${uniqueIdentifier}insertions${uniqueIdentifier}:${insertions},    \n${uniqueIdentifier}deletions${uniqueIdentifier}:${deletions}\n${endingBracket}`
})
console.error("writing mid file", midOutputFileName)
fs.writeFileSync(midOutputFileName, fileAsString)
console.error("done replaceing filechange count")
// replace the hanging / first ^@^^@^Start^@^^@^ with nothing
fileAsString = fileAsString.replace(
    RegExp(`${uniqueIdentifier}${uniqueIdentifier}Start${uniqueIdentifier}${uniqueIdentifier}`,"g"),
    ''
)

// escape all the slashes
fileAsString = fileAsString.replace(/\\/g, '\\\\')
// escape all the double quotes
fileAsString = fileAsString.replace(/"/g, '\\"')
// replace all the ^@^ with quotes
fileAsString = fileAsString.replace(
    RegExp(`${uniqueIdentifier}`,"g"),
    '"'
)
// put it inside an array
fileAsString = `[${fileAsString}]`


// save json file
console.error("writing to file")
fs.writeFileSync(outputFileName, fileAsString)

// format/validate it
console.error("formatting+validating file")
const fileString = fs.readFileSync(outputFileName).toString()
const commits = JSON.parse(fileString)


// example
// {
//     "hash": "8883fa17",
//     "author": "Jeff Hykin",
//     "date": "Fri Nov 26 17:59:33 2021 -0600",
//     "email": "jeff.hykin@gmail.com",
//     "message": "improve mobile view",
//     "commitFullDate": "2021-11-26 17:59:33 -0600",
//     "age": "3 days ago",
//     "filesChanged": 4,
//     "linesChanged": 24,
//     "insertions": 12,
//     "deletions": 12,
//     "commitDate": "2021-11-26"
// },
const commitsWithEasyDate = commits.map(each=>{
    each.commitDate = each.commitFullDate.replace(/^(\d+-\d+-\d+) .+/, "$1")
    return [ each.filesChanged, each.linesChanged, each.commitDate,]
})
// save it again but formatted
fs.writeFileSync(outputFileName, JSON.stringify(commitsWithEasyDate))
console.log(outputFileName)