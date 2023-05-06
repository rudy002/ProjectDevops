const request = require('supertest');
const app = require('../server');

describe("Test suit 1:", () => {
    test("test 1: ", async ()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200); //work properly
    })
    test("test 2: ", async()=>{
        const res = await request(app).get('/1234');
        expect(res.statusCode).not.toEqual(200);//404 not found
    })
});