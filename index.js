const mongodb = require("mongodb");

run().catch(error => console.error(error));

async function run(){

    const uri= 'mongodb://user:Pass1234@localhost:29036,localhost:29037,localhost:29038/?replicaSet=my_replicanew&readPreference=primaryPreferred'
    const client = await mongodb.MongoClient.connect(uri);
    const db = client.db('dbname');

    db.collection('test').
    watch({ fullDocument: 'updateLookup' }).on('change', data => console.log(new Date(), data));

    console.log(new Date(), 'Updating doc');
    await db.collection('test').updateOne({ name: 'Axl Rose' }, { $set: { name: 'Slash1' } });
    console.log(new Date(), 'Updated doc');
}



