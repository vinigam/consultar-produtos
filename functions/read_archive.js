const fs = require('fs')

module.exports.read_archive = function(){
	var subgrupo = [] /*ok*/

	var produtos_por_sub_grupo = [] /*ok*/

	var produtos = []
	var first_loop = 0
	try {
		const data = fs.readFileSync('valores/valores.txt', 'UTF-8')
		const lines = data.split(/\r?\n/)
		var flag = true

		/*loop que pega linha por linha do txt e divide em vetores*/
		for(let i = 0 ; i < (lines.length) ; i++){
			let buffer = lines[i];
			
			let splited_buffer = buffer.split(" ")

			/*loop que detecta os subgrupos nos vetores */
			if(splited_buffer[0] != " "){


				if(splited_buffer[0] == 'Subgrupo'){
					flag = true
					let grupo = splited_buffer
					for(let k = 0 ; k < grupo.length; k++){
						if(grupo[k] == ''){
							grupo.splice(k,1)/* remove spaces '' */
						}
					}
					let temp = []
					let name = ''
					
					for(let m = 0 ; m < grupo.length ; m++){
						if(m > 1){
							name = name.concat(grupo[m])
							name = name.concat(' ')
						}else{
							temp.push(grupo[m])
						}
					}
					temp.push(name)
					subgrupo.push(temp)
				}
				if(splited_buffer[0] == 'Código'){
					/*flag para pegar as informaçoes dos produtos*/
					flag = false
					if(first_loop != 0){
						produtos_por_sub_grupo.push(produtos)
						produtos = []
					}else{
						first_loop++;
					}
					
				}
				if (flag == false && splited_buffer[0] != 'Código' && splited_buffer[0] != 'PORTARIA' && splited_buffer[0] != 'Subgrupo' && splited_buffer[0] != '' && splited_buffer[0] != ' '&& splited_buffer[0] != 'SECRETARIA' && splited_buffer[0] != "ESTADO"){
					/*adiciona a portaria e os produtos de cada grupo a um vetor*/
		
					for(let l = 0 ; l < splited_buffer.length ; l ++){
						if(splited_buffer[l] == ''){
							splited_buffer.splice(l,1)
						}
						
					}
					/*adiciona os dois primeiros valores e concatena o nome */
					let temp = []
					let name = ''
					
					for(let m = 0 ; m < splited_buffer.length ; m++){
						if(m > 1 && m < splited_buffer.length -1){
							name = name.concat(splited_buffer[m])
							if(m != splited_buffer.length-2){
								name = name.concat(' ')
							}
						}else{
							temp.push(splited_buffer[m])
						}
					}
					temp.push(name)
					produtos.push(temp)

				}
			}
		}
		/*como o ultimo grupo nao entra mais no loop para ser armazenado, tem de se armazenado apos o fim*/
		produtos_por_sub_grupo.push(produtos)
		produtos = []
		produtos.push(subgrupo)
		produtos.push(produtos_por_sub_grupo)
		
		return produtos;
		
		
	} catch (err) {
		console.log(err)
		return 0, 0
	}
}