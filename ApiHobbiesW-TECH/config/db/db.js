import mongoose from 'mongoose';

var db;

var DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        if (db) {
            return db;
        }
        mongoose.Promise = global.Promise;

        // database connect
        mongoose.connect('mongodb://' + process.env.API_WTECH_MONGODB_HOST + ":" + process.env.API_WTECH_MONGODB_PORT + "/" + process.env.API_WTECH_MONGODB_NAME)
            .then(() => {
                console.log('mongo connection created');
                resolve(db);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(db);
            });
    });
};

var getDBConexion = function () {
    if (db) {
        return db;
    }else{
        console.log('There is no mongo connection');
        return null;
    }
}

export { DBConnectMongoose, getDBConexion }