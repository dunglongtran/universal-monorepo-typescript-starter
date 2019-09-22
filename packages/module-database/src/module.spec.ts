import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();

  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(1).toBeDefined()
    });
  });
});
