import { FromEachCatPipe } from './from-each-cat.pipe';

describe('FromEachCatPipe', () => {
  it('create an instance', () => {
    const pipe = new FromEachCatPipe();
    expect(pipe).toBeTruthy();
  });
});
