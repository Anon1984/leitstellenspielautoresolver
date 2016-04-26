// ==UserScript==
// @name        autoResponderLocalStorage
// @namespace   leitstellenspiel
// @description Set current emergency cases to localstorage
// @include     http://www.leitstellenspiel.de/
// @version     2.4
// @grant       none
// ==/UserScript==

localStorage.clear();

localStorage.setItem( 'akuter Asthma-Anfall'						, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Akute Bauchschmerzen'						, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Akuter Harnstau'								, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Alkoholintoxikation'							, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Ampelausfall'								, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Angefahrene Person'							, JSON.stringify( [ 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Äste auf Fahrbahn'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Auffahrunfall'								, JSON.stringify( [ 'aao_606948', 'aao_612371' ] ) );
localStorage.setItem( 'Aufgerissener Öltank'						, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612040', 'aao_612329' ] ) );
localStorage.setItem( 'Ausgedehnte Ölspur'							, JSON.stringify( [ 'aao_609581', 'aao_610008', 'aao_612040', 'aao_612329', 'aao_612372' ] ) );
localStorage.setItem( 'Auslaufende Betriebsstoffe'					, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Baum auf Dach'								, JSON.stringify( [ 'aao_606948', 'aao_612014' ] ) );
localStorage.setItem( 'Baum auf Gleisen'							, JSON.stringify( [ 'aao_606948', 'aao_612371' ] ) );
localStorage.setItem( 'Baum auf PKW'								, JSON.stringify( [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Baum auf Radweg'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Baum auf Straße'								, JSON.stringify( [ 'aao_612002' ] ) );
localStorage.setItem( 'Beginnende Geburt'							, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Beschädigter Dachbereich'					, JSON.stringify( [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_612310', 'aao_612371' ] ) );
localStorage.setItem( 'Bewusstloser Kranführer'						, JSON.stringify( [ 'aao_606948', 'aao_612040', 'aao_612310', 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Brand auf Weihnachtsmarkt'					, JSON.stringify( [ 'aao_606948', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Brand im Supermarkt'							, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612014', 'aao_612040', 'aao_612331', 'aao_613072' ] ) );
localStorage.setItem( 'Brand in Briefkasten'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brand in Werkstatt'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612002', 'aao_612014', 'aao_612301', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Brennende Hecke'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennende Lok'								, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612002', 'aao_612035', 'aao_612301', 'aao_612321', 'aao_613072' ] ) );
localStorage.setItem( 'Brennende Papiercontainer'					, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennende Telefonzelle'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennende Trafostation'						, JSON.stringify( [ 'aao_609581', 'aao_612014', 'aao_612371' ] ) );
localStorage.setItem( 'Brennende Vogelscheuche'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennende Weihnachtsmarktbude'				, JSON.stringify( [ 'aao_609581', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Brennender Adventskranz'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennender Anhänger'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennender Bollerwagen'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennender Bus'								, JSON.stringify( [ 'aao_610008', 'aao_612002', 'aao_612301', 'aao_612372', 'aao_613072', 'aao_613073', 'aao_613074', 'aao_613075', 'aao_613198', 'aao_613199', 'aao_684760' ] ) );
localStorage.setItem( 'Brennender Güteranhänger'					, JSON.stringify( [ 'aao_610008', 'aao_612002', 'aao_612006', 'aao_612014', 'aao_612040', 'aao_612326', 'aao_612331' ] ) );
localStorage.setItem( 'Brennender LKW'								, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Brennender PKW'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennender Tannenbaum'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennendes Bus-Häuschen'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennendes Gebüsch'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennendes Gras'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennendes Kürbisfeld'						, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Brennendes Laub'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Brennendes Reetdachhaus'						, JSON.stringify( [ 'aao_606948', 'aao_610008', 'aao_612014', 'aao_612040', 'aao_612321', 'aao_612372', 'aao_613073', 'aao_613197' ] ) );
localStorage.setItem( 'Bürobrand'									, JSON.stringify( [ 'aao_606948', 'aao_610008', 'aao_612002', 'aao_612005', 'aao_612019', 'aao_612301', 'aao_612321', 'aao_612372' ] ) );
localStorage.setItem( 'Chlorgasaustritt'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_610008', 'aao_612040', 'aao_612301', 'aao_612323', 'aao_612324', 'aao_612331', 'aao_612375' ] ) );
localStorage.setItem( 'Containerbrand'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Dachstuhlbrand'								, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612014', 'aao_612040' ] ) );
localStorage.setItem( 'Diebstahl auf Weihnachtsmarkt'				, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Diebstahl aus Kfz'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Einbruch in Keller'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Einbruch in Wohnung'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Eingestürztes Wohnhaus'						, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612014', 'aao_612040', 'aao_612372', 'aao_613073', 'aao_613075', 'aao_613214', 'aao_613215', 'aao_613218', 'aao_613219', 'aao_684756', 'aao_684760' ] ) );
localStorage.setItem( 'Erdrutsch'									, JSON.stringify( [ 'aao_612372', 'aao_613213', 'aao_613217', 'aao_613219', 'aao_684755', 'aao_684760' ] ) );
localStorage.setItem( 'Fassadenteile drohen zu fallen'				, JSON.stringify( [ 'aao_606948', 'aao_612014', 'aao_612040', 'aao_612310', 'aao_612371' ] ) );
localStorage.setItem( 'Fettbrand in Pommesbude'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Feuer auf Balkon'							, JSON.stringify( [ 'aao_609581', 'aao_612014' ] ) );
localStorage.setItem( 'Feuer auf Bauernhof - Groß'					, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_610008', 'aao_610396', 'aao_612021', 'aao_612036', 'aao_612040', 'aao_612301', 'aao_612323', 'aao_612371', 'aao_612372', 'aao_613073', 'aao_613214', 'aao_613218', 'aao_613219', 'aao_684756', 'aao_684760' ] ) );
localStorage.setItem( 'Feuer auf Bauernhof - Mittel'				, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_610008', 'aao_612019', 'aao_612035', 'aao_612040', 'aao_612321', 'aao_612371', 'aao_612372', 'aao_613073', 'aao_684760' ] ) );
localStorage.setItem( 'Feuer im Krankenhaus'						, JSON.stringify( [ 'aao_610008', 'aao_612006', 'aao_612014', 'aao_612301', 'aao_612372' ] ) );
localStorage.setItem( 'Feuer im Lagerraum'							, JSON.stringify( [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_612331' ] ) );
localStorage.setItem( 'Brand im Supermarkt'							, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612014', 'aao_612040', 'aao_612331', 'aao_613072' ] ) );
localStorage.setItem( 'Fahrraddiebstahl'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Feuer in Einfamilienhaus'					, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612014', 'aao_612040', 'aao_613073' ] ) );
localStorage.setItem( 'Feuer in Schnellrestaurant'					, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_613072' ] ) );
localStorage.setItem( 'Fieber'										, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Flächenbrand'								, JSON.stringify( [ 'aao_610008', 'aao_612035', 'aao_612040', 'aao_612372' ] ) );
localStorage.setItem( 'Flugzeug abgestürzt'							, JSON.stringify( [ 'aao_610008', 'aao_611999', 'aao_612003', 'aao_612005', 'aao_612009', 'aao_612014', 'aao_612302', 'aao_612321', 'aao_612329', 'aao_612331', 'aao_612372', 'aao_612376', 'aao_612377', 'aao_613072', 'aao_613075', 'aao_613077' ] ) );
localStorage.setItem( 'Frankenstein gesichtet'						, JSON.stringify( [ 'aao_612371', 'aao_612372' ] ) );
localStorage.setItem( 'Fußball Bundesliga-Spiel'					, JSON.stringify( [ 'aao_612372', 'aao_612377', 'aao_612379', 'aao_612388', 'aao_612391', 'aao_612392', 'aao_612393' ] ) );
localStorage.setItem( 'Garagenbrand'								, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Gartenlaubenbrand'							, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Gasexplosion'								, JSON.stringify( [ 'aao_610008', 'aao_611999', 'aao_612006', 'aao_612019', 'aao_612036', 'aao_612042', 'aao_612302', 'aao_612323', 'aao_612326', 'aao_612334', 'aao_612375', 'aao_613073', 'aao_613075', 'aao_613214', 'aao_613215', 'aao_613218', 'aao_613219', 'aao_684756', 'aao_684759' ] ) );
localStorage.setItem( 'Gefahrgut-LKW verunglückt'					, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612301', 'aao_612324', 'aao_612326', 'aao_612331', 'aao_612372', 'aao_613213', 'aao_613217', 'aao_684755', 'aao_684760' ] ) );
localStorage.setItem( 'Gefahrgutunfall'								, JSON.stringify( [ 'aao_610008', 'aao_611999', 'aao_612003', 'aao_612005', 'aao_612006', 'aao_612019', 'aao_612042', 'aao_612301', 'aao_612321', 'aao_612323', 'aao_612325', 'aao_612336', 'aao_613074', 'aao_613077' ] ) );
localStorage.setItem( 'Gefahrgutunfall Groß'						, JSON.stringify( [ 'aao_610008', 'aao_611999', 'aao_612003', 'aao_612005', 'aao_612006', 'aao_612042', 'aao_612301', 'aao_612323', 'aao_612325', 'aao_612326', 'aao_612336', 'aao_612371', 'aao_612372', 'aao_613074', 'aao_613077', 'aao_613214', 'aao_613218', 'aao_613219', 'aao_684756' ] ) );
localStorage.setItem( 'Gehirnerschütterung'							, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Geländedurchsuchung nach Beweismittel'		, JSON.stringify( [ 'aao_612377', 'aao_612388', 'aao_612389' ] ) );
localStorage.setItem( 'Geplante Razzia'								, JSON.stringify( [ 'aao_612372', 'aao_612379', 'aao_612389', 'aao_612390', 'aao_612392' ] ) );
localStorage.setItem( 'Gestürzte Person'							, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Gestürzter Fußgänger'						, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Gestürzter Radfahrer'						, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Große Ölspur'								, JSON.stringify( [ 'aao_609581', 'aao_612329' ] ) );
localStorage.setItem( 'Großer Feldbrand'							, JSON.stringify( [ 'aao_606948', 'aao_610008', 'aao_612035', 'aao_612038', 'aao_612040', 'aao_612371' ] ) );
localStorage.setItem( 'Großer Waldbrand'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612035', 'aao_612040', 'aao_612371' ] ) );
localStorage.setItem( 'Großfeuer im Wald'							, JSON.stringify( [ 'aao_609581', 'aao_610396', 'aao_612014', 'aao_612035', 'aao_612038', 'aao_612040', 'aao_612301', 'aao_612321', 'aao_612375', 'aao_613072' ] ) );
localStorage.setItem( 'Harnleiter Blutung'							, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Hausfriedensbruch'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Häusliche Gewalt'							, JSON.stringify( [ 'aao_612372', 'aao_613072' ] ) );
localStorage.setItem( 'Herzinfarkt'									, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Herzrhythmusstörungen'						, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Hexe hängt in Baum'							, JSON.stringify( [ 'aao_606948', 'aao_612014', 'aao_613072' ] ) );
localStorage.setItem( 'Hilflose Person'								, JSON.stringify( [ 'aao_612371', 'aao_613072' ] ) );
localStorage.setItem( 'Hitzekrampf'									, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Hitzschlag'									, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Jugendschutzkontrolle in Diskothek'			, JSON.stringify( [ 'aao_612372', 'aao_612377', 'aao_612388', 'aao_612389' ] ) );
localStorage.setItem( 'Kaminbrand'									, JSON.stringify( [ 'aao_606948', 'aao_612014', 'aao_612040' ] ) );
localStorage.setItem( 'Keller unter Wasser'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Kellerbrand'									, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612040', 'aao_613072' ] ) );
localStorage.setItem( 'Kleine Ölspur'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Kleiner Feldbrand'							, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Kleiner Waldbrand'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Kleinflugzeug abgestürzt'					, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612040', 'aao_612301', 'aao_612372', 'aao_613073', 'aao_613075', 'aao_684760' ] ) );
localStorage.setItem( 'Kleintier in Not'							, JSON.stringify( [ 'aao_606948', 'aao_612014' ] ) );
localStorage.setItem( 'Kopfplatzwunde'								, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Krampfanfall'								, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Küchenbrand'									, JSON.stringify( [ 'aao_609581', 'aao_612371' ] ) );
localStorage.setItem( 'Kürbisse geklaut'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Kürbissuppe übergekocht'						, JSON.stringify( [ 'aao_606948', 'aao_612040', 'aao_612321', 'aao_613072' ] ) );
localStorage.setItem( 'Ladendiebstahl'								, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Lagerhallenbrand'							, JSON.stringify( [ 'aao_610008', 'aao_612002', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612301', 'aao_612321', 'aao_612331', 'aao_612372', 'aao_613072', 'aao_613213', 'aao_613217', 'aao_613219', 'aao_684755', 'aao_684759', 'aao_684760' ] ) );
localStorage.setItem( 'Leck in Chemikalientank'						, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_610008', 'aao_612006', 'aao_612035', 'aao_612301', 'aao_612321', 'aao_612324', 'aao_612326', 'aao_612329', 'aao_612334', 'aao_612372', 'aao_613074', 'aao_613077' ] ) );
localStorage.setItem( 'LKW Auffahrunfall'							, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612040', 'aao_612324', 'aao_612329', 'aao_612372' ] ) );
localStorage.setItem( 'LKW in Hauswand'								, JSON.stringify( [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_613213', 'aao_613215', 'aao_613219', 'aao_684760' ] ) );
localStorage.setItem( 'LKW umgestürzt'								, JSON.stringify( [ 'aao_606948', 'aao_612002', 'aao_612040', 'aao_612372' ] ) );
localStorage.setItem( 'Mähdrescher Brand'							, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Maschinenbrand'								, JSON.stringify( [ 'aao_609581', 'aao_612002', 'aao_612035', 'aao_612040', 'aao_612321' ] ) );
localStorage.setItem( 'Massenkarambolage'							, JSON.stringify( [ 'aao_609581', 'aao_610396', 'aao_612003', 'aao_612005', 'aao_612006', 'aao_612330', 'aao_613072', 'aao_613073', 'aao_613074', 'aao_613075' ] ) );
localStorage.setItem( 'Massenschlägerei'							, JSON.stringify( [ 'aao_612371', 'aao_612375', 'aao_613072', 'aao_613073' ] ) );
localStorage.setItem( 'Metalldiebstahl'								, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Mittlerer Feldbrand'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612035', 'aao_612038', 'aao_612040' ] ) );
localStorage.setItem( 'Monster ausgebrochen'						, JSON.stringify( [ 'aao_612375' ] ) );
localStorage.setItem( 'Motorrad-Brand'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Motorradunfall'								, JSON.stringify( [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Mülleimerbrand'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Nasenbluten unstillbar'						, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Notebook aus Schule entwendet'				, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Pannenfahrzeug'								, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Parkdeck voll Wasser gelaufen'				, JSON.stringify( [ 'aao_606948', 'aao_612035', 'aao_612301', 'aao_612329', 'aao_612372' ] ) );
localStorage.setItem( 'Parkendes Auto gerammt'						, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Person hinter Tür'							, JSON.stringify( [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Person unter Baum eingeklemmt'				, JSON.stringify( [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Personalienaufnahme von Schwarzfahrer'		, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Personenkontrolle'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Präsenzeinsatz Volksfest'					, JSON.stringify( [ 'aao_612377', 'aao_612388', 'aao_612389' ] ) );
localStorage.setItem( 'Randalierende Person'						, JSON.stringify( [ 'aao_612372' ] ) );
localStorage.setItem( 'Rangelei auf Weihnachtsmarkt'				, JSON.stringify( [ 'aao_612372', 'aao_613073' ] ) );
localStorage.setItem( 'Raub'		 								, JSON.stringify( [ 'aao_612371', 'aao_612372' ] ) );
localStorage.setItem( 'Rauchentwicklung in Museum'					, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612014', 'aao_612040', 'aao_612321', 'aao_612372', 'aao_613073', 'aao_613075', 'aao_684760' ] ) );
localStorage.setItem( 'Ruhestörung'									, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Sachbeschädigung'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Schädelverletzung'							, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Scheunenbrand'								, JSON.stringify( [ 'aao_610008', 'aao_612014', 'aao_612038', 'aao_612040', 'aao_612321', 'aao_613072' ] ) );
localStorage.setItem( 'Schlaganfall'								, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Schlägerei'									, JSON.stringify( [ 'aao_612371', 'aao_612372', 'aao_613072', 'aao_613073' ] ) );
localStorage.setItem( 'Schornsteinbrand'							, JSON.stringify( [ 'aao_606948', 'aao_612014', 'aao_612040' ] ) );
localStorage.setItem( 'Schwangere in Notsituation'					, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Schwerpunkteinsatz Tageswohnungseinbrüche'	, JSON.stringify( [ 'aao_612377', 'aao_612388', 'aao_612389' ] ) );
localStorage.setItem( 'Schwerpunktseinsatz Verkehrsüberwachung'		, JSON.stringify( [ 'aao_612377', 'aao_612388', 'aao_612389' ] ) );
localStorage.setItem( 'Sonnenstich'									, JSON.stringify( [ 'aao_613072' ] ) );
localStorage.setItem( 'Sperrmüllbrand'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Sporthallenbrand'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_610008', 'aao_612019', 'aao_612035', 'aao_612301', 'aao_612321', 'aao_684760' ] ) );
localStorage.setItem( 'Straße unter Wasser'							, JSON.stringify( [ 'aao_606948', 'aao_612372' ] ) );
localStorage.setItem( 'Strohballen Brand'							, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Sturz aus Höhe'								, JSON.stringify( [ 'aao_613072', 'aao_613197', 'aao_613204' ] ) );
localStorage.setItem( 'Süßigkeitendiebstahl'						, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Tankstellenbrand'							, JSON.stringify( [ 'aao_606948', 'aao_609581', 'aao_612003', 'aao_612014', 'aao_612301', 'aao_612324', 'aao_612331' ] ) );
localStorage.setItem( 'Taschendiebstahl'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Tiefgarage unter Wasser'						, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Traktor Brand'								, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'Trunkenheitsfahrt'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Umherfliegendes Baumaterial'					, JSON.stringify( [ 'aao_606948' ] ) );
localStorage.setItem( 'unangekündigte Demonstration'				, JSON.stringify( [ 'aao_612371', 'aao_612372', 'aao_612375' ] ) );
localStorage.setItem( 'Unfall mit Motorsäge'						, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Unterzuckerung'								, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Vaginale Blutung'							, JSON.stringify( [ 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Verkehrsbehinderung'							, JSON.stringify( [ 'aao_612371' ] ) );
localStorage.setItem( 'Verkehrsunfall'								, JSON.stringify( [ 'aao_606948', 'aao_612002', 'aao_612372', 'aao_613073', 'aao_613198' ] ) );
localStorage.setItem( 'Verkehrsunfall durch Glatteis'				, JSON.stringify( [ 'aao_612002', 'aao_613072', 'aao_613073' ] ) );
localStorage.setItem( 'Verletzte Person auf Baugerüst'				, JSON.stringify( [ 'aao_606948', 'aao_612014', 'aao_612040', 'aao_612310', 'aao_613072', 'aao_613197' ] ) );
localStorage.setItem( 'Wirbelsäulenverletzung'						, JSON.stringify( [ 'aao_613072', 'aao_613197', 'aao_613204' ] ) );
localStorage.setItem( 'Wohnwagenbrand'								, JSON.stringify( [ 'aao_609581' ] ) );
localStorage.setItem( 'Zimmerbrand'									, JSON.stringify( [ 'aao_609581', 'aao_612014', 'aao_613072' ] ) );
localStorage.setItem( 'Zombiebiss'									, JSON.stringify( [ 'aao_613072' ] ) );

localStorage.setItem( 'Krankentransport'							, JSON.stringify( [ 'aao_613205' ] ) );
