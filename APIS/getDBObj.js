const mclient = require("mongodb").MongoClient

async function getCollection(coll){
    const client = await mclient.connect("mongodb+srv://vnr2022:vnr2022@shivacluster.zijeq.mongodb.net/?retryWrites=true&w=majority")    
    
    let dbObj = client.db("vnr2022db")
    
    let collection = dbObj.collection(coll)
    return collection
}

module.exports = getCollection