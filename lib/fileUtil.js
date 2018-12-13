const glob = require('glob');

const fileUtil = {
  fetchReadmeList: (cb) => {
    glob('node_modules/**/README.md', (err, matches) => {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, matches);
    });
  }
};

module.exports = fileUtil;
