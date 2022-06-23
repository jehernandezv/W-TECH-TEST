import mongoose from 'mongoose';

let dataBase;

const DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        if (dataBase) {
            return dataBase;
        }
        mongoose.Promise = global.Promise;

        // database connect
        mongoose.connect('mongodb://' + process.env.API_WTECH_MONGODB_HOST + ":" + process.env.API_WTECH_MONGODB_PORT + "/" + process.env.API_WTECH_MONGODB_NAME)
            .then(() => {
                console.log('mongo connection created');
                resolve(dataBase);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(dataBasedb);
            });
    });
};

const getDBConexion = function () {
    if (dataBase) {
        return dataBase;
    }else{
        console.log('There is no mongo connection');
        return null;
    }
}

export { DBConnectMongoose, getDBConexion }