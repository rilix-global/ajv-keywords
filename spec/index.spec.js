import rilixAjvKeywords from '../src';
import Ajv from 'ajv';

describe('@rilix/ajv-keywords', () => {
  it('Exports a function', () => {
    expect(typeof rilixAjvKeywords).toBe('function');
  });

  it('Registers all keywords', () => {
    expect.assertions(4);
    
    const ajv = new Ajv();
    rilixAjvKeywords(ajv);

    expect(ajv.getKeyword('email')).not.toBe(false);
    expect(ajv.getKeyword('uuid')).not.toBe(false);
    expect(ajv.getKeyword('repeatPassword')).not.toBe(false);
    expect(ajv.getKeyword('alphanumeric')).not.toBe(false);
  });
});
