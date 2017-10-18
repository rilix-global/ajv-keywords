import Ajv from 'ajv';
import uuidKeyword from '../../src/keywords/uuid';

describe('uuid keyword', () => {
  it('Success on valid uuid', () => {
    const ajv = new Ajv();
    uuidKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      uuid: true
    });

    const valid = validator('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

    expect(valid).toBe(true);
  });

  it('Fails on invalid uuid', () => {
    const ajv = new Ajv();
    uuidKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      uuid: true
    });

    const valid = validator('aaaaaaaaaaaaa-aaaa-aaaa-aaaaaaaaaaaa');

    expect(valid).toBe(false);
  });

  it('Has keyword uuid name', () => {
    expect.assertions(2);

    const ajv = new Ajv();
    uuidKeyword(ajv);

    const validator = ajv.compile({
      type: 'string',
      uuid: true
    });

    validator('abcdefgh');

    const errors = validator.errors;

    expect(errors.length).toBe(1);
    expect(errors).toEqual([{
      keyword: 'uuid',
      dataPath: '',
      message: 'should be a valid uuid',
      params: {},
      schemaPath: '#/uuid'
    }])
  })
});
