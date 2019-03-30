const chai = require('chai');
const padraoController = require('../controllers/padraoController');

const assert = chai.assert;

describe('TDD API consume', () => {
  it('API response', () => {
    assert.equal(padraoController.get('a'),200);
  })

})

