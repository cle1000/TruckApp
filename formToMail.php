<?php

if ($_POST) {
$type = $_POST['Type'];
$country_from = $_POST['country_from'];
$postcode_from = $_POST['plz_from'];
$country_to = $_POST['country_to'];
$postcode_to = $_POST['plz_to'];
$date = $_POST['date'];

$what = $_POST['what'];
$length = $_POST['length'];
$weight = $_POST['weight'];
$price = $_POST['price'];

$city_to = $_POST['city_to'];
$city_from = $_POST['city_from'];

$vehicleType = $_POST['lkw_art'];
$superstructure = $_POST['lkw_aufbau'];
$equipment = $_POST['lkw_ausstattung'];
$lkw_ggvs = $_POST['lkw_ggvs'];
$notes = $_POST['notes'];
$name = $_POST['name'];
$phoneNumber = $_POST['telephone'];

/*$empfaenger = "cle1000.cb@gmail.com";
$betreff = "TruckApp Anmeldung";
$mailtext = "Type: $type\nVon: $country_from $city_from $postcode_from\nNach: $country_to $city_to $postcode_to\nWann: $date\nWas: $what\nLM: $length\nGewicht: $weight\nFrachtrate: $price\nFahrzeugTyp: $vehicleType\nAufbauart: $superstructure\nAusstattung: $equipment\nGGVS: $lkw_ggvs\nBemerkung: $notes\nName: $name\nTelefonnummer: $phoneNumber";
mail ("julian.moser@gmail.com", $betreff, $mailtext, "From: TruckApp");
$output = mail($empfaenger, $betreff, $mailtext, "From: TruckApp");*/
}
?>


