import { ClipsModule } from './clips.module';

describe('ClipsModule', () => {
  let clipsModule: ClipsModule;

  beforeEach(() => {
    clipsModule = new ClipsModule();
  });

  it('should create an instance', () => {
    expect(clipsModule).toBeTruthy();
  });
});
