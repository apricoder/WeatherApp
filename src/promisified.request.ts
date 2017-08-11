const Promise = require('bluebird');
const PromisifiedRequest = Promise.promisify(require('request'), {multiArgs: true});
Promise.promisifyAll(PromisifiedRequest, {multiArgs: true});

export default PromisifiedRequest;
