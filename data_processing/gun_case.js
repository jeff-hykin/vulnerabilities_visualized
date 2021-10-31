module.exports = (gun)=>{
    return {
        get(keyList) {
            let endNode = gun
            for (const each of keyList) {
                endNode.get(each)
            }
            return new Promise((resolve, reject)=>endNode.once(resolve))
        },
        merge(keyList, value) {
            let endNode = gun
            const last = keyList.pop()
            for (const each of keyList) {
                endNode.get(each)
            }
            return new Promise(
                (resolve, reject)=>endNode.put(
                    { [last]: value },
                    (acknowledgement)=>{
                        acknowledgement.err&&reject(acknowledgement.err)
                        resolve(true)
                    },
                )
            )
        },
        // todo: delete
        // todo: batchSet
        // todo: batchGet
    }
}