/* global test expect describe */
/* eslint-disable prefer-arrow-callback */

// First require (e.g., load) our seneca.js module
const seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */

describe('seneca.isValidEmail()', () => {
  test('returns true for simple myseneca address', () => {
    const simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', () => {
    const gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for somethin other than a String', () => {
    const data = 27;
    expect(seneca.isValidEmail(data)).toBe(false);
  });

  test('returns false for null', () => {
    const data = null;
    expect(seneca.isValidEmail(data)).toBe(false);
  });

  test('returns false for string with whitespace', () => {
    const data = 'some one@myseneca.ca';
    expect(seneca.isValidEmail(data)).toBe(false);
  });

  test('returns true for senecacollege.ca address', () => {
    const simpleEmail = 'someone@senecacollege.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns true for senecac.on.ca address', () => {
    const simpleEmail = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('adds @myseneca.ca to the end of name with space', () => {
    const name = 'm shaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('adds @myseneca.ca to the end of null', () => {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe('');
  });
});
