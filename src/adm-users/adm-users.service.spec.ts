import { Test, TestingModule } from '@nestjs/testing';
import { AdmUsersService } from './adm-users.service';

describe('AdmUsersService', () => {
  let service: AdmUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmUsersService],
    }).compile();

    service = module.get<AdmUsersService>(AdmUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
