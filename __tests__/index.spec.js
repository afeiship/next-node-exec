(function () {
  require('../src');

  const fs = require('fs');

  describe('api.basic test', () => {
    test('build task will create dist dir', function (done) {
      var hasDist = false;
      nx.nodeExec('npm run build').then((response) => {
        hasDist = fs.existsSync('dist');
        expect(hasDist).toBe(true);
        done();
      });
    });

    test('clean task will remove dist dir', function (done) {
      var hasDist = true;
      nx.nodeExec('gulp clean').then((response) => {
        hasDist = fs.existsSync('dist');
        expect(hasDist).toBe(false);
        done();
      });
    });
  });
})();
