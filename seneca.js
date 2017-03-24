/* eslint-disable no-useless-escape */
// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  // TODO: needs to be implemented
  if (email) {
    /*
    pattern taken from here
    http://jsfiddle.net/ghvj4gy9/embedded/result,js/
    */
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      if (email.includes('myseneca.ca') || email.includes('senecacollege.ca') || email.includes('senecac.on.ca')) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  // TODO: needs to be implemented
  if (name) {
    return name.replace(' ', '').concat('@myseneca.ca');
  }
  return '';
};
