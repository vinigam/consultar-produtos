var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var read_archive = require('./functions/read_archive.js') /* chama a funçao de ler arquivo*/
var pdf_to_text = require('./functions/pdf_to_text') /* converte pdf para texto*/
var check = require('./functions/checker.js')
var search = require('./functions/search_value.js')
var gerar_txt = require('./functions/gerar_txt.js')
var app = express()
var opn = require('opn')

/* configurations */
app.use(express.static(__dirname + '/'))
app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine', 'ejs')

var PORT = 8081

/*Le o arquivo de texto com as tabelas*/
var subgrupo
var val_por_sub_grupo
var valor_total = 0
var find = 0
var results

var temp = read_archive.read_archive() /* le o arquivo e retorna um vetor com os dois grupo*/
subgrupo = temp[0]
val_por_sub_grupo = temp[1]

var produtos_procurados = []

app.get('/', (req, res) =>{
	res.render('index')
})
app.get('/produtos', (req, res) =>{
	res.render('products', {produtos : val_por_sub_grupo})
})
app.get('/gerar_txt', (req, res) =>{
	gerar_txt.generate_txt(produtos_procurados)
	res.render('index')
})

app.get('/zerar', (req, res) =>{
	produtos_procurados = []
	results = []
	res.render('index')
})

app.get('/result', (req, res) =>{
	res.render('results', {results: results, total : valor_total, find: 0})
})
app.post('/check', (req,res) =>{

	let name = JSON.stringify(req.body.name)
	let temp_produtos= search.search_value(name, req.body.product,req.body.unity, val_por_sub_grupo, subgrupo)
	if(temp_produtos != undefined){
		valor_total = valor_total + Number(temp_produtos['imposto'])
		produtos_procurados.push(temp_produtos)
		results = produtos_procurados
		find = 1
		res.redirect('/result')

	}else{
		results = produtos_procurados
		find = 0
		res.redirect('/result')
	}
	
})


var server = app.listen(PORT, () =>{
	var host = '127.0.0.1'
	var port= server.address().port
	opn('http://' + host + ':' + port)

})


