import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}
  private users: { name: string; id: number }[] = [];
  create(createUserDto: CreateUserDto) {
    this.users.push({ name: createUserDto.name, id: createUserDto.id });
  }

  findAll() {
    return this.dbService.finAll();
  }

  findOne(id: string) {
    return this.dbService.getOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
