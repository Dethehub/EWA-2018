function pizzaHinzufuegen(element){
	var id = element.id;
	var selectBox = document.getElementById("Warenkorb_Bestellung");
	var option = document.createElement("option")
	option.text = id;
	selectBox.add(option);
	
	if(id == "Margherita"){
		var price = document.getElementById("preis");
		var preisFLoat = parseFloat(price);
		preisFloat = preisFloat + 3.5;
		price = preisFloat.toFixed(2);
		document.getElementById("preis").innerHTML = price;
	}else if(id == "Spinat"){
	
	}else if(id == "Hawaii"){
	
	}
}