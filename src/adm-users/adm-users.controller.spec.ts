import { Test, TestingModule } from '@nestjs/testing';
import { AdmUsersController } from './adm-users.controller';
import { AdmUsersService } from './adm-users.service';

describe('AdmUsersController', () => {
  let controller: AdmUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmUsersController],
      providers: [AdmUsersService],
    }).compile();

    controller = module.get<AdmUsersController>(AdmUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
