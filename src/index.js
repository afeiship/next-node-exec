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
