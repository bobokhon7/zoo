import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'MYEOW';
  }
  public intoduce(): string {
    return 'My name is cat';
  }
}
