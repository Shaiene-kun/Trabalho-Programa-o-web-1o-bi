	var a,b,c 
	function calcular_raizes(){
	a = document.getElementById("a").value 
	b = document.getElementById("b").value 
	c = document.getElementById("c").value 
	a = parseInt(a) 
	b = parseInt(b) 
	c = parseInt(c) 
	var del = Math.pow(b,2)-4*a*c
	var xv = -b/(2*a)
	var yv = -del/(4*a)
	if(del<0){
		document.getElementById("Raizes").innerHTML="Não existem raízes reais" 
	}
	else{
		if(del==0){
			var x1 = (-b+ Math.sqrt(del))/(2*a) 
			document.getElementById("Raizes").innerHTML="X = "+x1 
		}
		else{
			var x1 = (-b+Math.sqrt(del))/(2*a) 
			var x2 = (-b-Math.sqrt(del))/(2*a) 
			document.getElementById("Raizes").innerHTML="X1 = "+x1+" X2 = "+x2 
		}
	}
	document.getElementById("xyv").innerHTML = "X do vértice = "+xv+" Y do vértice = "+yv 
	desenhar_plano() 
}

function desenhar_plano(){
	var canvas = document.querySelector('canvas')
	canvas.width = 250
	canvas.height = 250
	var ctx = canvas.getContext('2d') 
	ctx.translate(125,125) 
	ctx.moveTo(0,-250) 
	ctx.lineTo(0,250) 
	ctx.moveTo(-250,0) 
	ctx.lineTo(250,0) 
	ctx.strokeStyle = "#555555" 
	ctx.lineWidth = 1 
	ctx.stroke() 
	ctx.save()
	ctx.beginPath() 
	desenhar_grafico() 
	
	function f(x){
		return yt((a*x**2)+(b*x)+c) 
	}
	function yt(y)
	{
		return -5*y/2 
	}
	function xt(x)
	{
		return 6.25*x 
	}

	function desenhar_grafico() 
        {
			var x0 = -10 
			var xf = 10 
			var x = x0 
			var dx = 0.1 
			ctx.moveTo(xt(x),f(x0)) 
			x+= dx 
			while(x<xf)
			{
				ctx.lineTo(xt(x),f(x))
				x+= dx 
			}
			ctx.stroke() 
			ctx.restore() 
	}
}
function calcular_divs(){
	console.log("Entrei na função")
	var divs = [],menor,maior,i = 0,resposta = "Divisores comuns: ";
	var n1 = document.getElementById("n1").value 
	var n2 = document.getElementById("n2").value 
	console.log("n1: "+n1+"n2: "+n2)
	if(n1>n2){
		maior = n1
		menor = n2
	}
	else{
		maior = n2
		menor = n1
	}
	cont(maior,menor)
	document.getElementById("divs").innerHTML = resposta
	
	function cont(a,b){
		while(i<b){
			i++
			if( ( a%i == 0 ) && ( b%i == 0) ){
				console.log(i+" "+b)
				if(i == b)
					resposta += i 
				else
				resposta += i +", "
			}	
		}
	}	
}	
		 	

/*Eu e alguns colegas achamos que era pra calcular o MDC. Eis a função que eu não quero apagar

function calcular_MDC(){
	var n1 = document.getElementById("n1").value 
	var n2 = document.getElementById("n2").value 
	var mdc,maior,menor,resto 
	if(n1==n2)
		document.getElementById("MDC").innerHTML="MDC = "+n1 
	else{
		if(n1>n2){
			menor = n2 
			maior = n1
		}
		else{
			menor = n1 
			maior = n2 
		}
		while(maior%menor!=0){
			resto = maior%menor 
			maior = menor 
			menor = resto 
			console.log(resto) 
		}
		mdc = menor 
		document.getElementById("MDC").innerHTML="MDC = "+mdc 
	}
}*/

