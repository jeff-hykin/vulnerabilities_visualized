const Gun = require("../tools/gun_case")

const db = Gun({ peers: ["http://localhost:8765/gun"] })

// spreading it out for autocomplete detection
module.exports = {
    get: db.get,
    set: db.set,
    delete: db.delete,
    merge: db.merge,
    keys: db.keys,
    connect: db.connect,
}
