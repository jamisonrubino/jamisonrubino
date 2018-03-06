var express = require('express');
var router = express.Router();

function readFiles(dirName, onFileContent, onError) {
  fs.readdir(dirName, (err, imgFiles) => {
    if (err) {
      onError(err)
      return
    }
    imgFiles.forEach(imgFile => {
      fs.readFile(dirName + imgFile, 'utf-8', (err, content) => {
        if (err) { onError(err)
          return
        }
        onFileContent(imgFile, content)
      })
    })
  })
}

res.locals.images = {}


/* GET home page. */
router.get('/portfolio_images', function(req, res, next) {
  readFiles('./traveltracks/img', (imgFile, content) => res.locals.images[imgFile] = [content], err => { throw err })
  readFiles('./traveltracks/blurbs', (blurbFile, content) => res.locals.images[blurbFile].push(content), err => { throw err })
  res.render('index', { title: 'Express' });
});

module.exports = router;
