import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;
  const subscriptionService = {
    findAll: () => ['subscription-01', 'subscription-02'],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionService],
    })
      .overrideProvider(SubscriptionService)
      .useValue(subscriptionService)
      .compile();

    service = module.get<SubscriptionService>(SubscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    const expectedResult = ['subscription-01', 'subscription-02'];
    it('findAll the subscription taken  by the user up to now - (which is overridden by custom subscription service)', () => {
      expect(subscriptionService.findAll()).toStrictEqual([...expectedResult]);

      const result = service.findAll();
      expect(result).toEqual([...expectedResult]);
    });
  });
});
