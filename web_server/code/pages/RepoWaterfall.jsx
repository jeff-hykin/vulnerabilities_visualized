const Waterfall = require("../skeletons/Waterfall")
const Positioner = require("../skeletons/Positioner")
const RepoStream = require("../components/Waterfall/RepoStream")

// https://stackoverflow.com/a/62216738/4367134
function stringSimilarity(str1, str2, gramSize = 2) {
    function getNGrams(s, len) {
        s = " ".repeat(len - 1) + s.toLowerCase() + " ".repeat(len - 1)
        let v = new Array(s.length - len + 1)
        for (let i = 0; i < v.length; i++) {
            v[i] = s.slice(i, i + len)
        }
        return v
    }

    if (!str1?.length || !str2?.length) {
        return 0.0
    }

    //Order the strings by length so the order they're passed in doesn't matter
    //and so the smaller string's ngrams are always the ones in the set
    let s1 = str1.length < str2.length ? str1 : str2
    let s2 = str1.length < str2.length ? str2 : str1

    let pairs1 = getNGrams(s1, gramSize)
    let pairs2 = getNGrams(s2, gramSize)
    let set = new Set(pairs1)

    let total = pairs2.length
    let hits = 0
    for (let item of pairs2) {
        if (set.delete(item)) {
            hits++
        }
    }
    return hits / total
}

module.exports = async ({ children, ...properties }) => {
    const repoStreamElements = await RepoStream()
    return (
        <main style="height: 100%; overflow: scroll; justify-content: flex-start; position: relative;" class="column centered">
            <Positioner positionSelf="relativeToParent" top="1.3rem" right="1.3rem" width="26rem" zIndex="9999">
                <input
                    class="our-shadow-3"
                    placeholder="Search"
                    style={{ padding: "1rem", width: "100%", border: "none", borderRadius: "4px" }}
                    oninput={(eventObject) => {
                        const searchString = eventObject.target.value
                        // no search query
                        if (!searchString || searchString.length == 0) {
                            for (const each of repoStreamElements) {
                                each.style.display = each.originalDisplay
                            }
                        // searchquery
                        } else {
                            for (const each of repoStreamElements) {
                                // if its kinda close, display it
                                if (stringSimilarity(each.data.name, searchString) > 0.15) {
                                    each.style.display = each.originalDisplay
                                } else {
                                    // hide the object
                                    each.style.display = "none"
                                }
                            }
                        }
                    }}
                />
            </Positioner>
            <Waterfall>{repoStreamElements}</Waterfall>
        </main>
    )
}
