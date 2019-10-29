import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('deve ser um objeto', () => {
    expect(spotify).to.be.an('object');
  });
  it('deve ter os métodos de `search`', () => {
    expect(spotify.search).to.exist;
  });
  it('deve ter os métodos de `album`', () => {
    expect(spotify.album).to.exist;
  });
});
