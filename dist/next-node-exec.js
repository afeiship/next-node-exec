/*!
 * name: next-node-exec
 * url: https://github.com/afeiship/next-node-exec
 * version: 1.0.0
 * date: 2019-06-20T02:44:51.631Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var exec = require('child_process').exec;

  // https://www.gulpjs.com.cn/docs/api/
  nx.nodeExec = function(inOptions) {
    return new Promise(function(resolve, reject) {
      exec(inOptions, function(err) {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeExec;
  }
})();
