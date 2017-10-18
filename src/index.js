import emailKeyword from './keywords/email';
import uuidKeyword from './keywords/uuid';
import alphanumericKeyword from './keywords/alphanumeric';
import repeatPasswordKeyword from './keywords/repeat-password';

export default (ajv) => {
  emailKeyword(ajv);
  uuidKeyword(ajv);
  alphanumericKeyword(ajv);
  repeatPasswordKeyword(ajv);
}
