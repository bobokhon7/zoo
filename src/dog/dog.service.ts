import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'woow';
  }
  public intoduce(): string {
    return 'My name is rex';
  }

  public modifyDetail(): string {
    return 'Sucessful modifed';
  }
}
