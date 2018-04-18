var registerSuite = intern.getInterface('object').registerSuite;
var assert = intern.getPlugin('chai').assert;

registerSuite('Expander', {

  'details are hidden by default': function () {
    return this.remote
      .get('src/main/html/index.html')
      .findByClassName('masking')
      .isDisplayed()
      .then(isDisplayed => {
        assert.isNotTrue(isDisplayed);
      })
  },

  'details are shown on click': function () {
    return this.remote
      .get('src/main/html/index.html')
      .findByClassName('section')
      .click()
      .end()
      .sleep(1000)
      .findByClassName('masking')
      .isDisplayed()
      .then(isDisplayed => {
        assert.isTrue(isDisplayed);
      })
  }

});