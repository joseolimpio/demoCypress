describe('Testing API with JSONPlaceholder', () => {
    it('Do a GET', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
            expect(response.body.title).to.not.be.empty;
        });
    });
    it('Do a POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
          title: 'My new POST',
          body: 'this is a cypress test.',
          userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('title', 'My new POST');
            expect(response.body).to.have.property('body', 'this is a cypress test.');
            expect(response.body).to.have.property('userId', 1);
            expect(response.body).to.have.property('id');
        });
      });
    
    it('Do a PUT', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
          title: 'Updated Title',
          body: 'this is a cypress test, again.',
          userId: 1
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'Updated Title');
            expect(response.body).to.have.property('body', 'this is a cypress test, again.');
            expect(response.body).to.have.property('userId', 1);
            expect(response.body).to.have.property('id', 1);
        });
    });
    it('Do a DELETE', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.empty;
          });
      });    
});