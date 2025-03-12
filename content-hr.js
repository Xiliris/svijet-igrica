const games_hr = [
    {
      id: 1,
      name: "Grand Theft Auto V",
      rating: "9.8/10",
      description:
        "Grand Theft Auto V je opsežna akcijsko-avanturistička igra otvorenog svijeta koju je razvio Rockstar Games. Radnja se odvija u ogromnom i dinamičnom gradu Los Santosu i okolnom području Blaine Countyja, a prati živote tri različita lika: Michaela De Sante, umirovljenog pljačkaša banaka koji se teško nosi sa svojom disfunkcionalnom obitelji; Franklina Clintona, mladog repo čovjeka koji traži bolji život; te Trevora Philipsa, nasilnog i nepredvidivog bivšeg vojnog pilota. Igrači mogu slobodno prelaziti između likova i doživjeti njihovu priču iz različitih perspektiva dok se one isprepliću. Igra je poznata po složenim pljačkama, brojnim sporednim misijama, dinamičnim NPC-ima i spektakularnoj grafici. GTA V također sadrži opsežan mrežni način igre, GTA Online, u kojem igrači mogu surađivati ili natjecati se u raznim misijama, utrkama i kriminalnim aktivnostima. Njegova dugovječnost i kulturni utjecaj čine ga jednom od najprodavanijih igara svih vremena.",
      splash: "../images/games/gtav.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 2,
      name: "Counter-Strike: Global Offensive",
      rating: "9/10",
      description:
        "Counter-Strike: Global Offensive (CS:GO) je kompetitivna pucačina iz prvog lica u kojoj se dva tima, Teroristi i Protuteroristi, natječu u misijama temeljenim na ciljevima. Razvili su je Valve Corporation i Hidden Path Entertainment, a CS:GO naglašava stratešku igru, precizno ciljanje i timsku koordinaciju. Igrači sudjeluju u rundama u kojima moraju ispuniti zadatke poput postavljanja ili deaktiviranja bombe, spašavanja talaca ili eliminacije protivničkog tima. Minimalistički, ali intenzivan pristup taktičkom pucanju učinio je CS:GO temeljem eSporta, s bogatom kompetitivnom scenom i redovitim ažuriranjima koja donose nove mape, skinove za oružje i balansiranje igranja. CS:GO je poznat po svojoj visokoj razini vještine i mehaničkoj preciznosti, što ga čini izazovnim za početnike, ali nagrađujućim za iskusne igrače.",
      splash: "../images/games/csgo.jpg",
      price: 14.99,
      discount: 0.0,
    },
    {
      id: 3,
      name: "Fortnite",
      rating: "8.5/10",
      description:
        "Fortnite, kojeg je razvio Epic Games, iznimno je popularna battle royale igra koja kombinira preživljavanje, borbu i mehaniku gradnje u šarenom i brzom okruženju. Do 100 igrača iskrcava se na golemi otok i natječe se kako bi ostali posljednji preživjeli. Fortnite se ističe jedinstvenim sustavom gradnje, koji omogućuje igračima brzo podizanje zidova, rampi i drugih struktura za obranu i napad tijekom borbe. Osim battle royale načina, Fortnite nudi privremene događaje, kreativni način rada u kojem igrači mogu graditi vlastite svjetove, te suradnje s popularnim franšizama. Njegova živopisna grafika, česta ažuriranja i angažirani događaji u zajednici učinili su ga kulturnim fenomenom koji privlači milijune igrača diljem svijeta.",
      splash: "../images/games/fort.jpg",
      price: 0.0,
      discount: 0,
    },
    {
      id: 4,
      name: "Among Us",
      rating: "8/10",
      description:
        "Among Us je multiplayer društvena igra dedukcije koju je razvio InnerSloth i koja je postala globalni hit zahvaljujući jedinstvenom spoju suradnje i prijevare. Radnja se odvija na svemirskom brodu, gdje su igrači podijeljeni u dvije uloge: Članovi posade i Uljezi. Članovi posade moraju izvršavati razne zadatke po brodu, dok istovremeno pokušavaju identificirati i eliminirati Uljeze koji se skrivaju među njima. S druge strane, Uljezi nastoje sabotirati misije i eliminirati članove posade bez da budu otkriveni. Zbog jednostavnih kontrola, šarenog vizualnog stila i strateške igrivosti, Among Us potiče komunikaciju, povjerenje i blefiranje. Igra se može igrati online ili lokalno, što je čini savršenom za zabave, streaming i druženje s prijateljima.",
      splash: "../images/games/aus.jpg",
      price: 4.99,
      discount: 0.1,
    },
    {
      id: 5,
      name: "Forza Horizon 5",
      rating: "9.2/10",
      description:
        "Forza Horizon 5, koju je razvio Playground Games, je igra utrka otvorenog svijeta koja igrače vodi u živopisnu i raznoliku verziju Meksika. S ogromnom mapom prepunom zapanjujućih pejzaža – od pustinja i džungli do povijesnih gradova i plaža – igrači mogu istraživati svijet vlastitim tempom u raznim prilagodljivim automobilima. Igra nudi brojne utrke, izazove, vratolomije i festivale koji slave automobilsku kulturu. Forza Horizon 5 sadrži dinamičan vremenski sustav, ciklus dana i noći te realističnu fiziku vožnje koja pojačava dojam utrkivanja. Njene opsežne opcije online igranja i događaji zajednice čine je nezaobilaznim naslovom za ljubitelje utrka.",
      splash: "../images/games/fh5.jpg",
      price: 59.99,
      discount: 0.15,
    },
    {
      id: 6,
      name: "League of Legends",
      rating: "9/10",
      description:
        "League of Legends (LoL), kojeg je razvio Riot Games, jedna je od najpopularnijih multiplayer online battle arena (MOBA) igara na svijetu. Igrači preuzimaju ulogu Prizivatelja koji kontroliraju Junake s jedinstvenim sposobnostima i sudjeluju u brzim, strateškim 5v5 bitkama s ciljem uništavanja protivničkog Nexusa. S preko 150 Junaka, od kojih svaki nudi različite stilove igranja i uloge, LoL pruža stalno evoluirajuće iskustvo zahvaljujući redovitim ažuriranjima, novom sadržaju i ogromnoj eSports sceni. Igra nagrađuje strategiju, timski rad i mehaničku vještinu, što je čini omiljenim izborom za kompetitivne igrače.",
      splash: "../images/games/lol.jpg",
      price: 0.0,
      discount: 0,
    },
    {
      id: 7,
      name: "Minecraft",
      rating: "9.3/10",
      description:
        "Minecraft, razvijen od strane Mojang Studiosa, je sandbox igra koja potiče kreativnost, istraživanje i preživljavanje u proceduralno generiranom 3D svijetu od blokova. Igrači mogu skupljati resurse, izrađivati alate i graditi složene strukture sami ili u multiplayer načinu. S više načina igre, uključujući Survival, Creative i Adventure, Minecraft nudi nešto za svakoga. Bilo da se bore s čudovištima, kopaju duboko pod zemljom ili grade monumentalne građevine, igra pruža beskrajne mogućnosti. Česte nadogradnje, mods zajednice i obrazovna upotreba učvrstili su Minecraft kao jednu od najprodavanijih igara svih vremena, osvajajući maštu igrača svih uzrasta.",
      splash: "../images/games/mc.jpg",
      price: 26.95,
      discount: 0.1,
    },
    {
      id: 8,
      name: "Red Dead Redemption 2",
      rating: "9.7/10",
      description:
        "Red Dead Redemption 2, razvijen od strane Rockstar Gamesa, je akcijsko-avanturistička igra s otvorenim svijetom smještena u 1899. godinu, u doba zalaska Divljeg zapada u Americi. Igrači preuzimaju ulogu Arthura Morgana, člana bande Van der Linde, dok se bori s odanošću, čašću i preživljavanjem u svijetu koji se brzo mijenja. Igra nudi golem i detaljno izrađen svijet prepun imerzivne priče, zanimljivih sporednih misija, lova, ribolova, jahanja i dinamičnih interakcija s NPC-ima. Sa zadivljujućom grafikom i moćnom naracijom koja istražuje moralnost i iskupljenje, Red Dead Redemption 2 se smatra remek-djelom modernog gaminga.",
      splash: "../images/games/rdr2.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 9,
      name: "Sea of Thieves",
      rating: "8.4/10",
      description:
        "Sea of Thieves, razvijen od strane Rare studija, je avanturistička igra s otvorenim svijetom koja igračima omogućava da žive svoje gusarske snove. Igrači mogu formirati posade, ploviti morem na prilagodljivim brodovima, tražiti blago i sudjelovati u uzbudljivim pomorskim bitkama s drugim gusarima. Igra potiče suradnju i kreativnost, jer igrači mogu birati vlastiti put – od lova na skriveno blago do borbe protiv drugih igrača (PvP). Sea of Thieves se redovito ažurira s novim sadržajem i značajkama, pružajući neprestano razvijajući svijet koji slavi istraživanje i avanturu u zabavnom, crtanom stilu.",
      splash: "../images/games/sot.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 10,
      name: "Terraria",
      rating: "8.6/10",
      description:
        "Terraria je sandbox avanturistička igra koja kombinira istraživanje, gradnju, borbu i zanatstvo unutar proceduralno generiranog 2D svijeta s pikseliziranom grafikom. Igrači mogu kopati duboko u špilje, graditi složene strukture, boriti se protiv moćnih neprijatelja i skupljati rijetke predmete. Sa stotinama bioma, neprijatelja i recepata za izradu, Terraria igračima pruža potpunu slobodu bilo da se fokusiraju na gradnju, istraživanje skrivenih tajni ili svladavanje teških izazova. Njen retro vizualni stil i zarazna igrivost učinili su Terrariu omiljenom igrom u gaming zajednici, s bogatim iskustvom kako za solo igrače tako i za multiplayer druženja.",
      splash: "../images/games/ter.jpg",
      price: 9.99,
      discount: 0.0,
    },
    {
      id: 11,
      name: "Marvel's Spider-Man 2",
      rating: "9.8/10",
      description:
        "Marvel's Spider-Man 2 je uzbudljiva akcijsko-avanturistička igra s otvorenim svijetom, razvijena od strane Insomniac Gamesa. Igrači preuzimaju uloge Petera Parkera i Milesa Moralesa dok patroliraju užurbanim ulicama New Yorka i suočavaju se s legendarnim negativcima poput Venoma i Kravena Lovca. S proširenom mapom, poboljšanim borbenim sustavom i novim simbiotskim sposobnostima, igra pruža brzu i emotivnu superherojsku avanturu. Dinamično ljuljanje mrežom i neprimjetno prebacivanje između likova čine istraživanje i borbu uzbudljivijima nego ikad. Ova visoko hvaljena nastavna igra nadograđuje uspjeh svojih prethodnika, nudeći uzbudljivu priču i zapanjujuće vizuale koji vjerno prenose iskustvo biti Spider-Man.",
      splash: "../images/games/spiderman.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 12,
      name: "It Takes Two",
      rating: "9.8/10",
      description:
        "It Takes Two je kritički hvaljena kooperativna avantura koju je razvio Hazelight Studios. Dizajnirana isključivo za dva igrača, igra prati Codyja i May, bračni par pred razvodom, koji su čarolijom pretvoreni u male lutke. Zarobljeni u čarobnom i stalno mijenjajućem svijetu, moraju surađivati kako bi riješili razne kreativne i izazovne zagonetke, platformerske dijelove i akcijske sekvence. S emotivnom pričom, duhovitim dijalozima i jedinstvenim mehanikama koje zahtijevaju stalnu suradnju, It Takes Two pruža nezaboravno iskustvo igranja. Savršena za prijatelje ili parove, ova nagrađivana igra redefinira kooperativno igranje i pripovijedanje u videoigrama.",
      splash: "../images/games/takestwo.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 13,
      name: "The Witcher 3: Wild Hunt",
      rating: "9.7/10",
      description:
        "The Witcher 3: Wild Hunt je akcijski RPG s otvorenim svijetom koji je razvio CD Projekt Red. Igrači preuzimaju ulogu Geralta od Rivije, lovca na čudovišta, dok traži svoju posvojenu kćer u svijetu razorenom ratom, ispunjenom opasnim zvijerima, mitskim stvorenjima i političkim intrigama. Igra je poznata po svojoj dubokoj priči, bogatom svijetu i značajnim odlukama igrača koje oblikuju narativ. S ogromnim svijetom za istraživanje, složenim borbenim mehanikama i velikim DLC proširenjima, ovo je jedna od najhvaljenijih igara svoje generacije.",
      splash: "../images/games/tw3.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 14,
      name: "Subnautica 2",
      rating: "9.0/10",
      description:
        "Subnautica 2, koju je razvio Unknown Worlds Entertainment, je avanturistička igra preživljavanja smještena u prostrane i tajanstvene oceane vanzemaljskog planeta. Igrači istražuju dubine, susreću jedinstvene morske životinje, otkrivaju drevne tajne i izrađuju alate i skloništa za preživljavanje. Igra naglašava istraživanje, upravljanje resursima i izgradnju baza, uz zanimljivu priču koja se postupno otkriva kako igrači dublje zarone u ocean. Sa zadivljujućim vizualima i impresivnom atmosferom, Subnautica 2 je nezaobilazna igra za ljubitelje preživljavanja i istraživanja.",
      splash: "../images/games/subnautica2.jpg",
      price: 59.99,
      discount: 0.0,
  },
    {
      id: 15,
      name: "Call of Duty: Black Ops 6",
      rating: "9/10",
      description:
        "Call of Duty: Black Ops 6 je najnoviji nastavak u serijalu Black Ops, kojeg je razvio Treyarch. Igra donosi napetu kampanju za jednog igrača, brzu multiplayer akciju i omiljeni Zombies mod, pružajući uzbudljivo iskustvo s vrhunskom grafikom i fluidnom mehanikom pucanja. Uvodi nove mehanike, uzbudljivu priču i raznovrsne multiplayer mape i modove, čineći je nezaobilaznom za ljubitelje pucačina iz prvog lica.",
      splash: "../images/games/bo6.jpg",
      price: 69.99,
      discount: 0.15,
    },
    {
      id: 16,
      name: "Apex Legends",
      rating: "9/10",
      description:
        "Apex Legends je besplatna battle royale igra koju je razvio Respawn Entertainment. Igrači biraju jednog od jedinstvenih Legendi, od kojih svaka ima posebne sposobnosti, i udružuju se u timove od tri igrača kako bi se borili protiv drugih ekipa u brzoj i taktičkoj borbi. Igra donosi dinamičan gameplay, česte nadogradnje i sezonske događaje, s novim Legendama, oružjem i igrivim elementima koji se redovno dodaju.",
      splash: "../images/games/apexlegends.jpg",
      price: 0.0,
      discount: 0.0,
    },
    {
      id: 17,
      name: "Hades",
      rating: "9.5/10",
      description:
        "Hades je rogue-like igra s tamnicama koju je razvio Supergiant Games. Igrači preuzimaju ulogu Zagreusa, sina Hada, koji pokušava pobjeći iz Podzemlja. Svaka partija je proceduralno generirana, s novim neprijateljima, izazovima i nadogradnjama. Igra donosi brzu borbu, bogatu priču koja se razvija kroz igranje, i nezaboravne likove iz grčke mitologije. Njena izazovna igrivost i narativna dubina učinili su je jednom od najistaknutijih indie igara godine.",
      splash: "../images/games/hades.jpg",
      price: 24.99,
      discount: 0.15,
    },
    {
      id: 18,
      name: "Stardew Valley",
      rating: "9.2/10",
      description:
        "Stardew Valley je simulacija poljoprivrede koju je razvio ConcernedApe. Igrači nasljeđuju zapuštenu farmu i moraju uzgajati usjeve, brinuti se o životinjama, kopati resurse i graditi odnose s mještanima. Igra ima opuštajući tempo, omogućavajući igračima da igraju vlastitim ritmom, uz sezonske događaje, festivale i razne načine za poboljšanje farme. Njena otvorena priroda i šarmantna pikselizirana grafika učinili su je omiljenom igrom među casual i hardcore igračima.",
      splash: "../images/games/sdv.jpg",
      price: 14.99,
      discount: 0.0,
    },
    {
      id: 19,
      name: "Euro Truck Simulator 2",
      rating: "9/10",
      description:
        "Euro Truck Simulator 2 (ETS2) je simulacija vožnje kamiona koju je razvio SCS Software. Igrači preuzimaju ulogu vozača kamiona, prevozeći robu širom detaljno prikazane mape Europe. Igra nudi realističnu mehaniku vožnje, širok izbor kamiona i opsežan karijerni mod u kojem igrači mogu izgraditi vlastitu prijevozničku tvrtku. Sa brojnim DLC proširenjima i posvećenom modding zajednicom, ETS2 pruža impresivno i opuštajuće iskustvo vožnje.",
      splash: "../images/games/ets2.jpg",
      price: 19.99,
      discount: 0.2,
    },
    {
      id: 20,
      name: "Resident Evil Village",
      rating: "9/10",
      description:
        "Resident Evil Village je survival horror igra koju je razvio Capcom. Igrači preuzimaju ulogu Ethana Wintersa dok traga za svojom otetom kćeri u tajanstvenom selu prepunom zastrašujućih čudovišta i natprirodnih sila. Igra spaja klasične elemente survival horrora s borbom iz prvog lica i istraživanjem. Nastavlja priču iz Resident Evila 7, s nevjerojatnim vizualima, atmosferičnim igranjem i napetim trenucima koji igrače drže na rubu sjedala.",
      splash: "../images/games/re8.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 21,
      name: "Dead by Daylight",
      rating: "8.4/10",
      description:
        "Dead by Daylight je asimetrična survival horror igra koju je razvio Behaviour Interactive. U igri jedan igrač preuzima ulogu ubojice, dok ostali igrači igraju kao preživjeli koji pokušavaju pobjeći. Preživjeli moraju surađivati kako bi popravili generatore i izbjegli zamke ubojice, dok ubojica koristi jedinstvene sposobnosti kako bi ih ulovio. Igra sadrži raznolike ubojice i preživjele iz popularnih horor franšiza, pružajući raznoliko i neprestano evoluirajuće iskustvo.",
      splash: "../images/games/dbd.jpg",
      price: 19.99,
      discount: 0.0,
    },
    {
      id: 22,
      name: "Super Mario Odyssey",
      rating: "9.5/10",
      description:
        "Super Mario Odyssey je 3D platformer koji je razvio Nintendo za Nintendo Switch. Igrači upravljaju Mariom dok kreće u avanturu širom svijeta kako bi spasio princezu Peach od Bowsera. Tijekom putovanja Mario koristi svoj ikonični šešir, Cappy, kako bi preuzeo kontrolu nad objektima i neprijateljima te rješavao zagonetke i prelazio prepreke. Igra sadrži šarene svjetove, kreativnu mehaniku igranja i mnoštvo kolekcionarskih predmeta, što je čini jednom od najboljih Mario igara posljednjih godina.",
      splash: "../images/games/marioodyssey.jpg",
      price: 59.99,
      discount: 0.15,
    },
    {
      id: 23,
      name: "The Elder Scrolls V: Skyrim",
      rating: "9.4/10",
      description:
        "The Elder Scrolls V: Skyrim je akcijski RPG s otvorenim svijetom koji je razvio Bethesda. Igrači preuzimaju ulogu Dragonborna, junaka predodređenog da spasi svijet od povratka zmajeva. Smješten u prostranom fantazijskom svijetu Skyrima, igrači mogu istraživati tamnice, izvršavati zadatke i razvijati svoje vještine u borbi, magiji i prikradanju. Dinamičan otvoreni svijet, bogata mitologija i velika modding zajednica održali su Skyrima popularnim godinama.",
      splash: "../images/games/skyrim.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 24,
      name: "Portal 2",
      rating: "9.7/10",
      description:
        "Portal 2 je hvaljeni puzzle-platformer koji je razvio Valve. Igrači preuzimaju ulogu Chell, testnog subjekta u tajanstvenom istraživačkom objektu, koja koristi portal pištolj za rješavanje složenih zagonetki i navigaciju kroz sve teže testne komore. Igra sadrži duhovitu priču, jedinstvene mehanike zagonetki i kooperativni mod u kojem dva igrača zajednički rješavaju zagonetke.",
      splash: "../images/games/portal2.jpg",
      price: 19.99,
      discount: 0.0,
    },
    {
      id: 25,
      name: "Tomb Raider (2013)",
      rating: "8.8/10",
      description:
        "Tomb Raider (2013) je akcijsko-avanturistička igra koju je razvio Crystal Dynamics. Služi kao reboot legendarne serije, fokusirajući se na početke Lare Croft kao mlade avanturistkinje. Igrači upravljaju Larom dok istražuje opasna okruženja, rješava zagonetke i bori se protiv neprijatelja. Igra kombinira istraživanje, platformiranje i borbu, uz napetu priču i emotivan razvoj likova.",
      splash: "../images/games/tombraider2013.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 26,
      name: "Minecraft Dungeons",
      rating: "7.5/10",
      description:
        "Minecraft Dungeons je akcijski RPG koji je razvio Mojang. Smješten u svemir Minecrafta, igrači istražuju tamnice, bore se protiv čudovišta i skupljaju plijen u gameplayu s pogledom odozgo u stilu hack-and-slasha. Igra podržava kooperativni multiplayer i omogućava prilagodbu likova raznim opremama i sposobnostima. To je pristupačniji, akcijski orijentiran spin-off omiljene Minecraft serije.",
      splash: "../images/games/mcdungeons.jpg",
      price: 19.99,
      discount: 0.0,
    },
    {
      id: 27,
      name: "Final Fantasy XV",
      rating: "8.6/10",
      description:
        "Final Fantasy XV je RPG s otvorenim svijetom koji je razvio Square Enix. Igra prati Noctisa Lucisa Caeluma i njegove suputnike u potrazi za povratkom prijestolja i spašavanjem kraljevstva od zle imperije. Uz borbu u stvarnom vremenu, ogroman otvoreni svijet i fokus na prijateljstvo i bratstvo, Final Fantasy XV nudi bogato iskustvo s puno akcije i dubokih narativnih elemenata.",
      splash: "../images/games/ffxv.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 28,
      name: "Far Cry 5",
      rating: "8/10",
      description:
        "Far Cry 5 je pucačina iz prvog lica koju je razvio Ubisoft. Smještena u izmišljeni gradić u Montani, igrači preuzimaju ulogu zamjenika šerifa koji pokušava srušiti vođu kulta sudnjeg dana i njegove sljedbenike. Igra nudi otvoreni svijet s istraživanjem, vatrenim obračunima i taktičkom borbom. Također podržava kooperativni multiplayer mod, omogućavajući igračima zajedničku borbu protiv neprijatelja.",
      splash: "../images/games/fc5.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 29,
      name: "Hitman 3",
      rating: "8.9/10",
      description:
        "Hitman 3 je završno poglavlje World of Assassination trilogije, koju je razvio IO Interactive. Igrači preuzimaju ulogu Agenta 47, profesionalnog ubojice, koji putuje diljem svijeta kako bi eliminirao visokoprofilirane mete. Igra naglašava stealth, strategiju i izbor igrača, nudeći različite pristupe svakom zadatku. Impresivni vizuali i intrigantna priča čine je vrhuncem stealth žanra.",
      splash: "../images/games/hitman3.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 30,
      name: "Assassin's Creed Odyssey",
      rating: "9.1/10",
      description:
        "Assassin’s Creed Odyssey je akcijski RPG s otvorenim svijetom koji je razvio Ubisoft. Radnja je smještena u antičku Grčku tijekom Peloponeskog rata, gdje igrači preuzimaju ulogu Alexiosa ili Kassandre, plaćenika upletenog u sukob. Igra nudi ogromnu mapu za istraživanje, pomorske borbe i RPG elemente poput izbora dijaloga, stabla vještina i više završetaka. Sa zadivljujućom grafikom i uzbudljivom pričom, jedna je od omiljenih igara Assassin’s Creed franšize.",
      splash: "../images/games/acodyssey.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 31,
      name: "Shadow of the Tomb Raider",
      rating: "8.5/10",
      description:
        "Shadow of the Tomb Raider je akcijsko-avanturistička igra koju je razvio Eidos-Montreal. To je završno poglavlje priče o podrijetlu Lare Croft, dok istražuje džungle Južne Amerike kako bi spriječila Majansku apokalipsu. Igra naglašava stealth gameplay, okolišne zagonetke i intenzivne borbe. Uvodi i nove mehanike istraživanja, poput ronjenja i penjanja.",
      splash: "../images/games/shadowofthetombraider.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 32,
      name: "Doom Eternal",
      rating: "9.3/10",
      description:
        "Doom Eternal je pucačina iz prvog lica koju je razvio id Software. Igrači preuzimaju ulogu Doom Slayera dok se bori protiv demona iz Pakla u adrenalinskoj, akcijskoj igri. Igra donosi intenzivne borbe, nove oružane i borbene sposobnosti te duboku priču koja proširuje Doom svemir. Uz tešku rock glazbu i neprekidnu akciju, Doom Eternal pruža vrhunsko iskustvo za ljubitelje FPS igara.",
      splash: "../images/games/doometernal.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 33,
      name: "World of Warcraft",
      rating: "9/10",
      description:
        "World of Warcraft je MMORPG igra koju je razvio Blizzard Entertainment. Igrači stvaraju vlastitog lika i istražuju golem svijet Azerotha, izvršavajući zadatke, sudjelujući u borbama i komunicirajući s drugim igračima. Igra je poznata po svojoj bogatoj mitologiji, čestim proširenjima i velikom utjecaju na MMORPG žanr.",
      splash: "../images/games/wow.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 34,
      name: "Red Dead Redemption",
      rating: "9.3/10",
      description:
        "Red Dead Redemption je akcijsko-avanturistička igra s otvorenim svijetom koju je razvio Rockstar Games. Radnja je smještena u posljednje dane Divljeg zapada, gdje igrači preuzimaju ulogu Johna Marstona, bivšeg odmetnika koji mora loviti svoje nekadašnje saveznike. Igra donosi dinamičan otvoreni svijet prepun divljine, odmetnika i zakona, kao i duboku priču.",
      splash: "../images/games/rdr.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 35,
      name: "Battlefield 2042",
      rating: "7.8/10",
      description:
        "Battlefield 2042 je pucačina iz prvog lica koju je razvio DICE. Radnja je smještena u blisku budućnost, a igra nudi velike bitke s čak 128 igrača u različitim multiplayer modovima. Naglasak je na dinamičnim borbama s uništivim okolinama te širokom paletom vozila i oružja. Iako je igra na početku naišla na određene kritike, redovitim ažuriranjima poboljšani su performanse i igrivost, što ju čini sve boljom s vremenom. Igra savršeno kombinira strateški i kaotični multiplayer iskustvo.",
      splash: "../images/games/bf2042.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 36,
      name: "The Last of Us Part I",
      rating: "9.7/10",
      description:
        "The Last of Us Part I je akcijsko-pustolovna igra koju je razvio Naughty Dog. Radnja je smještena u postapokaliptični svijet gdje igrači kontroliraju Ellie, koja kreće u potragu za osvetom nakon traumatičnog događaja. Igra nudi uzbudljivu priču, stealth mehaniku i intenzivne borbe. Smatra se jednom od najboljih narativno vođenih igara svoje generacije, s dubokim likovima i emotivno snažnom pričom koja ostavlja dugotrajan dojam.",
      splash: "../images/games/thelastofus1.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 37,
      name: "Ghost of Tsushima",
      rating: "9/10",
      description:
        "Ghost of Tsushima je akcijsko-pustolovna igra otvorenog svijeta koju je razvio Sucker Punch Productions. Radnja je smještena u feudalni Japan tijekom mongolske invazije, a igrači kontroliraju Jina Sakaija, samuraja koji mora prilagoditi svoje metode borbe kako bi obranio svoj dom. Igra nudi prekrasne prizore, mačevanje, stealth mehaniku i zadivljujuću priču. Svaki detalj igre odiše ljepotom i autentičnošću japanske kulture.",
      splash: "../images/games/ghostoftsushima.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 38,
      name: "Overcooked! 2",
      rating: "8.5/10",
      description:
        "Overcooked! 2 je kaotična simulacija kuhanja koju je razvio Ghost Town Games. Igrači moraju surađivati kako bi pripremili i poslužili narudžbe hrane u sve bizarnijim i izazovnijim kuhinjama. Igra je brza i zabavna, s naglaskom na timski rad i komunikaciju između igrača. Svaka razina donosi nove izazove, što čini igru savršenom za društvene igrače koji vole smijeh i nered. ",
      splash: "../images/games/overcooked2.jpg",
      price: 24.99,
      discount: 0.0,
    },
    {
      id: 39,
      name: "Dead Space (2008)",
      rating: "9/10",
      description:
        "Dead Space je survival horor igra koju je razvio EA Redwood Shores. Igrači kontroliraju Isaaca Clarkea, inženjera na svemirskoj stanici preplavljenoj užasnim vanzemaljskim stvorenjima. Igra nudi atmosferične prizore, napetu borbu i psihološki horor, s posebnim naglaskom na strateško razbijanje neprijatelja kako bi preživjeli. Njegova mračna i jeziva priča ostaje nezaboravna za sve ljubitelje horor žanra.",
      splash: "../images/games/deadspace.jpg",
      price: 19.99,
      discount: 0.0,
    },
    {
      id: 40,
      name: "The Division 2",
      rating: "8.5/10",
      description:
        "The Division 2 je online akcijski RPG kojeg je razvio Massive Entertainment. Radnja je smještena u postapokaliptični Washington D.C., gdje igrači kontroliraju članove specijalne jedinice zadužene za obnovu reda u gradu. Igra nudi mješavinu PvE i PvP igrivosti, s naglaskom na taktičke borbe i skupljanje opreme. Svaka misija donosi nove izazove i prilike za nadogradnju likova.",
      splash: "../images/games/division2.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 41,
      name: "Sekiro: Shadows Die Twice",
      rating: "9.5/10",
      description:
        "Sekiro: Shadows Die Twice je akcijsko-pustolovna igra koju je razvio FromSoftware. Radnja je smještena u reimaginiranu verziju Japana, a igrači kontroliraju Wolfa, shinobija na misiji spašavanja svog otetog gospodara i osvete. Igra nudi izazovne borbe, istraživanje i stealth elemente, s naglaskom na precizno vrijeme i strategiju. Svaka borba je test vještine i strpljenja, što čini igru nezaboravnom za ljubitelje izazova.",
      splash: "../images/games/sekiro.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 42,
      name: "FIFA 23",
      rating: "8/10",
      description:
        "FIFA 23 je nogometna simulacija koju je razvio EA Sports. Igra nudi realističnu grafiku, animacije igrača i različite modove, uključujući karijeru, Ultimate Team i online multiplayer. Godišnje ažuriranja čine FIFU najboljim izborom za nogometne obožavatelje koji traže autentično iskustvo. Svaka utakmica donosi nove emocije i prilike za strateško planiranje.",
      splash: "../images/games/fifa23.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 43,
      name: "The Sims 4",
      rating: "8.7/10",
      description:
        "The Sims 4 je simulacija života koju je razvio Maxis. Igrači stvaraju i kontroliraju virtualne ljude, grade domove, razvijaju odnose i upravljaju karijerama. Igra nudi širok spektar opcija za prilagodbu, a ekspanzije dodaju nove sadržaje i mehanike. Svaki Sim ima svoju osobnost i priču, što čini igru beskonačno zabavnom i kreativnom.",
      splash: "../images/games/thesims4.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 44,
      name: "Rocket League",
      rating: "8.9/10",
      description:
        "Rocket League je hibrid nogometa i vješalačkih automobilskih borbi kojeg je razvio Psyonix. Igrači kontroliraju automobile i pokušavaju postići golove u futurističkoj areni, s naglaskom na akrobatske manevre i brzu akciju. Igra nudi singleplayer i multiplayer modove, s živom natjecateljskom zajednicom. Svaka utakmica je nova prilika za uzbudljive trenutke i nevjerojatne golove.",
      splash: "../images/games/rocketleague.jpg",
      price: 0.0,
      discount: 0.0,
    },
    {
      id: 45,
      name: "Monster Hunter: World",
      rating: "9/10",
      description:
        "Monster Hunter: World je akcijski RPG kojeg je razvio Capcom. Igrači preuzimaju ulogu lovca zaduženog za praćenje i lov ogromnih stvorenja u otvorenom svijetu. Igra nudi kooperativni multiplayer u kojem se igrači udružuju kako bi lovili i borili se protiv moćnih čudovišta, koristeći različito oružje i strategije. Svaki lov je jedinstven iskustvo, s detaljnim mehanikama i bogatim okruženjima koje istražujete.",
      splash: "../images/games/monsterhunterworld.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 46,
      name: "Battlefield V",
      rating: "8/10",
      description:
        "Battlefield V je pucačina iz prvog lica koju je razvio DICE. Radnja je smještena u vrijeme Drugog svjetskog rata, a igra nudi velike multiplayer bitke na različitim bojištima. Naglasak je na taktičkoj igri, uništivim okolinama i timskom radu, uz širok izbor vozila i oružja. Svaka bitka je intenzivno iskustvo koje zahtijeva strategiju i suradnju.",
      splash: "../images/games/bf5.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 47,
      name: "Borderlands 3",
      rating: "8.7/10",
      description:
        "Borderlands 3 je pucačina s naglaskom na plijen koju je razvio Gearbox Software. Radnja je smještena u postapokaliptični svijet Pandore, a igrači kontroliraju jednog od četiri 'Lovca na svodove' dok se bore protiv hordi neprijatelja, skupljaju plijen i obavljaju zadatke. Igra ima prepoznatljiv cel-shaded stil, duhovit dijalog i kaotične borbe. Svaka misija donosi nove izazove i prilike za skupljanje opreme.",
      splash: "../images/games/borderlands3.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 48,
      name: "Dark Souls III",
      rating: "9.5/10",
      description:
        "Dark Souls III je akcijski RPG kojeg je razvio FromSoftware. Igrači kontroliraju 'Ashen One', lika zaduženog za okončanje kletve koja proganja svijet. Igra je poznata po izazovnim borbama, dubokoj priči i složenom dizajnu razina, kao i atmosferičnim okruženjima. Svaka borba je test vještine i strpljenja, a svaka lokacija krije tajne koje čekaju da budu otkrivene.",
      splash: "../images/games/darksouls3.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 49,
      name: "Control",
      rating: "9/10",
      description:
        "Control je akcijsko-pustolovna igra koju je razvio Remedy Entertainment. Igrači kontroliraju Jesse Faden, ženu koja traži odgovore o svom nestalom bratu u tajanstvenom Federalnom birou za kontrolu. Igra nudi telekinetičke moći, uništavanje okoline i složenu, umom obmanjujuću priču. Svaka soba i hodnik kriju misterije koje čekaju da budu razotkrivene.",
      splash: "../images/games/control.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 50,
      name: "Assassin's Creed Valhalla",
      rating: "8.8/10",
      description:
        "Assassin's Creed Valhalla je akcijski RPG otvorenog svijeta kojeg je razvio Ubisoft. Radnja je smještena u vrijeme vikinških invazija na Englesku, a igrači kontroliraju Eivora, vikinškog ratnika, dok grade naselje, napadaju neprijatelje i istražuju ogroman otvoreni svijet. Igra nudi granajuću priču, borbe i stealth elemente. Svaka odluka ima posljedice, a svaka regija krije svoje tajne.",
      splash: "../images/games/acvalhalla.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 51,
      name: "Monster Hunter Rise",
      rating: "9/10",
      description:
        "Monster Hunter Rise je akcijski RPG kojeg je razvio Capcom. Igrači preuzimaju ulogu lovca u živopisnom selu ugroženom čudovištima. Igra uvodi nove mehanike poput Wirebuga i pasa pratilaca, kao i poboljšane borbe i istraživanje. Svaki lov je nova prilika za stjecanje iskustva i skupljanje resursa za nadogradnju opreme.",
      splash: "../images/games/monsterhunterrise.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 52,
      name: "Hitman 2",
      rating: "8.9/10",
      description:
        "Hitman 2 je akcijska igra temeljena na stealthu koju je razvio IO Interactive. Igrači kontroliraju Agenta 47 dok obavlja seriju ugovornih ubojstava diljem svijeta. Igra naglašava izbor igrača, s više načina za pristup svakoj misiji, bilo kroz stealth ili agresivne taktike. Svaka lokacija je pažljivo osmišljena, pružajući brojne mogućnosti za kreativno rješavanje zadataka.",
      splash: "../images/games/hitman2.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 53,
      name: "Dying Light 2",
      rating: "8.5/10",
      description:
        "Dying Light 2 je survival horor igra iz prvog lica koju je razvio Techland. Radnja je smještena u postapokaliptični svijet prepun zombija, a igrači kontroliraju Aidena, čovjeka u potrazi za sestrom. Igra nudi parkour pokrete, borbe i granajuću priču s odlukama koje utječu na svijet oko vas. Svaka odluka može promijeniti tok igre, čineći je jedinstvenim iskustvom.",
      splash: "../images/games/dyinglight2.jpg",
      price: 59.99,
      discount: 0.0,
    },
    {
      id: 54,
      name: "Gears 5",
      rating: "8.8/10",
      description:
        "Gears 5 je pucačina iz trećeg lica koju je razvio The Coalition. Igrači kontroliraju Kait Diaz dok se kreće kroz svijet u ratu s čudovišnom Locust Hordom. Igra nudi bogatu priču, kooperativne multiplayer modove i intenzivne borbe s mehanikom zaklona. Svaka misija donosi nove izazove i prilike za timski rad.",
      splash: "../images/games/gears5.jpg",
      price: 39.99,
      discount: 0.0,
    },
    {
      id: 55,
      name: "State of Decay 2",
      rating: "7.5/10",
      description:
        "State of Decay 2 je survival igra koju je razvio Undead Labs. Radnja je smještena u postapokaliptični svijet preplavljen zombijima, a igrači moraju upravljati zajednicom preživjelih, skupljati resurse i graditi bazu. Igra nudi i singleplayer i multiplayer modove, s naglaskom na upravljanje resursima i donošenje odluka. Svaka odluka može imati dalekosežne posljedice, čineći svaku igru jedinstvenim iskustvom.",
      splash: "../images/games/stateofdecay2.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 56,
      name: "Hell Pie",
      rating: "8/10",
      description:
        "Hell Pie je bizarne i pretjerane 3D platformer igra koju je razvio Sluggerfly. Igrači kontroliraju Natea, 'Demona lošeg ukusa', dok kreće u kaotičnu avanturu kako bi prikupio sastojke za Satanov rođendanski kolač. Igra nudi kreativni dizajn razina, groteskni humor i brzu platformsku igru s jedinstvenim sustavom kretanja pomoću lanca. Svaka razina donosi nove izazove i prilike za smijeh i zabavu. ",
      splash: "../images/games/hellpie.jpg",
      price: 24.99,
      discount: 0.2,
    },
    {
      id: 57,
      name: "For Honor",
      rating: "8/10",
      description:
        "For Honor je srednjovjekovna borilačka igra koju je razvio Ubisoft. Igrači biraju između različitih ratnika, uključujući vitezove, samuraje i vikinže, te sudjeluju u strateškim borbama prsa u prsa. Igra nudi i singleplayer i multiplayer modove, s dubokim sustavom borbe koji nagrađuje vrijeme, taktiku i preciznost. Svaka borba je test vještine i strpljenja.",
      splash: "../images/games/forhonor.jpg",
      price: 29.99,
      discount: 0.0,
    },
    {
      id: 58,
      name: "Star Wars Jedi: Fallen Order",
      rating: "8.5/10",
      description:
        "Star Wars Jedi: Fallen Order je akcijsko-pustolovna igra koju je razvio Respawn Entertainment. Igrači kontroliraju Cala Kestisa, mladog Jedija koji mora izbjegavati snage Carstva dok otkriva tajne o Sili. Igra nudi borbe svjetlosnim mačevima, istraživanje i priču smještenu u svemir Star Warsa. Svaka misija donosi nove izazove i prilike za istraživanje bogatog svijeta.",
      splash: "../images/games/swfallenorder.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 59,
      name: "Cyberpunk 2077",
      rating: "8.3/10",
      description:
        "Cyberpunk 2077 je RPG otvorenog svijeta kojeg je razvio CD Projekt Red. Radnja je smještena u distopijsku budućnost Night Cityja, a igrači kontroliraju V, plaćenika čija se priča odvija kroz kombinaciju akcije, istraživanja i dubokih narativnih izbora. Unatoč teškom početku, igra je redovito ažurirana, dodajući nove značajke i poboljšavajući igrivost. Svaka odluka može promijeniti tok priče, čineći je jedinstvenim iskustvom.",
      splash: "../images/games/cyberpunk2077.jpg",
      price: 49.99,
      discount: 0.0,
    },
    {
      id: 60,
      name: "Horizon Zero Dawn",
      rating: "9/10",
      description:
        "Horizon Zero Dawn je akcijski RPG otvorenog svijeta kojeg je razvio Guerrilla Games. Igrači kontroliraju Aloy, mladu lovicu u postapokaliptičnom svijetu preplavljenom robotskim stvorenjima. Igra nudi prekrasan otvoreni svijet, uzbudljive borbe i priču ispunjenu misterijom i otkrićima. Svaka lokacija krije tajne koje čekaju da budu otkrivene.",
      splash: "../images/games/horizonzerodawn.jpg",
      price: 39.99,
      discount: 0.0,
    },
  ];
  
  export default games_hr;
  