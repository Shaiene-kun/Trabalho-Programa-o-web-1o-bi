var baralho = [], cont = 0,vir = [1], pt = 0;
function aleatorioInt(){   
	var n
	n = 1+(~~(Math.random()*10))
	return n
}
function embaralha(a)
	{
		for(var i=1; i<a.length; i++)
		{
			var indice = aleatorioInt(0,a.length);
			var aux = a[i];
			a[i] = a[indice];
			a[indice] = aux;
		}
	}

function geraBaralho()
{
	
	var j = 0;
	for(var i=1; i<=20; i++)
	{
		j++
		baralho[i] = "./Imagens_jogo/C" + j + ".png";
		baralho[i+1] = "./Imagens_jogo/C" + j + ".png";
		if(j == 10){
			j=0
		}
		i++;
	}
	embaralha(baralho);
	const imgs = document.getElementsByTagName("IMG");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].addEventListener("click", click);
    }
	
	
}
function click(){
	//var src = this.getAttribute("src");
	var id = this.getAttribute("id");
	if(cont<2){
		if(this.getAttribute("src") =="./Imagens_jogo/ZOE.png")
		{
			cont++
			this.setAttribute("src",baralho[id])
			if(cont==1){
				vir[0] = this.getAttribute("id")
			} 
			else if(cont==2){
				vir[1] = this.getAttribute("id")
				timer()
			}	
		}
	
	}
		
}

function timer(){
	if((document.getElementById(vir[0]).getAttribute("src")) == (document.getElementById(vir[1]).getAttribute("src"))){
		pt++
		document.getElementById("pt").innerHTML = pt 
		cont = 0
	}
	else{
		setTimeout(function a(){
			document.getElementById(vir[0]).setAttribute("src","./Imagens_jogo/ZOE.png")
			document.getElementById(vir[1]).setAttribute("src","./Imagens_jogo/ZOE.png")
			cont = 0
		},1000)
	}
	if(pt == 10){
		document.getElementById("pt").innerHTML = "Você ganhou"
		
	}
}