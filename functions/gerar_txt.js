var fs = require('fs')

module.exports.generate_txt = function(products){
	var date = new Date()
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	var file_name = 'docs/Produto(s)_' + hours + '_'+ minutes+ '_' + seconds + '.txt'
	try{
		if(fs.existsSync('docs/'+ file_name)){
			console.log("file already exists")
		}else{

			for (let i = 0 ; i < products.length; i++){
				
					
					fs.appendFile(file_name, 'produto: '+ products[i].nome_produto + '\n', (err) =>{
      					if(err) throw err;
    				})
    				fs.appendFile(file_name, 'preço de pauta: '+ products[i].preco_de_pauta + '\n', (err) =>{
      					if(err) throw err;
    				})
    				fs.appendFile(file_name, 'quantidade: ' + products[i].quantidade + '\n', (err) =>{
      					if(err) throw err;
    				})
    				fs.appendFile(file_name, 'imposto: ' + products[i].imposto + '\n', (err) =>{
      					if(err) throw err;
    				})
    			
			
				
			}
		}
	}catch (err) {
		console.log(err)
	}
}