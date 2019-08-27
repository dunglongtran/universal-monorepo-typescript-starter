import {Test, TestingModule} from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from './../src/app.module';
import {NestApplication} from "@nestjs/core";

describe('Module GraphQL (e2e)', () => {
  let app: NestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (getPosts)', () => {
    const query = `
    query{
  getPosts{
    id,title,vote
  }
}`
    return request(app.getHttpServer())
      .post('/graphql')
      .send({operationName: null, query})
      .expect(200)
      .expect(({body}) => {
        const posts = body.data.getPosts;
        expect(posts).toBeDefined()
        expect(Array.isArray(posts)).toBeTruthy()
      })
  });

  it('/ (createPost)', () => {
    const query = `
   mutation{
  createPost(createPostInput:{title:"Hello"}){
    id,title,vote
  }
}
   `
    return request(app.getHttpServer())
      .post('/graphql')
      .send({operationName: null, query})
      .expect(200)
      .expect(({body}) => {
        const post = body.data.createPost;
        expect(post).toBeDefined()
        expect(post.title).toEqual("Hello")
        expect(post.vote).toEqual(0)
      })
  });

  afterAll(async () => await app.close())
});
