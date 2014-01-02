        $( document ).ready(function() {
            /* setup datepicker */
            $( ".datepicker" ).date({
                firstDay: 1,
                monthNames: [ "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
                dayNamesMin: [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ],
                dateFormat: "dd.mm.yy"
            });

$( ".ui-datepicker" ).hide();
$(".datepicker").focus(function() { 
    $( ".ui-datepicker" ).slideDown();
}).blur(function() { 
    $( ".ui-datepicker" ).slideUp();
});

            /* append all selectable countries to elements <select class="countries">*/
            var allCountries = '<option value="Albania">Albania</option><option value="Andorra">Andorra</option><option value="Armenia">Armenia</option><option value="Austria" selected>Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Bulgaria">Bulgaria</option><option value="Croatia">Croatia</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Estonia">Estonia</option><option value="Faroe Islands">Faroe Islands</option><option value="Finland">Finland</option><option value="France">France</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="Ireland">Ireland</option><option value="Italy">Italy</option><option value="Kazakhstan">Kazakhstan</option><option value="Kosovo">Kosovo</option><option value="Latvia">Latvia</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Malta">Malta</option><option value="Moldova, Republic of">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Montenegro">Montenegro</option><option value="Netherlands">Netherlands</option><option value="Norway">Norway</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="San Marino">San Marino</option><option value="Serbia and Montenegro">Serbia and Montenegro</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Spain">Spain</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Turkey">Turkey</option><option value="Ukraine">Ukraine</option><option value="United Kingdom">United Kingdom</option><option value="Vatican City">Vatican City</option>';
            

		$('.countries').append(allCountries);

var vehicleTyps = '<option value="Sonstiges">Sonstiges</option><option value="Sattel">Sattel</option><option value="Jumbo">Jumbo</option><option value="Hg-Zug">Hg-Zug</option><option value="MW">MW</option><option value="Mega">Mega</option>';
	$('.vehicleTyp').append(vehicleTyps);
var superstructures = '<option value="Sonstiges">Sonstiges</option><option value="Plane/Ed">Plane/Ed</option><option value="Plane/fixD">Plane/fixD</option><option value="Koffer">Koffer</option><option value="Kühler">Kühler</option>';
$('.superstructure').append(superstructures);

            /* add logo to all headers */
			
            $("div[data-role='header']").append('<img src="img/logo_small.png" alt="Logo" class="ui-btn-right">');

            /* add footer to all pages */
            $("div[data-role='page']").append('<div data-role="footer" data-position="fixed"><h4>&copy; mto 2014</h4></div>');
        });
    /*
        $( document ).on( "mobileinit", function() {
            $.mobile.defaultPageTransition = 'slide'; // override default transition
        });*/

