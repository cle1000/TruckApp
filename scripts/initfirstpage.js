var init = window.localStorage.getItem("init");

function setFirstStart(){
	window.localStorage.setItem("init", "1");
}




if (init != 1){
	var element = document.getElementById('fastclick');
	var startPage = document.createElement('div');
	startPage.setAttribute ('data-role', 'page');
	startPage.setAttribute ('id', 'first_start');
	
	startPage.innerHTML = '<div data-role="header" data-position="fixed">	<h1>mto</h1></div><!-- /header --><div role="main" class="ui-content"><div class="ui-collapsible-set ui-collapsible ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"><div data-insert="true" class="ui-collapsible-content ui-body-inherit">	<form action="#home" method="post" id="first_infos">			<fieldset>				<legend class="first">Ihre Daten...</legend>				<label for="name_input">Name</label> <input name="name"					id="name_input" type="text" placeholder="Name" /> <label					for="telephone_input">Telefon</label> <input name="telephone"					id="telephone_input" type="number" placeholder="Telefon">			</fieldset>				<div class="ui-grid-a">			<div class="ui-block-a">				<button class="ui-shadow ui-btn ui-corner-all" type="submit"					onClick="saveUserInfos()" id="submit_input">Speichern</button>			</div>			<div class="ui-block-b">				<button class="ui-shadow ui-btn ui-corner-all" type="submit"					onClick="setFirstStart()" id="submit_input">Überspringen</button>			</div>		</div>	</form></div></div></div>';
	
	element.insertBefore(startPage, element.firstChild);
}else{
	setNameAndTelephone ();
}

		
