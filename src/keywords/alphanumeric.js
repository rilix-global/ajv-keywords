const alphaNumRegex = /^(?=.*[0-9])(?=.*\D)([\D0-9]+)$/;

export default (ajv) => ajv.addKeyword('alphanumeric', {
  type: 'string',
  validate: function v(sch, data) {
    const valid = alphaNumRegex.test(data);
    if (!valid) {
      v.errors = [{
        keyword: 'alphanumeric',
        params: { data },
        message: 'should contain letters and numbers'
      }];
    }
    return valid;
  },
  errors: true
});
