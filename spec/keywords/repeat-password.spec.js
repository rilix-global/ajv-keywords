import Ajv from 'ajv';
import repeatPasswordKeyword from '../../src/keywords/repeat-password';

describe('repeatPassword keyword', () => {
  it('Success on valid password repeat', () => {
    const ajv = new Ajv({ $data: true });
    repeatPasswordKeyword(ajv);

    const validator = ajv.compile({
      type: 'object',
      properties: {
        password: {
          type: 'string'
        },
        repeatPassword: {
          type: 'string',
          repeatPassword: { $data: '1/password' }
        }
      }
    });

    const valid = validator({ password: 'abc', repeatPassword: 'abc' });

    expect(valid).toBe(true);
  });

  it('Fails on invalid password repeat', () => {
    const ajv = new Ajv({ $data: true });
    repeatPasswordKeyword(ajv);

    const validator = ajv.compile({
      type: 'object',
      properties: {
        password: {
          type: 'string'
        },
        repeatPassword: {
          type: 'string',
          repeatPassword: { $data: '1/password' }
        }
      }
    });

    const valid = validator({ password: 'abc', repeatPassword: 'cba' });

    expect(valid).toBe(false);
  });

  it('Has keyword repeatPassword name', () => {
    expect.assertions(2);

    const ajv = new Ajv({ $data: true });
    repeatPasswordKeyword(ajv);

    const validator = ajv.compile({
      type: 'object',
      properties: {
        password: {
          type: 'string'
        },
        repeatPassword: {
          type: 'string',
          repeatPassword: { $data: '1/password' }
        }
      }
    });

    validator({ password: 'abc', repeatPassword: 'cba' });

    const errors = validator.errors;

    expect(errors.length).toBe(1);
    expect(errors).toEqual([{
      keyword: 'repeatPassword',
      dataPath: '.repeatPassword',
      message: 'should match password',
      params: {},
      schemaPath: '#/properties/repeatPassword/repeatPassword'
    }])
  })
});
