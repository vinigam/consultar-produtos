var fs = require('fs')
var pdfparse = require('pdf-parse')
var pdffile = fs.readFileSync('valores/valores.pdf')


module.exports.convert = function (){

  pdfparse(pdffile)
  .then((data)=>{
    try {
      if(fs.existsSync('valores/valores.txt')) {
        fs.unlink('valores/valores.txt', (err) =>{
          if(err){
            throw err;
          }
        })  
      } 
    }catch (err) {
        console.error(err);
    }
    
    fs.appendFile('valores/valores.txt', data.text, (err) =>{
      if(err) throw err;
    })
    console.log("file converted saved")
  })
  .catch((err)=>{
    console.log(err)
  })

}

