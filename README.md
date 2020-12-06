# Funcionamento<br>
<p>O aplicativo consiste em receber três parametros, consulta-los na lista de produtos e retornar algum resultado.<br>
<p> Os resultados podem ser "nao encontrado" ou retornar as informaçoes que batem com as fornecidas mas acrescidas de algumas informações<br>

# Dependencias<br>
<ul>
  <li>"body-parser": "^1.19.0"</li>
  <li>"body-parser": "^1.19.0"</li> 
  <li>"ejs": "^3.1.5"</li>
  <li>"express": "^4.17.1"</li>
  <li>"mysql": "^2.18.1"</li>
  <li>"opn": "^6.0.0"</li>
  <li> "path": "^0.12.7"</li>
  <li>  "pdf-parse": "^1.1.1" </li>
</ul><br>

![alt text](https://github.com/vinigam/consultar-produtos/blob/main/layout.jpg)

# Produto retornado<br>
![alt text](https://github.com/vinigam/consultar-produtos/blob/main/calcular.jpg)

# Lista dos produtos armazenados no sistema 
![alt text](https://github.com/vinigam/consultar-produtos/blob/main/produtos.jpg)

# consultar-produtos

# Para criar um executavel

1 - npm install -g pkg

2 - adicione no json :<br>
	"bin":"app.js", ----> nome da main do app <br>
  "pkg":{ <br>
  	"assets":[    -------> pastas a serem adicionadas no exe <br>
  		"docs/**/", <br>
  		"functions/**/*", <br>
  		"valores/**//", <br>
  		"views/**/*" <br>
  	], <br>
  	"targets":["node12"] ---------> versoes a a serem criadas o exe
  }

