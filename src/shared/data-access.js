import * as mongodb from 'mongodb';
import to from './to';

class DataAccess {

    constructor() {
        this.URL = 'mongodb://127.0.0.1:27017/caty';
        this.COLLECTION = 'medications';
        this.DATABASE = 'caty';

    }


    async writeMedication(pill) {
        console.log(this.URL)
        let client = new mongodb.MongoClient(this.URL, { useNewUrlParser: true });
        return client.connect((err, db) => {
            if (err) {
                console.log(err);
            } else {
                db
                    .db(this.DATABASE)
                    .collection(this.COLLECTION)
                    .insert(pill);
            }
        });
    }
}

export default DataAccess;