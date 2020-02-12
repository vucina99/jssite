window.onload = function(){
	ocitanafunkcija();
}

function ocitanafunkcija(){
	var meni = ['POČETNA' , 'OPIS' , 'VRSTE', 'GALERIJA', 'PARTNERI','INFORMACIJE','KONTAKT'];

	var nav = `<div class="container">
			  <a class="navbar-brand" href="#"><img src="img/logo_beli.png" alt=""></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav ml-auto">

			     	 <li class="nav-item">
			       		 <a class="nav-link" href="dokumentacija.pdf">DOKUMENTACIJA</a>
			      	</li>

			    ` ;

				for(men of meni){

					if(men == "KONTAKT"){
						nav += `	
			     	 <li class="nav-item">
			       		 <a class="nav-link" href="${men}.html">${men}</a>
			      	</li>`	;


					}else{
						nav += `	
				      <li class="nav-item">
				        <a class="nav-link" href="index.html#${men}">${men}</a>
				      </li>`;
					}


				}

				nav += `  </ul> </div></div>` ;

	document.querySelector("nav").innerHTML = nav;
	



if(window.location.href.indexOf('index.html') > -1 ){
	var i = 0; 
	var text = 'Velika baza kuća i stanova ';
	function ispis(){

	if(i < text.length){
			document.getElementById("text").textContent += text.charAt(i);	
			i++;

			if(i == text.length){
				i = 0;
				document.getElementById("text").textContent = '';

			}
			setTimeout(ispis, 200);
	}
	}
	ispis();


	// var klase = document.getElementsByClassName("dugmad");

	// for (let i = 0; i< klase.length ; i++) {
	// 	klase[i].innerHTML += `<button class="btn btn-dark" id="left"> <i class="fas fa-chevron-left"></i></button> <button class="btn btn-dark" id="right"><i class="fas fa-chevron-right"></i> </button>`;
	// }
	document.querySelector("#opis h2").textContent = "~ " + meni[1] + " ~";
	document.querySelector("#vrste h2").textContent = "~ " + meni[2] + " ~";
	document.querySelector("#galerija h2").textContent = "~ " + meni[3] + " ~";
	document.querySelector("#tabele h2").textContent = "~ " + meni[5] + " ~";

	document.getElementById("prijava").addEventListener("click" , prijaava);
	var nizsvihprijavljenih = [];

	function prijaava(){
		var mail = document.getElementById("mail").value;
		var regmail =   /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/ ;
		var postojanje = 0;
		if(mail != ""){

		if(regmail.test(mail) ){

			for(let i = 0; i< nizsvihprijavljenih.length ; i++){
				if(nizsvihprijavljenih[i] == mail){
					alert("Vec ste prijavljeni");
					postojanje = 1;
					console.log(nizsvihprijavljenih);
				}
			}
			if(postojanje  == 0){
			nizsvihprijavljenih.push(mail);
			alert("Uspesno ste se prijavili i imate poziciju  kao " + nizsvihprijavljenih.length + " u nizu" );
			}


		}else{
			alert("niste dobro uneli polje");
		}

		}else{
			alert("morate popuniti polje za prijavu");
		}
	}


		document.getElementById("upis").innerHTML += `
		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Direktor</th>
		      <th scope="col">Naziv firme</th>
		      <th scope="col">Datum</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td>Vuk Zdravkovic</td>
		      <td>kuca.doo</td>
		      <td>21.12.2019</td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      <td>Pera Peric</td>
		      <td>stan.doo</td>
		      <td>23.12.2019</td>
		    </tr>
		    <tr>
		      <th scope="row">3</th>
		      <td>Mika Mikic</td>
		      <td>bozur.doo</td>
		      <td>01.01.2020</td>
		    </tr>
		    <tr>
		      <th scope="row">4</th>
		      <td>Velja Nevolja</td>
		      <td>petica.doo</td>
		      <td>05.01.2020</td>
		    </tr>

		  </tbody>
		</table> <br><br><br>`;


		var uzmivrednostislika = document.querySelectorAll("#slicice1 img");
		for(let i = 0; i< uzmivrednostislika.length ; i++){
			var slika = i+1;
			uzmivrednostislika[i].src = "img/slika"+ slika +".jpg";
		}


		var uzmivrednostislika2 = document.querySelectorAll("#slicice2 img");
		for(let i = 0; i< uzmivrednostislika2.length ; i++){
			var slika = i+4;
			uzmivrednostislika2[i].src = "img/slika"+ slika +".jpg";
		}

}


	var drugimeni = ``;

				for(men of meni){

					if(men == "KONTAKT"){
						drugimeni += `	
			     	 
			       		 <a class="nav-link text-light" href="${men}.html">${men}</a>
			      	`	;


					}else{
						drugimeni += `	
				      
				        <a class="nav-link text-light" href="#${men}">${men}</a>
				      `;
					}


				}
	document.getElementById("sveradi").innerHTML = drugimeni;

if(window.location.href.indexOf('KONTAKT.html') > -1 ){

var dugme = document.getElementById("dugme").addEventListener("click", salji);

	document.querySelector("#kontakt h2").textContent = "~ " + meni[6] + " ~";


function salji(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var question = document.getElementById("question").value;
	var regname = /^[A-z]{2,15}$/;
	var regemail =   /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/ ;
	var regquestion = /^[A-z\d\-\_\.\:]{2,150}$/;

	if(name == "" || question == ""  || email == ""){
		document.getElementById("ispis").innerHTML = `* Morate popuniti sva polja ` ;
		document.getElementById("beli").innerHTML = ' ' ;
		document.getElementById("name").classList.add('crveniokvir');
		document.getElementById("question").classList.add('crveniokvir');
		document.getElementById("email").classList.add('crveniokvir');
	}else{

		document.getElementById("ispis").innerHTML = '' ;
		if(!regname.test(name) ){
			
			document.getElementById("name").classList.add('crveniokvir');
			document.getElementById("ispisime").innerHTML = `* Ime mora imati vise od 1 slova a najvise 15 ` ;
		}else if(regname.test(name)){
			
			document.getElementById("name").classList.remove('crveniokvir');
			document.getElementById("ispisime").innerHTML = ' ' ;		
		}

		if(!regemail.test(email) ){
			

			document.getElementById("email").classList.add('crveniokvir');
			document.getElementById("ispisemail").innerHTML = `* Niste dobro upisali svoj email ` ;
		}
		else if(regemail.test(email)){
			
			document.getElementById("ispisemail").innerHTML = ' ' ;	
			document.getElementById("email").classList.remove('crveniokvir');	
		}
		if(!regquestion.test(question)){
			
			document.getElementById("question").classList.add('crveniokvir');
			document.getElementById("ispisquestion").innerHTML = `* Niste dobro popunili polje za pitanje  ` ;
		}
		else if(regquestion.test(question)){
			
			document.getElementById("ispisquestion").innerHTML = ' ' ;	
			document.getElementById("question").classList.remove('crveniokvir');	
		}
		if((regquestion.test(question) && regemail.test(email) && regname.test(name)) == true ){
			document.getElementById("beli").innerHTML = 'Uspesno poslata poruka' ;
		}if((regquestion.test(question) && regemail.test(email) && regname.test(name)) == false){
			document.getElementById("beli").innerHTML = ' ' ;
		}
		

	}
	
}
}








}