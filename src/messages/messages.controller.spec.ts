import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Get '/' should return a message 'This is the messages list'
  it('should return a message "This is the messages list"', () => {
    expect(controller.listMessages()).toBe('This is the messages list');
  })
});
