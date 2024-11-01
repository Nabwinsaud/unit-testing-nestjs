import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DbService } from 'src/db/db.service';

describe('UsersService', () => {
  let service: UsersService;
  let dbService: DbService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: DbService,
          // useValue: {
          //   getOne: jest.fn().mockResolvedValue({ name: 'John doe', id: '1' }),
          // },
          // use to dynamically generate mocks and use in case of where value is dependent in runtime
          useFactory: () => ({
            getOne: jest.fn().mockResolvedValue({ name: 'John doe', id: '1' }),
          }),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    dbService = module.get<DbService>(DbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user information to "{name:"John doe","id":1} when user id is 1" ', async () => {
    const userId = '1';

    const result = await service.findOne(userId);
    console.log('result', await dbService.getOne(userId));
    expect(result).toStrictEqual({ name: 'John doe', id: userId });

    // expect(dbService.getOne).toHaveBeenCalledWith('3'); // "fail", the id have not been called with id 3
    expect(dbService.getOne).toHaveBeenCalledWith(userId); // pass the test
  });
});
