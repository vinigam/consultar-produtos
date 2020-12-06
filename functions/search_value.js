module.exports.search_value = function (name, price,unity, array, subgrupo){
	var array_result
	var preco_de_pauta
	var preco_de_fora
	var grupo
	var resultado
	var condicao
	var preco
	var flag = false
	for(let i = 0 ; i < array.length ; i++){
		for(let j = 0 ; j < array[i].length ; j ++){
			let temp_array = array[i][j]
			let name_product = JSON.stringify(temp_array[temp_array.length-1].toLowerCase())

			if(name.toLowerCase() === name_product){
				flag = true
				array_result = temp_array
				grupo = subgrupo[i]
				array_result[2] = array_result[2].replace(",", ".") /* trocar virgula por ponto para que o parseFloat converta a parte decimal*/
				let local_price = parseFloat(array_result[2])
				let foreign_price = price
			
	
				if( foreign_price <= local_price){
					condicao = "subfaturado ou mesmo preço"
				}else{
					condicao = "superfaturado"
				}
				resultado = (local_price*unity) * 0.18
				preco = local_price*unity
				preco_de_pauta = local_price
				preco_de_fora = foreign_price
			}
		}
	}
	if(flag){
		name = name.replace('"','');
		var resumo = {
			'nome_produto' : name.replace('"',''),
			'preco_de_pauta' : preco_de_pauta,
			'quantidade' : unity,
			'preco' : preco.toFixed(2),
			'imposto' : resultado.toFixed(2),
			'condicao' : condicao
		}
		
		console.log(resumo)
		return resumo
	}else{
		console.log("Produto nao encontrado")
	}

}