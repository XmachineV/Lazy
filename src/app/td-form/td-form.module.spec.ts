import { TdFormModule } from './td-form.module';

describe('TdFormModule', () => {
  let tdFormModule: TdFormModule;

  beforeEach(() => {
    tdFormModule = new TdFormModule();
  });

  it('should create an instance', () => {
    expect(tdFormModule).toBeTruthy();
  });
});
