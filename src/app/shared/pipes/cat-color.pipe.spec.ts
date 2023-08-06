import { CatColorPipe } from './cat-color.pipe';

describe('CatColorPipe', () => {
  it('create an instance', () => {
    const pipe = new CatColorPipe();
    expect(pipe).toBeTruthy();
  });
});
