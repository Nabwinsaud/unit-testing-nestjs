import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DbService } from 'src/db/db.service';

describe('UsersController', () => {
  let controller: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, DbService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return the array of users list from "user service which return data from the db service" ', () => {
      const result = [{ name: 'Nabin', id: 1 }];
      jest.spyOn(userService, 'findAll').mockImplementation(() => result);
      expect(controller.findAll()).toBe(result);
    });
  });
});
