import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionService {
  findAll() {
    return ['subscription-1'];
  }
}
