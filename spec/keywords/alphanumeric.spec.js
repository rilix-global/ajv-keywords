import Ajv from 'ajv';
import alphanumericKeyword from '../../src/keywords/alphanumeric';

describe('alphanumeric keyword', () => {
  it('Success on valid alphanumeric', () => {
    const ajv = new Ajv();
    alphanumericKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      alphanumeric: true
    });

    const valid = validator('abc123');

    expect(valid).toBe(true);
  });

  it('Fails on invalid alphanumeric', () => {
    expect.assertions(2);

    const ajv = new Ajv();
    alphanumericKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      alphanumeric: true
    })

    expect(validator('abc')).toBe(false);
    expect(validator('123')).toBe(false);
  });

  it('Has keyword email name', () => {
    expect.assertions(2);
    
    const ajv = new Ajv();
    alphanumericKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      alphanumeric: true
    });

    validator('abc');

    const errors = validator.errors;

    expect(errors.length).toBe(1);
    expect(errors).toEqual([{
      keyword: 'alphanumeric',
      dataPath: '',
      message: 'should contain letters and numbers',
      params: { data: 'abc' },
      schemaPath: '#/alphanumeric'
    }])
  })
});
