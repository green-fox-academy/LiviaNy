`ues strict`;

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('/awesome endpoints', () => {
  it('GET /awesome should return status 200', (done) => {
    request(app)
      .get('/awesome')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('POST /awesome should return status 201 and new song as part of the list', (done) => {
    request(app)
      .post('/awesome')
      .expect(201)
      .send({ artist: 'New Singer', title: 'New Song', genre: 'New Genre', year: 'New Year', rating: 1000 })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body[12].artist).to.equal('New Singer');
        expect(res.body[12].title).to.equal('New Song');
        expect(res.body[12].genre).to.equal('New Genre');
        expect(res.body[12].year).to.equal('New Year');
        expect(res.body[12].rating).to.equal(1000);
        done();
      });
  });

  it('DELETE /awesome/13 should return status 201', (done) => {
    request(app)
      .delete('/awesome/13')
      .expect(201)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body[12]).to.be.undefined;
        done();
      });
  });

  it('PUT /awesome/1 should return status 201', (done) => {
    request(app)
      .put('/awesome/1')
      .expect(201)
      .send({ rating: 15000 })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body[0].rating).to.equal(15000);
        done();
      });
  });

  it('GET /awesome/3 should return status 201 list length should be 3', (done) => {
    request(app)
      .get('/awesome/3')
      .expect(201)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body.length).to.equal(3);
        done();
      });
  });

  it('GET /awesome/artist/five should return status 201 list length should be 2', (done) => {
    request(app)
      .get('/awesome/artist/five')
      .expect(201)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body.length).to.equal(2);
        expect(res.body[0].artist).to.equal('Five Stairsteps');
        expect(res.body[1].artist).to.equal('The Jackson Five');
        done();
      });
  });

  it('GET /awesome/genre/pop should return status 201 list length should be 3', (done) => {
    request(app)
      .get('/awesome/genre/pop')
      .expect(201)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body.length).to.equal(3);
        done();
      });
  });

  it('GET /awesome/year/1972 should return status 201 list length should be 2', (done) => {
    request(app)
      .get('/awesome/year/1972')
      .expect(201)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body.length).to.equal(2);
        expect(res.body[0].year).to.equal('1972');
        expect(res.body[1].year).to.equal('1972');
        done();
      });
  });
});
