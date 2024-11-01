import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private fakeDb: Map<string, any> = new Map();

  create(key: string, data: any) {
    return this.fakeDb.set(key, data);
  }

  getOne(key: string): any | undefined {
    return this.fakeDb.get(key); // not handled the undefined case
  }

  finAll() {
    const data = [];
    for (const d of this.fakeDb.entries()) {
      data.push(d);
    }

    return data;
  }
}
