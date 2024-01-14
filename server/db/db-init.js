const { MongoClient } = require("mongodb");

class MongoDBClient {
  constructor(uri) {
    this.client = new MongoClient(uri);
  }

  async getDreamCollection() {
    await this.client.connect();
    const db = this.client.db('dreamweaver');
    const collection = db.collection('dream');
    return collection;
  }
}

module.exports = MongoDBClient;
