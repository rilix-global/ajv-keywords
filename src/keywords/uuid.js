export default (ajv) => ajv.addKeyword('uuid', {
  type: 'string',
  compile: () => {
    const validator = ajv.compile({ type: 'string', format: 'uuid' });
    return function v(data) {
      const valid = validator(data);
      if (!valid) {
        const [{ keyword, message, params, dataPath, schemaPath, ...otherErrorProps }] = validator.errors;
        v.errors = [{
          keyword: 'uuid',
          params: {},
          message: 'should be a valid uuid',
          ...otherErrorProps
        }];
      }
      return valid;
    };
  },
  errors: true
});
