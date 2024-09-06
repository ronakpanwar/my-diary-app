const mongoose = require('mongoose');

async function connectMongoDb(url){
    return await mongoose.connect(url ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
  });
}

module.exports = {
    connectMongoDb,
}
