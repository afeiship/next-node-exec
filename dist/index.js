/*!
 * name: @jswork/next-node-exec
 * description: Node exec for next.
 * homepage: https://github.com/afeiship/next-node-exec
 * version: 1.0.0
 * date: 2020-11-22 20:16:30
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var exec = require('child_process').exec;

  // https://www.gulpjs.com.cn/docs/api/
  // https://gist.github.com/millermedeiros/4724047
  nx.nodeExec = function (inOptions) {
    return new Promise(function (resolve, reject) {
      exec(inOptions, function (err) {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeExec;
  }
})();
