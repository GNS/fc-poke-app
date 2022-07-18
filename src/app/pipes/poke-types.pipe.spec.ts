import { PokeTypesPipe } from './poke-types.pipe';

describe('PokeTypesPipe', () => {
  it('create an instance', () => {
    const pipe = new PokeTypesPipe();
    expect(pipe).toBeTruthy();
  });
});
