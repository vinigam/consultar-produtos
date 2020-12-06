# consultar-produtos

Para criar um executavel

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

![image](htttps://user-images.githubbusercontent.com/782127/47788476-3
