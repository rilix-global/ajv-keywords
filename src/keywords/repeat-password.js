export default (ajv) => ajv.addKeyword('repeatPassword', {
  type: 'string',
  validate: function v(schema, password) {
    const valid = password === schema;
    if (!valid) {
      v.errors = [{
        keyword: 'repeatPassword',
        params: {},
        message: 'should match password'
      }];
    }
    return valid;
  },
  $data: true,
  errors: true
});
