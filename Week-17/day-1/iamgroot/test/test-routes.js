'use strict';

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('groot endpoints', () => {
  // TODO: implement it
  it('GET /groot/?message=valami should return 200 sttatus code', (done) => {
    request(app)
      .get('/groot/?message=valami')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });
});
