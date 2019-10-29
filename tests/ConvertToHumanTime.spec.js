import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  // 0ms === 0:00
  it('deve converter 0ms em 0:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });

  // 1000ms === 0:01
  it('deve converter 1000ms em 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });

  // 11000ms === 0:11
  it('deve converter 11000ms em 0:11', () => {
    expect(convertToHumanTime(11000)).to.be.equal('0:11');
  });

  // 60000ms === 1:00
  it('deve converter 60000ms em 1:00', () => {
    expect(convertToHumanTime(60000)).to.be.equal('1:00');
  });
});
