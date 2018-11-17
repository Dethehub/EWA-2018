function pizzaHinzufuegen(element){
	var id = element.id;
	var selectBox = document.getElementById("Warenkorb_Bestellung");
	var option = document.createElement("option")
	option.text = id;
	selectBox.add(option);
	
	
	
	if(id == "Margherita"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		//window.alert(preisFloat);
		preisFloat = preisFloat + 3.5;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}else if(id == "Spinat"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		preisFloat = preisFloat + 5.5;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}else if(id == "Hawaii"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		preisFloat = preisFloat + 6;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}
	
	updateSubmitButton();
}


function deleteSelected(){
	var element = document.getElementById("Warenkorb_Bestellung");
	var text = element.options[element.selectedIndex].text;
	
	element.remove(element.selectedIndex);
	
	if(text == "Margherita"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		
		preisFloat = preisFloat - 3.5;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}else if(text == "Spinat"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		preisFloat = preisFloat - 5.5;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}else if(text == "Hawaii"){
		var price = document.getElementById("preis");
		var preisFloat =  parseFloat(price.innerHTML);
		preisFloat = preisFloat - 6;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}
	
	updateSubmitButton();
}

function deleteAll(){
	var element = document.getElementById("Warenkorb_Bestellung").options.length = 0;
	
	var price = document.getElementById("preis");
	var preisFloat =  parseFloat(price.innerHTML);
		
	preisFloat = 0;
	price = preisFloat.toFixed(2);
	document.getElementById("preis").innerHTML = price;
	
	
	updateSubmitButton();
}


function updateSubmitButton() {
	 var fn = document.getElementById("first_name").value;
	 var ln = document.getElementById("last_name").value;
	 var adr = document.getElementById("adress").value;
	 var shopping_kart = document.getElementById("Warenkorb_Bestellung").length;
	 //window.alert(shopping_kart);
	 if(fn === "" || ln ==="" || adr ==="" || shopping_kart == 0) { 
            document.getElementById("submit_button").disabled = true; 
        } else { 
            document.getElementById("submit_button").disabled = false;
        }
}