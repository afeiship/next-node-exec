(function () {
  require('../src');

  const fs = require('fs');

  describe('api.basic test', () => {
    test('build task will create dist dir', function () {
      var hasDist = false;
      var res = nx.nodeExec('npm run build');
      hasDist = fs.existsSync('dist');
      expect(hasDist).toBe(true);
    });

    test('clean task will remove dist dir', function () {
      var hasDist = true;
      nx.nodeExec('gulp clean');
      hasDist = fs.existsSync('dist');
      expect(hasDist).toBe(false);
    });
  });
})();
