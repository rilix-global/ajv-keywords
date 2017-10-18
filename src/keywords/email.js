export default (ajv) => ajv.addKeyword('email', {
  type: 'string',
  compile: () => {
    const validator = ajv.compile({ type: 'string', format: 'email' });
    return function v(data) {
      const valid = validator(data);
      if (!valid) {
        const [{ keyword, message, params, dataPath, schemaPath, ...otherErrorProps }] = validator.errors;
        v.errors = [{
          keyword: 'email',
          params: {},
          message: 'should be a valid e-mail',
          ...otherErrorProps
        }];
      }
      return valid;
    };
  },
  errors: true
});
