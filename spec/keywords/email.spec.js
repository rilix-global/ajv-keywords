import Ajv from 'ajv';
import emailKeyword from '../../src/keywords/email';

describe('email keyword', () => {
  it('Success on valid email', () => {
    const ajv = new Ajv();
    emailKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      email: true
    });

    const valid = validator('email@example.com');

    expect(valid).toBe(true);
  });

  it('Fails on invalid email', () => {
    const ajv = new Ajv();
    emailKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      email: true
    });

    const valid = validator('email');

    expect(valid).toBe(false);
  });

  it('Has keyword email name', () => {
    expect.assertions(2);

    const ajv = new Ajv();
    emailKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      email: true
    });

    validator('email');

    const errors = validator.errors;

    expect(errors.length).toBe(1);
    expect(errors).toEqual([{
      keyword: 'email',
      dataPath: '',
      message: 'should be a valid e-mail',
      params: {},
      schemaPath: '#/email'
    }])
  })
});
