const DateTime = require("good-date")
const { numbers, sum, getFrequencies, arrayAsObjectKeys } = require("../../systems/utilities")
const FrequencyChart = require("../../components/FrequencyChart")

module.exports = ({ vulnData })=> {
    // 
    // convert data
    // 
    vulnData = vulnData.map(each=>({
        ...each,
        year: each.publishDate.replace(/(\d+)-(\d+)-(\d+)/,"$1")-0,
        publishDate: new DateTime(each.publishDate),
        publishUnixTime: (new DateTime(each.publishDate)).unix,
    }))
    const vulnYears = new Set(vulnData.map(each=>each.year))
    const freqByYear = getFrequencies(vulnData.map(each=>each.year))
    const vulnScores = vulnData.map(each=>each.score)
    const dates = vulnData.map(each=>each.publishUnixTime)
    const maxDateMiliseconds = Math.max(...dates)
    const minDateMiliseconds = Math.min(...dates)
    const dateRange = maxDateMiliseconds - minDateMiliseconds
    const averageNumberOfMilisecondsInAMonth = 2629800000
    const averageNumberOfMilisecondsInAYear = 31557600000
    const years = dateRange / averageNumberOfMilisecondsInAYear
    const yearBuckets = numbers({
        count: years,
        min: (new DateTime(minDateMiliseconds)).year,
        max: (new DateTime(maxDateMiliseconds)).year,
        decimals: 0,
    })
    
    console.log(`vulnData.length is:`,vulnData.length)
    console.log(`vulnYears is:`,vulnYears)
    console.log(`freqByYear is:`,freqByYear)
    console.debug(`vulnData is:`,vulnData.slice(0,50))
    
    // 
    // Create chart
    // 
    return <FrequencyChart
                label="By Year"
                height={100}
                width={200}
                data={{
                    ...arrayAsObjectKeys(yearBuckets, 0),
                    ...getFrequencies(
                        vulnData.map(each=>each.publishDate.year)
                    )
                }}
                />
}
