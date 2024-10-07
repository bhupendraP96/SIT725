const expect = require("chai").expect;
const request = require('request');

const baseUrl = "http://localhost:3000/api/gallery/";


describe('Gallery Controller Tests', () => {
    
    describe('Add Image', () => {

        it('should add an image with valid data', (done) => {
            const image = { title: 'Test Image', description: 'This image is added for testing purpose', path: "images/gallery5.jpg", category: "Test" };

            request.post(
                {
                    url: baseUrl,
                    json: true,
                    body: image
                },
                (error, response, body) => {
                    expect(body.statusCode).to.equal(201);
                    expect(body).to.have.property('message', 'Image added');
                    done();
                }
            );
        });

        it('should return error when no image data is provided', (done) => {
            request.post(
                {
                    url: baseUrl + "/invalid",
                    json: true,
                },
                (error, response, body) => {
                    expect(response.statusCode).to.equal(404);
                    done();
                }
            );
        });
    });

    describe('Get all images', () => {

        it('should retrieve all images', (done) => {
            request.get(
                {
                    url: baseUrl,
                    json: true
                },
                (error, response, body) => {
                    expect(body.statusCode).to.equal(201);
                    expect(body).to.have.property('data');
                    expect(body.data).to.be.an('array');
                    done();
                }
            );
        });

        it('should return error for failed connection using invalid endpoint', (done) => {
            request.get(
                {
                    url: `${baseUrl}/wrong-endpoint`,
                    json: true
                },
                (error, response, body) => {
                    expect(response.statusCode).to.equal(404);
                    done();
                }
            );
        });
    });
});
