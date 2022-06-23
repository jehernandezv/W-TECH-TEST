import request from 'supertest';
import app from '../../app.js'
import {DBConnectMongoose} from '../../config/db/db.js'

DBConnectMongoose().then(() => {
    app.listen(port, () => {
      console.log("server listening on port: ", port);

      describe('test for request resource notes', () => {
        describe('when fields of note is missing', () => {
            describe('POST /note/add', () => {
                test('should response with a 400 status code', async () => {
                    const fields = [
                        {},
                        {"note":""}
                    ]

                    for(const body of fields){
                        const response = await request(app).post('/note/add').send(body);
                        expect(response.statusCode).toBe(400);
                    }
                })
            })
        })
    });











    });
  }).catch(err => {
    console.log('err: ' , err)
  });

