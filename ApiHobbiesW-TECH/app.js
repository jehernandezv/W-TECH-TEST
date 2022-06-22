import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import {DBConnectMongoose} from './config/db/db.js'
dotenv.config();
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**Routes */
import indexRouter from './routes/index.js';
import notesRouter from './routes/note.js'
app.use('/', indexRouter);
app.use('/note', notesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

const port = process.env.PORT || 3000;

/**Solo inicia el server express si la base de datos esta ok */
DBConnectMongoose().then(() => {
  app.listen(port, () => {
    console.log("server listening on port: ", port);
  });
}).catch(err => {
  console.log('err: ' , err)
});



