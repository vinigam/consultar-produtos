# consultar-produtos

Para criar um executavel

1 - npm install -g pkg

2 - adicione no json :
	"bin":"app.js", ----> nome da main do app
  "pkg":{
  	"assets":[    -------> pastas a serem adicionadas no exe
  		"docs/**/",
  		"functions/**/*",
  		"valores/**//",
  		"views/**/*"
  	],
  	"targets":["node12"] ---------> versoes a a serem criadas o exe
  }
