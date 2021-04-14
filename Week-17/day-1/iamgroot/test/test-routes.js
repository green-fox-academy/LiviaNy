'use strict';

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('groot endpoints', () => {
  // TODO: implement it
  it('GET /groot/?message=valami should return 200 status code', (done) => {
    request(app)
      .get('/groot/?message=valami')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body.received).to.equal(`valami`);
        expect(res.body.translated).to.equal(`I am Groot!`);
        done();
      });
  });

  it('GET /groot/ should return 400 error status is not ok', (done) => {
    request(app)
      .get('/groot/')
      .expect(400)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.error).to.equal('I am Groot');
        done();
      });
  });
});
