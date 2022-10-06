 import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
 import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity'
 import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto)
  }

  findAll() {
    return this.repository.find()
  }

  async findOne(id: number) {
    let findElem = await this.repository.findOne({where: {id}})
    if(!findElem) {
      throw new NotFoundException('Пользователь не найден')
    }
    return findElem
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let findElem = await this.repository.findOne({where: {id}})
    if(!findElem) {
      throw new NotFoundException('Пользователь не найден')
    }
    return this.repository.update(id, updateUserDto)
  }

  async remove(id: number) {
    let findElem = await this.repository.findOne({where: {id}})
    if(!findElem) {
      throw new NotFoundException('Пользователь не найден')
    }
    return this.repository.delete(id)
  }
}
