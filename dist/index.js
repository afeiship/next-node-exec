/*!
 * name: @jswork/next-node-exec
 * description: Node exec for next.
 * homepage: https://github.com/afeiship/next-node-exec
 * version: 1.0.1
 * date: 2020-11-27 11:27:00
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var exec = require('child_process').execSync;
  var DEFAULT_OPTIONS = { responseType: 'string', series: true };

  // https://www.gulpjs.com.cn/docs/api/
  // https://gist.github.com/millermedeiros/4724047
  nx.nodeExec = function (inCmds, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var cmds = Array.isArray(inCmds) ? inCmds : [inCmds];
    var joined = options.series ? '&&' : '&';
    var res = exec(cmds.join(joined));
    if (res) {
      switch (options.responseType) {
        case 'buffer':
          return res;
        default:
          return res.toString().trim();
      }
    }
    return null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeExec;
  }
})();
