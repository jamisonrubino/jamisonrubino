const express = require('express')
const fs = require('fs')
const glob = require('glob')
const app = express()

app.use('/public', express.static('public'))

// read img directories, find number of files excluding "cover.jpg", & update "numSlides"
// fs.readFileSync('/src/components/portfolio/portfolioData.js', (err, data)=>{
//   data.
// })


// app.get('/traveltracks_img', (req, res) => {
//   var imgArr = [1,2,3]
//   res.send({"images": imgArr})
//
//   fs.readdir('/public/portfolio/traveltracks/img/', (err, imgs) => {
//     console.log(imgs)
//     imgs.forEach(img=>{
//       imgArr.push(file)
//     })
//   })
//
// })
//
// app.get('/pf', (req,res)=>{
//   res.send({'item1': "item1"})
// })

// app.get('/', (req,res) => {
//   glob('/public/portfolio/traveltracks/img/1.jpg', (err, file) => {
//     console.log(file);
//   })
// })
//
//
// app.get('/portfolio/traveltracks/blurbs', (req,res) => {
//   glob(`/public/portfolio/traveltracks/blurbs`, {}, (err, files) => {
//     console.log(files)
//     res.send(files)
//   })
// })


const port = 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
