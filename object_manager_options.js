ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [43.226667, 76.845204],
            zoom: 12,
			controls: ['zoomControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager(); //{ clusterize: true,clusterHasBalloon: false,preset: "islands#redCircleDotIcon" }

    myMap.geoObjects.add(objectManager);

	
		
	// Creating a polygon using the Polygon auxiliary class.
	 var myPolygon = new ymaps.Polygon([
             // Specifying the coordinates of the vertices of the polygon.
             [
				[43.23995263971728, 76.81386652495047],
				[43.24108213871799, 76.81863012816096],
				[43.24418815223269, 76.8311184933343],
				[43.24597085572978, 76.83767255693839],
				[43.247696299026586, 76.84230741411615],
				[43.249170729748734, 76.84574064165518],
				[43.25039821539256, 76.84997809995264],
				[43.2510256090845, 76.85319675077051],
				[43.25231214475917, 76.85807004854306],
				[43.2538491990952, 76.86064496919735],
				[43.25573125323509, 76.86321988985165],
				[43.25667225833742, 76.86510816499812],
				[43.25030450474523, 76.86356321260554],
				[43.24763800480818, 76.86390653535943],
				[43.238023593204474, 76.86965546668151],
				[43.234148500316486, 76.87008462012386],
				[43.23326990223432, 76.8707605367956],
				[43.23104992989387, 76.87333904053604],
				[43.22932462984437, 76.87542233723072],
				[43.22838319922657, 76.87778268116386],
				[43.22618233240258, 76.87965051901074],
				[43.22411105817905, 76.88128130209178],
				[43.22230224405331, 76.8820241650934],
				[43.221392089102416, 76.8825820645685],
				[43.22046549236969, 76.88374602489911],
				[43.21895130454296, 76.88436001486082],
				[43.21708050345339, 76.8848723210122],
				[43.215520424447085, 76.88513604864626],
				[43.21167225781498, 76.88469945919671],
				[43.211248492301856, 76.88278972637815],
				[43.2072722011754, 76.88408294850849],
				[43.204195686572305, 76.86708847219012],
				[43.2006794785373, 76.86869779759905],
				[43.19753983460691, 76.87125126058126],
				[43.194855310017594, 76.86215320760273],
				[43.194588420955945, 76.85646692449119],
				[43.194305831256436, 76.85436407262353],
				[43.19386624465982, 76.8519178980019],
				[43.19363075052839, 76.8507591837075],
				[43.19449422453587, 76.8507806413796],
				[43.19449422453587, 76.85039440328144],
				[43.19498090446336, 76.85052314931417],
				[43.19540478379588, 76.85116687947776],
				[43.19753983460691, 76.85093084508443],
				[43.196723500557646, 76.84666076833273],
				[43.200266458676616, 76.84507076849158],
				[43.197299479163355, 76.84103672613318],
				[43.199505397855255, 76.83798181210537],
				[43.20154611870794, 76.83682309781089],
				[43.20277051822232, 76.8366943517782],
				[43.204403012411305, 76.83570729886074],
				[43.2061924266498, 76.83489190732017],
				[43.20754230065419, 76.83472024594323],
				[43.20876657896642, 76.83420526181239],
				[43.20989666005799, 76.83313237820644],
				[43.21080698782405, 76.83210240994471],
				[43.21259621286309, 76.83025705014246],
				[43.214322607961094, 76.82824002896326],
				[43.217849136213346, 76.82622180036302],
				[43.21985785336558, 76.8248485093474],
				[43.22324741243171, 76.822616911447],
				[43.2263857238256, 76.82158694318527],
				[43.226009135049665, 76.82025656751391],
				[43.22786067397079, 76.81746707013839],
				[43.22939834968125, 76.81523547223804],
				[43.23040252497561, 76.81407675794358],
				[43.2316577206624, 76.81330428174732],
				[43.234849034257486, 76.81135088421338],
				[43.2354765892402, 76.8119516990327],
				[43.238269129987, 76.81019216991892],
				[43.23995263971728, 76.81386652495047]
             ]
         ],
         // Defining properties of the geo object.
         {
             // The contents of the balloon.
             balloonContent: "Ауэзовский район"
         }, {
             /**
              * Describing the geo object options.
              * Fill color.
              */
			  fillColor: '#FCF3EE',
             //fillImageHref: 'images/lake.png',
             // Type of background fill.
             // Hiding the stroke.
             stroke: true,
			 strokeColor:"ff0000",
			 strokeWidth:5,
			 fillOpacity:0.4
         }
     );

    
    //// Adding the polygon to the map.
    myMap.geoObjects.add(myPolygon);

	var data = {
    "type": "FeatureCollection",
   "features": [
    {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [43.217159, 76.867971]}, "properties": {"balloonContent": "Мкр. – 10 д. 23", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №1", "iconContent": "1"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [43.213704, 76.861318]}, "properties": {"balloonContent": "Мкр. -9, д-16", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №5", "iconContent": "5"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [43.232209, 76.862793]}, "properties": {"balloonContent": "Мкр.-5 ул Куанышбаева 49 а", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №6", "iconContent": "6"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [43.221668, 76.864080]}, "properties": {"balloonContent": "Мкр.-12 д.-18", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№9", "iconContent": "9"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [43.221071, 76.875392]}, "properties": {"balloonContent": "Мкр -11 д.36", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №13", "iconContent": "13"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [43.229872, 76.862344]}, "properties": {"balloonContent": "Мкр.-5, д-8 Б", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №27", "iconContent": "27"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 7, "geometry": {"type": "Point", "coordinates": [43.237243, 76.833197]}, "properties": {"balloonContent": "Мкр. Аксай -2, д-31", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№42", "iconContent": "42"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 8, "geometry": {"type": "Point", "coordinates": [43.214831, 76.878285]}, "properties": {"balloonContent": "Ул.Сулейменова 16", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№72", "iconContent": "72"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 9, "geometry": {"type": "Point", "coordinates": [43.220048, 76.859146]}, "properties": {"balloonContent": "Мкр.-6, д -63", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №86", "iconContent": "86"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 10, "geometry": {"type": "Point", "coordinates": [43.231289, 76.850378]}, "properties": {"balloonContent": " Мкр. -1, д.-76 а", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№97", "iconContent": "97"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 11, "geometry": {"type": "Point", "coordinates": [43.233410, 76.857667]}, "properties": {"balloonContent": "Мкр-2, д-59 а", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№104", "iconContent": "104"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": [43.229458, 76.851120]}, "properties": {"balloonContent": "Мкр. -1, д-37б", "clusterCaption": "Еще одна метка", "hintContent": "Гимназия№111", "iconContent": "111"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 13, "geometry": {"type": "Point", "coordinates": [43.221780, 76.859692]}, "properties": {"balloonContent": "Мкр.-6, д.-51", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №113", "iconContent": "113"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 14, "geometry": {"type": "Point", "coordinates": [43.225518, 76.868668]}, "properties": {"balloonContent": "Мкр. -8, д-46", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№116", "iconContent": "116"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 15, "geometry": {"type": "Point", "coordinates": [43.223105, 76.842734]}, "properties": {"balloonContent": "Мкр. Жетысу-2, д-2", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№117", "iconContent": "117"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 16, "geometry": {"type": "Point", "coordinates": [43.226915, 76.868311]}, "properties": {"balloonContent": "Мкр.-8, д - 45", "clusterCaption": "Еще одна метка", "hintContent": "Школа лицей№119", "iconContent": "119"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 17, "geometry": {"type": "Point", "coordinates": [43.234669, 76.836497]}, "properties": {"balloonContent": "Мкр.Аксай- 2 д.-69 а", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа №121", "iconContent": "121"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 18, "geometry": {"type": "Point", "coordinates": [43.226392, 76.851792]}, "properties": {"balloonContent": "Мкр.-3, д-52", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №122", "iconContent": "122"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 19, "geometry": {"type": "Point", "coordinates": [43.234092, 76.827915]}, "properties": {"balloonContent": "Мкр.Аксай – 3 а, д-54", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №123", "iconContent": "123"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 20, "geometry": {"type": "Point", "coordinates": [43.227698, 76.841153]}, "properties": {"balloonContent": "Мкр. Аксай-4, д-66", "clusterCaption": "Еще одна метка", "hintContent": "Специализированный лицей  №126", "iconContent": "126"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 21, "geometry": {"type": "Point", "coordinates": [43.210575, 76.874728]}, "properties": {"balloonContent": "Мкр. Таугуль, Токтабаева,64", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№127", "iconContent": "127"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 22, "geometry": {"type": "Point", "coordinates": [43.249905, 76.858040]}, "properties": {"balloonContent": "Мкр. Тастак – 1, д.- 26 а, ул.Фурката", "clusterCaption": "Еще одна метка", "hintContent": "Гимназия№130", "iconContent": "130"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 23, "geometry": {"type": "Point", "coordinates": [43.229284, 76.838794]}, "properties": {"balloonContent": "Мкр. Аксай -4,д-107", "clusterCaption": "Еще одна метка", "hintContent": "Гимназия№132", "iconContent": "132"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 24, "geometry": {"type": "Point", "coordinates": [43.240848, 76.831095]}, "properties": {"balloonContent": "Мкр. Аксай-1, д.-26", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№133", "iconContent": "133"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 25, "geometry": {"type": "Point", "coordinates": [43.209116, 76.879926]}, "properties": {"balloonContent": "Мкр.Таугуль, ул. Шарипанова 14", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №139", "iconContent": "139"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 26, "geometry": {"type": "Point", "coordinates": [43.224322, 76.840420]}, "properties": {"balloonContent": "Жетысу-2, д-86", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№141", "iconContent": "141"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 27, "geometry": {"type": "Point", "coordinates": [43.220968, 76.836485]}, "properties": {"balloonContent": "Мкр.Достык ул.Садвакасова,27", "clusterCaption": "Еще одна метка", "hintContent": "Школа гимназия №153", "iconContent": "153"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 28, "geometry": {"type": "Point", "coordinates": [43.220252, 76.836635]}, "properties": {"balloonContent": "Мкр. Достык, ул.Садвакасова 29", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№155", "iconContent": "155"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 29, "geometry": {"type": "Point", "coordinates": [43.201703, 76.841576]}, "properties": {"balloonContent": "Мкр. Мамыр ул.Степная 8", "clusterCaption": "Еще одна метка", "hintContent": "Общеобразовательня школа№158", "iconContent": "158"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 30, "geometry": {"type": "Point", "coordinates": [43.211941, 76.846643]}, "properties": {"balloonContent": "Мамыр – 1, д-21", "clusterCaption": "Еще одна метка", "hintContent": "Школа лицей№173", "iconContent": "173"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 31, "geometry": {"type": "Point", "coordinates": [43.199814, 76.855484]}, "properties": {"balloonContent": "Мкр. Таугуль – ул. Шаймердинова д.21", "clusterCaption": "Еще одна метка", "hintContent": "Гимназия    №175", "iconContent": "175"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 32, "geometry": {"type": "Point", "coordinates": [43.235125, 76.822364]}, "properties": {"balloonContent": "Мкр.Аксай 3 б", "clusterCaption": "Еще одна метка", "hintContent": "БИЛ", "iconContent": "БИЛ"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},
{"type": "Feature", "id": 33, "geometry": {"type": "Point", "coordinates": [43.213269, 76.847701]}, "properties": {"balloonContent": "мкр «Мамыр-1»", "clusterCaption": "Еще одна метка", "hintContent": "Гимназия 202", "iconContent": "202"}, "options": {"iconColor": "#ff0000","preset": "islands#redIcon"}},


{"type": "Feature", "id": 34, "geometry": {"type": "Point", "coordinates": [43.219894, 76.864631]}, "properties": {"balloonContent": "12-й микрорайон, 4а", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 23»", "iconContent": "23"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 35, "geometry": {"type": "Point", "coordinates": [43.235114, 76.860838]}, "properties": {"balloonContent": "2-й микрорайон, 57", "clusterCaption": "Еще одна метка", "hintContent": "КГУ Коррекционный ясли-сад № 24 для детей с тяжелыми нарушениями речи", "iconContent": "24"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 36, "geometry": {"type": "Point", "coordinates": [43.232087, 76.849529]}, "properties": {"balloonContent": "1-й микрорайон, 64 А", "clusterCaption": "Еще одна метка", "hintContent": "Санаторный ясли-сад № 25", "iconContent": "25"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 37, "geometry": {"type": "Point", "coordinates": [43.247533, 76.855562]}, "properties": {"balloonContent": "Тастак-1, дом 9а", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад№27»", "iconContent": "27"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 38, "geometry": {"type": "Point", "coordinates": [43.242196, 76.835968]}, "properties": {"balloonContent": "Аксай 1-й микрорайон, 9", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад №28»", "iconContent": "28"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 39, "geometry": {"type": "Point", "coordinates": [43.229499, 76.849439]}, "properties": {"balloonContent": "1-й микрорайон, 72", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 29»", "iconContent": "29"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 40, "geometry": {"type": "Point", "coordinates": [43.222919, 76.852340]}, "properties": {"balloonContent": "3-й микрорайон, 32 А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 33»", "iconContent": "33"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 41, "geometry": {"type": "Point", "coordinates": [43.225727, 76.833787]}, "properties": {"balloonContent": "Ақсай 5-й микрорайон, 22", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 34»", "iconContent": "34"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 42, "geometry": {"type": "Point", "coordinates": [43.219939, 76.855530]}, "properties": {"balloonContent": "6-й микрорайон, 8а", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 35»", "iconContent": "35"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 43, "geometry": {"type": "Point", "coordinates": [43.224971, 76.862706]}, "properties": {"balloonContent": "7-й микрорайон, 26", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 36»", "iconContent": "36"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 44, "geometry": {"type": "Point", "coordinates": [43.226113, 76.867488]}, "properties": {"balloonContent": "8-й микрорайон, 4", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 39»", "iconContent": "39"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 45, "geometry": {"type": "Point", "coordinates": [43.215185, 76.863029]}, "properties": {"balloonContent": "9-й микрорайон, 38", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 42»", "iconContent": "42"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 46, "geometry": {"type": "Point", "coordinates": [43.214096, 76.866524]}, "properties": {"balloonContent": "ул. Береговой, 45", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 44»", "iconContent": "44"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 47, "geometry": {"type": "Point", "coordinates": [43.221589, 76.873814]}, "properties": {"balloonContent": "11-й микрорайон, 34А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 46»", "iconContent": "46"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 48, "geometry": {"type": "Point", "coordinates": [43.208562, 76.871645]}, "properties": {"balloonContent": "ул. Щепкин, 73", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 47»", "iconContent": "47"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 49, "geometry": {"type": "Point", "coordinates": [43.217715, 76.860924]}, "properties": {"balloonContent": "мкр10а, ул. Қойшыманов,  4 А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 48»", "iconContent": "48"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 50, "geometry": {"type": "Point", "coordinates": [43.225276, 76.852555]}, "properties": {"balloonContent": "3-й микрорайон, 37 Б", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 49»", "iconContent": "49"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 51, "geometry": {"type": "Point", "coordinates": [43.236505, 76.835552]}, "properties": {"balloonContent": "Ақсай 2-й, микрорайон, 54А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 50»", "iconContent": "50"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 52, "geometry": {"type": "Point", "coordinates": [43.238297, 76.837451]}, "properties": {"balloonContent": "Ақсай 2-й микрорайшн, 51", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 52»", "iconContent": "52"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 53, "geometry": {"type": "Point", "coordinates": [43.209659, 76.874365]}, "properties": {"balloonContent": "ул.Тоқтабаева, 25", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 53»", "iconContent": "53"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 54, "geometry": {"type": "Point", "coordinates": [43.212444, 76.872280]}, "properties": {"balloonContent": "Таугуль микрорайон, 54", "clusterCaption": "Еще одна метка", "hintContent": "КГУ «Коррекционный ясли-сад № 54 для детей с тяжелыми нарушениями речи»", "iconContent": "54"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 55, "geometry": {"type": "Point", "coordinates": [43.211981, 76.872883]}, "properties": {"balloonContent": "Таугуль микрорайон,", "clusterCaption": "Еще одна метка", "hintContent": "Ясли-сад № 55", "iconContent": "55"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 56, "geometry": {"type": "Point", "coordinates": [43.233119, 76.839013]}, "properties": {"balloonContent": "Ақсай 4-й микрорайон,ул.Маречек, 8 А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 56»", "iconContent": "56"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 57, "geometry": {"type": "Point", "coordinates": [43.227307, 76.839476]}, "properties": {"balloonContent": "Ақсай 4-й микрорайон, 51А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 57»", "iconContent": "57"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 58, "geometry": {"type": "Point", "coordinates": [43.213807, 76.879550]}, "properties": {"balloonContent": "Таугуль микрорайон, 39 дом", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 58»", "iconContent": "58"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 59, "geometry": {"type": "Point", "coordinates": [43.223492, 76.839460]}, "properties": {"balloonContent": "Жетісу 1-й микрорайон,13-А", "clusterCaption": "Еще одна метка", "hintContent": "ГКПП «Ясли-сад № 60»", "iconContent": "60"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 60, "geometry": {"type": "Point", "coordinates": [43.236633, 76.826177]}, "properties": {"balloonContent": "Ақсай 3-й микрорайон, 72 дом", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 62»", "iconContent": "62"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 61, "geometry": {"type": "Point", "coordinates": [43.248354, 76.851780]}, "properties": {"balloonContent": "Тастак 1-й микрорайон , 7А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 64»", "iconContent": "64"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 62, "geometry": {"type": "Point", "coordinates": [43.235664, 76.826569]}, "properties": {"balloonContent": "Аксай 3-й микрорайон, 71", "clusterCaption": "Еще одна метка", "hintContent": "Коррекционный ясли-сад № 66", "iconContent": "66"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 63, "geometry": {"type": "Point", "coordinates": [43.242178, 76.834780]}, "properties": {"balloonContent": "Ақсайт 1-й микрорайон, 10 А", "clusterCaption": "Еще одна метка", "hintContent": "Ясли-сад № 111", "iconContent": "111"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 64, "geometry": {"type": "Point", "coordinates": [43.228333, 76.838962]}, "properties": {"balloonContent": "Ақсай 4-й микрорайон, 51В", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад №100»«Гаухар»", "iconContent": "100"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 65, "geometry": {"type": "Point", "coordinates": [43.235932, 76.838681]}, "properties": {"balloonContent": "Ақсай 2-й микрорайон, 74", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 129»", "iconContent": "129"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 66, "geometry": {"type": "Point", "coordinates": [43.213887, 76.862605]}, "properties": {"balloonContent": "9-й микрорайон, 16/1", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад №134»", "iconContent": "134"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 67, "geometry": {"type": "Point", "coordinates": [43.232855, 76.862566]}, "properties": {"balloonContent": "5-й микрорайон, 49/1", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад №135»", "iconContent": "135"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 68, "geometry": {"type": "Point", "coordinates": [43.222344, 76.835419]}, "properties": {"balloonContent": "Микрорайон «Достық», ул.Сәдуақасов, 27/1", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад №136»", "iconContent": "136"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 69, "geometry": {"type": "Point", "coordinates": [43.223170, 76.865732]}, "properties": {"balloonContent": "7-й микрорайон, 40", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад  №138»", "iconContent": "138"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 70, "geometry": {"type": "Point", "coordinates": [43.221755, 76.858505]}, "properties": {"balloonContent": "12-й микрорайон, 51", "clusterCaption": "Еще одна метка", "hintContent": "КГКП «Ясли-сад  №143»", "iconContent": "143"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 71, "geometry": {"type": "Point", "coordinates": [43.235610, 76.836588]}, "properties": {"balloonContent": "Ақсай 2-й микрорайон,  69/1", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад  № 144»", "iconContent": "144"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 72, "geometry": {"type": "Point", "coordinates": [43.220396, 76.875352]}, "properties": {"balloonContent": "11-й микрорайон, 36/1", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад №146»", "iconContent": "146"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 73, "geometry": {"type": "Point", "coordinates": [43.232307, 76.864568]}, "properties": {"balloonContent": "5-й микрорайон, 37/1", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 154»", "iconContent": "154"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 74, "geometry": {"type": "Point", "coordinates": [43.238956, 76.818013]}, "properties": {"balloonContent": "Микрорайон Баянауыл, 19", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 158»", "iconContent": "158"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 75, "geometry": {"type": "Point", "coordinates": [43.213661, 76.850139]}, "properties": {"balloonContent": "Микрорайон мамыр 4-й, 301/А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 159»", "iconContent": "159"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 76, "geometry": {"type": "Point", "coordinates": [43.221943, 76.843079]}, "properties": {"balloonContent": "Микрорайон Жетісу 2-й,  1А", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 160»", "iconContent": "160"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 77, "geometry": {"type": "Point", "coordinates": [43.231734, 76.865586]}, "properties": {"balloonContent": "5-й микрорайон, 46", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 174»", "iconContent": "174"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 78, "geometry": {"type": "Point", "coordinates": [43.219489, 76.860660]}, "properties": {"balloonContent": "12-й микрорайон, 11/1", "clusterCaption": "Еще одна метка", "hintContent": "ГККП «Ясли-сад № 178»", "iconContent": "178"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 79, "geometry": {"type": "Point", "coordinates": [43.212831, 76.846369]}, "properties": {"balloonContent": "Микрорайон мамыр 1-й, 29/16", "clusterCaption": "Еще одна метка", "hintContent": "ГГКП «Ясли-сад № 190»", "iconContent": "190"}, "options": {"preset": "islands#blueIcon"}},
{"type": "Feature", "id": 80, "geometry": {"type": "Point", "coordinates": [43.226667, 76.845204]}, "properties": {"balloonContent": "Ауэзовский район", "clusterCaption": "Ауэзовский район", "hintContent": "Ауэзовский район", "iconCaption": "Ауэзовский район"}, "options": {"iconColor": "#ff0000","preset": "islands#redCircleDotIcon"}}
]
};
objectManager.add(data);


}