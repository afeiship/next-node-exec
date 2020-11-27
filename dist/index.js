/*!
 * name: @jswork/next-node-exec
 * description: Node exec for next.
 * homepage: https://github.com/afeiship/next-node-exec
 * version: 1.0.1
 * date: 2020-11-27 11:37:54
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var exec = require('child_process').execSync;
  var DEFAULT_OPTIONS = { responseType: 'string', joined: '&&', debug: false };

  // https://www.gulpjs.com.cn/docs/api/
  // https://gist.github.com/millermedeiros/4724047
  nx.nodeExec = function (inCmds, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var cmds = Array.isArray(inCmds) ? inCmds : [inCmds];
    var res = exec(cmds.join(options.joined));
    options.debug && console.log('[debug]:', cmds);
    if (res) {
      var str = res.toString().trim();
      switch (options.responseType) {
        case 'buffer':
          return res;
        case 'array':
          return str.split('\n');
        default:
          return str;
      }
    }
    return null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeExec;
  }
})();
