type Arr = {
  question: string;
  answers: {
    title: string;
    answer: string;
    answers: string[];
  }[];
}[];

const toLearn: Arr = [
  {
    question:
      "3. Charakterystyki diod i tranzystorów, omów krótko tranzystor bipolarny oraz MOSFET",
    answers: [
      {
        title: "Dioda",
        answer:
          "Element półprzewodników przewodzący prąd elektryczny głownie w jednym kierunku. Zaczyna przewodzić prąd powyżej pewnego napięcia progowego - 0,7V",
        answers: [],
      },
      {
        title: "Tranzywstor",
        answer: "To element półrewodnika służący do wzmacniania prądów",
        answers: [],
      },
      {
        title: "Tranzywstor Bipolarny",
        answer:
          "Składa się z kolektora, bazy oraz emitera. Jego działanie polega na kontrolowaniu natężenia prądu przepływającego z emitera do kolektora za pomocą bazy",
        answers: [],
      },
      {
        title: "MOSFET",
        answer:
          "MOSFET to typ tranzystora polowego wykorzytujący pole elektryczne do sterowania kształtem i przewodnictwem kanału przewodzenia",
        answers: [],
      },
    ],
  },
  {
    question: "4. Układy wzmacniaczy (rodzaje, parametry).",
    answers: [
      {
        title: "Wzmacniacz",
        answer:
          "Na za zadanie wzmocnić amplitudę sygnału kosztem pobranej energii ze źródła ",
        answers: [],
      },
      {
        title: "Rodzaje",
        answer: "",
        answers: [
          "wzmacniacz mikrofonowy",
          "wzmacniacz głośnikowy",
          "wzmacniacz antenowy",
          "wzmacniacz gramofonowy",
          "wzmacniacz słuchawkowy",
        ],
      },
      {
        title: "Parametry",
        answer: "",
        answers: [
          "współczynnik wzmocnienia prądowego i napięciowego",
          "rezystancja wejściowa - określa obciążenie źródła sygnału",
          "razytancja wyjściowa - określa starty energii",
          "pasmo prznoszonych częstotliwości, stosunek sygnału do szumu",
        ],
      },
    ],
  },
  {
    question: "6. Układy zasilające (prostowniki i stabilizatory).",
    answers: [
      {
        title: "Prostownik",
        answer: "Zamienia prąd zmienny na prąd stały.",
        answers: [
          "Jednopołówkowe - Najprostszy prostownik wykorzystuje pojedynczą diodę prostowniczą ",
          "Dwupołówkowe - Umożliwiają wykorzystanie mocy źródła napięcia przemiennego przez cały okres",
        ],
      },
      {
        title: "Stabilizator",
        answer:
          "Utrzymuje stałe napięcie wyjściowe niezależenie od zmian obciążenia. Istnieją stabilizatory napięcia stałego oraz napięcia przemiennego.",
        answers: [
          "Stabilizatory Liniowe - Stosuje się je do regulacji napięcia w układach, gdzie ważna jest niska zawartość zakłóceń i wysoka precyzja",
          "Stabilizatory Impulsowe - Działają na zasadzie okresowego włączania i wyłączania elementu kluczującego (jak tranzystor), kontrolując tym samym energię przekazywaną do obciążenia",
        ],
      },
    ],
  },
  {
    question: "7. Przerzutniki: astabilne, monostabilne i bistabilne.",
    answers: [
      {
        title: "Przerzutniki",
        answer:
          "To układ elektorniczny którego sygnał na wyjściu może zależeć od stanu na jego wejściu lub od jego stanu wewnętrzenego. Stosuje się je do przechowywania małych ilości danych do których potrzebujemy stałego dostępu.",
        answers: [],
      },
      {
        title: "Przerzutniki astabilne",
        answer: "Nie ma stanu stabilnego",
        answers: [
          "Generują one na wyjściu przebieg prostokątny o określonej częstotliwości, która zależy od stałych czasowych układu.",
        ],
      },
      {
        title: "Przerzutniki monostabilne",
        answer:
          "Przerzutniki monostabilne posiadają jeden stabilny stan. Po otrzymaniu sygnału wyzwalającego przechodzą w stan niestabilny na określony czas, po czym wracają do stanu stabilnego",
        answers: [],
      },
      {
        title: "Przerzutniki bistabilne",
        answer: "przemiennie przyjmowany jeden z dwóch stanów stabilnych",
        answers: [
          "grupa 4 lub 8 połączonych ze sobą przerzutników bistabilnych może tworzyć rejestr zdolnyu do zapamiętania bajta informacji",
        ],
      },
    ],
  },
  {
    question: "13. Prąd elektryczny w cieczach. Prawa Faradaya.",
    answers: [
      {
        title: "Prąd elektryczny w cieczach",
        answer:
          "Może płynąć dzięki swobodnym ładunkom, którymi są jony. Ciecz przwodząca prąd nazywamy elektrolitem. Prąd elektryczny w cieczach otoczony jest cząsteczkami wody, które znacznie utrudniają ruch jonów materii, więc w elektrolicie możliwe jest wytworzenie prądu o małym napięciu.",
        answers: [],
      },
      {
        title: "Elektroliza",
        answer:
          "Jest zjawiskiem związanym z przepływem prądu elektrycznego przez elektrolit, któremu zazwyczaj towarzyszą wydzielanie się różnego rodzaju substancje na elektrodach oraz wtórne reakcje chemiczne.",
        answers: [],
      },
      {
        title: "1. Prawo Faradaya",
        answer:
          "Pozwala wyznaczyć masę substancji, która wydziela się podczas elektrolizy na jednej z elektrod.",
        answers: [
          "Masa substancji jest wprost proporcjonalna do ładunku elektrycznego, który przepływa przez elektrolit",
        ],
      },
      {
        title: "2. Prawo Faradaya",
        answer:
          "Stosunek mas substancji wydzielonych na elektrodach podczas przepływu jednakowych ładunków elektrycznych jest równy stosunkowi ich równoważników elektrochemicznych",
        answers: [],
      },
    ],
  },
  {
    question: "14. Jakie znasz metody pomiaru wartości R, L, C.",
    answers: [
      {
        title: "Rezystancja",
        answer: "Multimetr analogowy/cyfrowy",
        answers: [
          "Metoda techniczna - pomiar napięcia i natężenia prądu w obwodzie, a nastepnie doliczenie rezystancji według prawa Ohma",
          "Metoda bezpośredniego odczytu - wykorzystanie omomierza i mostka techncznego do pomiaru",
          "Metoda mostkowa - użycie mostka Wheatsone'a do pomiaru rezystancji",
        ],
      },
      {
        title: "Indukcyjność",
        answer: "Mostek Maxwell'a. Metoda amperometryczna",
        answers: [
          "Metoda rezonansu - zmiana częstotliwości zasilania obwodu RLC do momentu gdy osiągnie on stan rezonansu",
        ],
      },
      {
        title: "Pojemność",
        answer: "Mostek Pojemnościowy. Metoda prądu stałego",
        answers: [
          "Mostek Pojemnościowy - Porównuje nieznaną pojemność z wzorcową",
          "Metoda Ładowania/Rozładowania - Mierzy czas rozładowania kondensatora do obliczenia pojemności",
          "Metoda z Napięciem Przemiennym - Mierzy napięcie i prąd, aby obliczyć pojemność",
        ],
      },
    ],
  },
  {
    question:
      "16. Pole magnetyczne prądu stałego, indukcja magnetyczna, siła Lorentza.",
    answers: [
      {
        title: "Pole magnetyczne prądu stałego",
        answer:
          "Pole magnetyczne wokół prądu stałego to zamknięte linie pola zgodne z regułą prawej ręki",
        answers: [
          "Jest wywoływane przez ładunki elektryczne znajdujące się w ruchu jednostajnym",
          "Przepływ prądu wytwarza pole magnetyczne.",
        ],
      },
      {
        title: "Siła Lorentza",
        answer:
          "To siła działająca na cząstekę obdarzoną ładunkiem elektrycznym poruszającą w polu magnetycznym",
        answers: [],
      },
      {
        title: "Indukcja megnetyczna",
        answer:
          "Indukcja magnetyczna to sposób mierzenia siły i kierunku pola magnetycznego. Jej wartość, wyrażona w teslach (T), mówi nam, jak silne jest pole magnetyczne w danym miejscu",
        answers: [],
      },
    ],
  },
  {
    question:
      "18. Indukcja elektromagnetyczna , fale elektromagnetyczne i ich podstawowe właściwości.",
    answers: [
      {
        title: "Indukcja elektromagnetyczna",
        answer:
          "To zjawisko powstawania siły elektromotorycznej w przewodniku na skutek zmian strumienia pola magnetycznego. Zmiana ta może być spowodowana zmianami pola magnetycznego lub względnym ruchem przewodnika i źródła pola magnetycznego",
        answers: [
          "Powstanie napięcia w zwojnicy podczas zmiany pola elektromagnetycznego nazywamy indukcją elektromagnetyczną",
        ],
      },
      {
        title: "Fala elektromagnetyczne",
        answer:
          "to fale energii, które rozchodzą się przez przestrzeń i mogą mieć różne długości, od fal radiowych po promienie gamma",
        answers: [
          "fale radiowe",
          "fale mikrfali",
          "podczerwień",
          "ultrafiolet",
          "promieniowanie rentgenowskie",
        ],
      },
      {
        title: "Właściwości fal",
        answer: "",
        answers: [
          "rozchodzą się w próżni z prędkością światła",
          "bue oitrzebują ośrodka materialnego, aby rozchodzić się w  przestrzeni",
          "Ulegają odbiciu, załamaniu, ugięciu, interferencji itp.",
        ],
      },
    ],
  },
  {
    question:
      "19. Zjawisko fotoelektryczne, siatka dyfrakcyjna i jej zastosowanie",
    answers: [
      {
        title: "Zjawisko fotoelektryczne",
        answer: "Emisja elektronów z materiału pod wpływem światła",
        answers: [],
      },
      {
        title: "Siatka dyfrakcyjna",
        answer: "",
        answers: [
          "układ otworów służący do rozszczepienia fal świetlnych",
          "Siatka dyfrakcyjna służy do pomiaru długości fali",
          "płytka z naniesionymi ryskami",
        ],
      },
      {
        title: "Zastosowanie ",
        answer: "",
        answers: [
          "do analizowania składu chemicznego poprzez badanie widma światła, ",
          "badania struktury materiałów, ",
          "w telekomunikacji do zarządzania sygnałami świetlnymi, ",
          "w laserach do uzyskiwania czystych kolorów ",
          "w fotografii do tworzenia efektów wizualnych",
        ],
      },
    ],
  },
  {
    question: "26. Metody stabilizacji napięcia.",
    answers: [
      {
        title: "Stabilizacja",
        answer:
          "Stabilizacja napięcia osiągana jest za pomocą stabilizatorów napięcia, diod Zenera, lub układów opartych na wzmacniaczach operacyjnych. Wszystkie te metody mają na celu utrzymanie stałego napięcia na wyjściu, niezależnie od obciążenia układu oraz wahań napięcia, chroniąc tym samym wszelkie dalsze części elektroniki.",
        answers: [
          "Transformatory, które zmieniają wysokość napięcia.",
          "Regulatory, które automatycznie dostosowują prąd, aby był zawsze taki sam.",
          "Stabilizatory z serwomechanizmem, które dostosowują napięcie, korzystając z informacji zwrotnej.",
          "Kondensatory, które pomagają utrzymać napięcie na stałym poziomie, zmniejszając skoki.",
          "Automatyczne Regulatory Napięcia (AVR), które są ważne w miejscach takich jak elektrownie.",
          "UPSy, czyli nieprzerwane źródła zasilania, które zapewniają ciągłe napięcie, ",
        ],
      },
    ],
  },
  {
    question: "27. Podać podstawowe warunki powstawania drgań w generatorach.",
    answers: [
      {
        title: "Generator drgań",
        answer:
          "oscylator, to układ elektryczny, którego celem jest wytworzenie drgań elektrycznych.",
        answers: [],
      },
      {
        title: "Warunki powstawania",
        answer: "",
        answers: [
          "Warunek amplitudy: Sygnał na wejściu wzmacniacza podawany z układu sprzężenia zwrotnego musi być na tyle duży, aby na wyjściu wzmacniacza otrzymać sygnał o takim samym lub większym poziomie. Oznacza to, tłumienie układu sprzężenia zwrotnego nie może być większe niż wzmocnienie wzmacniacza.",
          "Warunek fazy: Chwila maksimum sygnału na wejściu wzmacniacza, po przejściu przez wzmacniacz i układ sprzężenia zwrotnego, musi wypadać zawsze w tym samym momencie.",
        ],
      },
    ],
  },
  {
    question: "28. Modulacja i demodulacja AM, FM, PM, ASK, FSK, PSK.",
    answers: [
      {
        title: "Modulacja i demodulacja",
        answer:
          "Procesy używane do przesyłania informacji za pomocą fali nośnej. Demodulacja pozwala na odzyskanie oryginalanego sygnagłu.",
        answers: [
          "modulacja amplitudy: AM, ASK",
          "Modulacja częstotliwości: FM, FSK",
          "Modulacja Fazy: PM, PSK",
          "Technika modulacji sygnałów: AM FM PM",
          "Forma modulacji cyfrowej: ASK FSK PSK",
        ],
      },
      {
        title: "AM i ASK",
        answer: "",
        answers: [
          "AM - modulacja utrzymuje stałą częstotliwość i fazę, a amplitudę skaluje proporcjonalnie do sygnału audio",
          "ASK - kluczowanie amplitudy, dane są reprezentowane przez zmieniającą się amplitudę fali nośnej",
        ],
      },
      {
        title: "FM i FSK",
        answer: "",
        answers: [
          "FM - modulacja utrzymuje stałą amplitudę i zmienia częstotliwość fali w czasie porporcjonalnie do sygnału audio",
          "FSK - kluczowanie częstotliwości, dane są reprezentowane przez zmieniającą się częstotliwość fali nośnej",
        ],
      },
      {
        title: "PM i PSK",
        answer: "",
        answers: [
          "PM - modulacja utrzymuje stałą amplitudę ale przesuwa kształt fali o fazę",
          "PSK - kluczowanie fazy, dane są reprezentowane przez zmieniającą się fazę fali nośnej",
        ],
      },
    ],
  },
  {
    question: "29. Układy cyfrowe średniej skali integracji MSI.",
    answers: [
      {
        title: "Układ cyfrowy",
        answer:
          "Rodzaj ukłądów elektronicznych gdzie sygnały napięciowe najczęściej przyjmują dwa poziomy i są określane przez cyfry 0 i 1",
        answers: [],
      },
      {
        title: "Układ cyfrowe MSI",
        answer:
          "To układy scalone zawierające od 10 do 100 bramek logicznyc. Są częścią hierarchi skali integracji między układmi małej skali SSI do 10 bramek, a układami dużej skali LSI od 100 do 1000 bramek",
        answers: [],
      },
      {
        title: "Wykorzystanie ",
        answer:
          "Układy MSI wykorzystuje się w systemach cyfrowych gdzie potrzebne są bardziej złożone funkcje np. liczniki rejestry dekodery. Ponieważ zawierają więcej bramek niż układy SSI a mniej niż LSI, MSI oferują dobrą równowagę między złożonością a kosztem co czyni je idealnym wyborem do wielu zastosowań",
        answers: [],
      },
    ],
  },
];

const newArrr: Arr = [
  {
    question: "1. Prawo Ohma i Kirchhoffa, pomiary wielkości elektrycznych.",
    answers: [
      {
        title: "Prawo Ohma",
        answer:
          "Napięcie między dwoma punktami przewodnika jest proporcjonalne do natężenia prądu płynącego przez przewodnik",
        answers: [],
      },
      {
        title: "1 Prawo Kirchoffa",
        answer:
          "Suma prądów wchodzących do węzła jest równa sumie prądów wychodzących",
        answers: [],
      },
      {
        title: "2 Prawo Kirchoffa",
        answer:
          "suma spadu napięcia jest równa sumie źródeł napięcia w zamkniętym obwodzie",
        answers: [],
      },
      {
        title: "Pomiary wielkości elektrycznych",
        answer: "",
        answers: [
          "Napięcie - Voltomierz",
          "Natężenie - Amperomierz",
          "Rezystancja - Omomierz",
        ],
      },
    ],
  },
  {
    question: "2. Oscyloskop i jego możliwości pomiarowe",
    answers: [
      {
        title: "Oscyloskop",
        answer: "To przyrząd do wizualizcji zmian napięcia w funkcji czasu.",
        answers: [],
      },
      {
        title: "Możliwości pomiarowe",
        answer:
          "Pozwala analizować sygnały elektryczne, częstotliwości, amplitudę i kształt fali",
        answers: [],
      },
    ],
  },
  {
    question:
      "3. Charakterystyki diod i tranzystorów, omów krótko tranzystor bipolarny oraz MOSFET",
    answers: [
      {
        title: "Dioda",
        answer:
          "Element półprzewodników przewodzący prąd elektryczny głownie w jednym kierunku. Zaczyna przewodzić prąd powyżej pewnego napięcia progowego - 0,7V",
        answers: [],
      },
      {
        title: "Tranzywstor",
        answer: "To element półrewodnika służący do wzmacniania prądów",
        answers: [],
      },
      {
        title: "Tranzywstor Bipolarny",
        answer:
          "Składa się z kolektora, bazy oraz emitera. Jego działanie polega na kontrolowaniu natężenia prądu przepływającego z emitera do kolektora za pomocą bazy",
        answers: [],
      },
      {
        title: "MOSFET",
        answer:
          "MOSFET to typ tranzystora polowego wykorzytujący pole elektryczne do sterowania kształtem i przewodnictwem kanału przewodzenia",
        answers: [],
      },
    ],
  },
  {
    question: "4. Układy wzmacniaczy (rodzaje, parametry).",
    answers: [
      {
        title: "Wzmacniacz",
        answer:
          "Na za zadanie wzmocnić amplitudę sygnału kosztem pobranej energii ze źródła ",
        answers: [],
      },
      {
        title: "Rodzaje",
        answer: "",
        answers: [
          "wzmacniacz mikrofonowy",
          "wzmacniacz głośnikowy",
          "wzmacniacz antenowy",
          "wzmacniacz gramofonowy",
          "wzmacniacz słuchawkowy",
        ],
      },
      {
        title: "Parametry",
        answer: "",
        answers: [
          "współczynnik wzmocnienia prądowego i napięciowego",
          "rezystancja wejściowa - określa obciążenie źródła sygnału",
          "razytancja wyjściowa - określa starty energii",
          "pasmo prznoszonych częstotliwości, stosunek sygnału do szumu",
        ],
      },
    ],
  },
  {
    question: "5. Filtry pasywne i aktywne",
    answers: [
      {
        title: "Filtry pasywne",
        answer:
          "Wykorzystują kondensatory, rezystory, cewki. Przepuszcają lub tłumią określone częstotliwości",
        answers: ["korektor tonów w prostym głośniku"],
      },
      {
        title: "Filtry aktywne",
        answer:
          "Zawierają elementy RLC i elementy dostarczające energię do filtrowanego układu. Takie jak wzmacniacze czy układy liniowe",
        answers: ["wzmacniacz antenowy"],
      },
    ],
  },
  {
    question: "6. Układy zasilające (prostowniki i stabilizatory).",
    answers: [
      {
        title: "Prostownik",
        answer: "Zamienia prąd zmienny na prąd stały.",
        answers: [
          "Jednopołówkowe - Najprostszy prostownik wykorzystuje pojedynczą diodę prostowniczą ",
          "Dwupołówkowe - Umożliwiają wykorzystanie mocy źródła napięcia przemiennego przez cały okres",
        ],
      },
      {
        title: "Stabilizator",
        answer:
          "Utrzymuje stałe napięcie wyjściowe niezależenie od zmian obciążenia. Istnieją stabilizatory napięcia stałego oraz napięcia przemiennego.",
        answers: [
          "Stabilizatory Liniowe - Stosuje się je do regulacji napięcia w układach, gdzie ważna jest niska zawartość zakłóceń i wysoka precyzja",
          "Stabilizatory Impulsowe - Działają na zasadzie okresowego włączania i wyłączania elementu kluczującego (jak tranzystor), kontrolując tym samym energię przekazywaną do obciążenia",
        ],
      },
    ],
  },
  {
    question: "7. Przerzutniki: astabilne, monostabilne i bistabilne.",
    answers: [
      {
        title: "Przerzutniki",
        answer:
          "To układ elektorniczny którego sygnał na wyjściu może zależeć od stanu na jego wejściu lub od jego stanu wewnętrzenego. Stosuje się je do przechowywania małych ilości danych do których potrzebujemy stałego dostępu.",
        answers: [],
      },
      {
        title: "Przerzutniki astabilne",
        answer: "Nie ma stanu stabilnego",
        answers: [
          "Generują one na wyjściu przebieg prostokątny o określonej częstotliwości, która zależy od stałych czasowych układu.",
        ],
      },
      {
        title: "Przerzutniki monostabilne",
        answer:
          "Przerzutniki monostabilne posiadają jeden stabilny stan. Po otrzymaniu sygnału wyzwalającego przechodzą w stan niestabilny na określony czas, po czym wracają do stanu stabilnego",
        answers: [],
      },
      {
        title: "Przerzutniki bistabilne",
        answer: "przemiennie przyjmowany jeden z dwóch stanów stabilnych",
        answers: [
          "grupa 4 lub 8 połączonych ze sobą przerzutników bistabilnych może tworzyć rejestr zdolnyu do zapamiętania bajta informacji",
        ],
      },
    ],
  },
  {
    question: "8. Układy kombinacyjne i sekwencyjne, bramki logiczne",
    answers: [
      {
        title: "Układy kombinacyjne",
        answer: "Brak pamięci, wyjście zależy tylko od aktualnego stanu wejść",
        answers: [],
      },
      {
        title: "Układy sekwencyjne",
        answer:
          "Posiada pamięć, wyjście zależy nie tylko od aktualnego stanu wejść ale również od poprzednich stanów układu",
        answers: [],
      },
      {
        title: "Bramki logiczne",
        answer:
          "Układy elektoniczne realizujące podstawowe operacje algebry Boole'a na pojedynczych bitach",
        answers: [
          "AND - wyjście jest wysokie tylko wtedy gdy wszystkie wejścia sa wysokie",
          "OR - wyjście jest wysokie, jeżeli przynajmniej jedno wejście jest wysokie",
          "NOT - wyjście jest przeciwne do wejścia",
          "NAND - wyjście jest niskie tylko wtedy, gdy wszystkie wejścia są wysokie",
          "NOR - wyjście jest wysokie tylko wtedy, gdy wszystkie wejścia są niskie",
          "XOR - wyjście jest wysokie, gdy tylko jedno wejście jest wysokie",
        ],
      },
    ],
  },
  {
    question:
      "9. Podać przykłady ruchu postępowego i obrotowego oraz ruchów złożonych (podział).",
    answers: [
      {
        title: "Ruch postępowy",
        answer:
          "Punkt materialny porusza się po określonej ścieżce - jadący samochód po prostej drodze",
        answers: [],
      },
      {
        title: "Ruch obrotowy",
        answer:
          "Wszystkie punkty materialne bryły poruszają sie po okręgu i znajdują się na osi obrotu - kręcoące się koło samochodu",
        answers: [],
      },
      {
        title: "Ruch złożony",
        answer:
          "Połączenie dwóch poprzednich - kręcące się koło samochodzu jadące po prostej dordzę",
        answers: [],
      },
    ],
  },
  {
    question: "10. Zasady dynamiki Newtona.",
    answers: [
      {
        title: "1 zasada Newstona",
        answer:
          "Ciało jest w spoczynku lub w ruchu jednostajnie prostoliniowym jezeli na to ciało nie działa żadna siła lub siły się równoważą",
        answers: [],
      },
      {
        title: "2 zasada Newstona",
        answer:
          "Jeżeli na ciało działa siła wypadkowa to porusza się ruchem jednostajnie przyśpieszonym wprost proporcjonalnie do siły, a odwrotnie proporcjonalnie do masy",
        answers: [],
      },
      {
        title: "3 zasada Newstona",
        answer:
          "Siła z jaką ciało A oddziałowuje na ciało B jest równa sile oddziaływania ciała B na ciało A. Siły te działają w jednym kierunku ale mają przeciwny wektor.",
        answers: [],
      },
    ],
  },
  {
    question:
      "11. Co to jest rezystancja i pojemność elektryczna? Zasady łączenia elementów R oraz C.",
    answers: [
      {
        title: "Rezystancja",
        answer:
          "Rezystancja opisuje stopień oporu, jaki materiał stawia na przepływ prądu. Zależy od długości przekroju i rodzaju materiału.",
        answers: [],
      },
      {
        title: "Pojemność elektryczna",
        answer:
          "Pojemność elektryczna opisuje zdolność kondensatora do magazynowania ładunku elektrycznego. Zależy od geometrii kondensatora i rodzaju dielektryka.",
        answers: [],
      },
      {
        title: "Obwód szeregowy",
        answer:
          "Rezystancje poszególnych elementów sumują się, pojemność całkowita jest równa sumie odwrotności pojemności poszczególnych kondensatorów",
        answers: [],
      },
      {
        title: "Obwód równoległy",
        answer:
          "Pojemność poszczególnych kondensatorów sumują się, Rezystancja całkowita jest równa sumie odwrotności rezystancji poszczególnych rezystorów.",
        answers: [],
      },
    ],
  },
  {
    question: "12. Łączenie ogniw: szeregowe, równoległe i mieszane.",
    answers: [
      {
        title: "szeregowe",
        answer: "",
        answers: [
          "zwiększa napięcie, a prąd pozostaje stały",
          "złączenie ogniw odwrotnymi biegunami",
          "wartości napięcia każdego elemnetu sumują się",
          "rezystancja wewnętrzna wzrośnie",
        ],
      },
      {
        title: "równoległe",
        answer: "",
        answers: [
          "Zwiękasza się pojemność, napięcie jest stałe",
          "akumulator",
          "biegun dodatni do dodatniego",
          "pojemność ogniw się sumuje",
          "rezystancja wewnętrzna będzie mniejsza",
        ],
      },
      {
        title: "mieszane",
        answer:
          "Połączenie dwóch poprzednich, zwiększa się pojemność oraz napięcie",
        answers: [],
      },
    ],
  },
  {
    question: "13. Prąd elektryczny w cieczach. Prawa Faradaya.",
    answers: [
      {
        title: "Prąd elektryczny w cieczach",
        answer:
          "Może płynąć dzięki swobodnym ładunkom, którymi są jony. Ciecz przwodząca prąd nazywamy elektrolitem. Prąd elektryczny w cieczach otoczony jest cząsteczkami wody, które znacznie utrudniają ruch jonów materii, więc w elektrolicie możliwe jest wytworzenie prądu o małym napięciu.",
        answers: [],
      },
      {
        title: "Elektroliza",
        answer:
          "Jest zjawiskiem związanym z przepływem prądu elektrycznego przez elektrolit, któremu zazwyczaj towarzyszą wydzielanie się różnego rodzaju substancje na elektrodach oraz wtórne reakcje chemiczne.",
        answers: [],
      },
      {
        title: "1. Prawo Faradaya",
        answer:
          "Pozwala wyznaczyć masę substancji, która wydziela się podczas elektrolizy na jednej z elektrod.",
        answers: [
          "Masa substancji jest wprost proporcjonalna do ładunku elektrycznego, który przepływa przez elektrolit",
        ],
      },
      {
        title: "2. Prawo Faradaya",
        answer:
          "Stosunek mas substancji wydzielonych na elektrodach podczas przepływu jednakowych ładunków elektrycznych jest równy stosunkowi ich równoważników elektrochemicznych",
        answers: [],
      },
    ],
  },
  {
    question: "14. Jakie znasz metody pomiaru wartości R, L, C.",
    answers: [
      {
        title: "Rezystancja",
        answer: "Multimetr analogowy/cyfrowy",
        answers: [
          "Metoda techniczna - pomiar napięcia i natężenia prądu w obwodzie, a nastepnie doliczenie rezystancji według prawa Ohma",
          "Metoda bezpośredniego odczytu - wykorzystanie omomierza i mostka techncznego do pomiaru",
          "Metoda mostkowa - użycie mostka Wheatsone'a do pomiaru rezystancji",
        ],
      },
      {
        title: "Indukcyjność",
        answer: "Mostek Maxwell'a. Metoda amperometryczna",
        answers: [
          "Metoda rezonansu - zmiana częstotliwości zasilania obwodu RLC do momentu gdy osiągnie on stan rezonansu",
        ],
      },
      {
        title: "Pojemność",
        answer: "Mostek Pojemnościowy. Metoda prądu stałego",
        answers: [
          "Mostek Pojemnościowy - Porównuje nieznaną pojemność z wzorcową",
          "Metoda Ładowania/Rozładowania - Mierzy czas rozładowania kondensatora do obliczenia pojemności",
          "Metoda z Napięciem Przemiennym - Mierzy napięcie i prąd, aby obliczyć pojemność",
        ],
      },
    ],
  },
  {
    question: "15. Plazma (definicja i zastosowania).",
    answers: [
      {
        title: "Plazma",
        answer:
          "To czwarty stan skupienia materii, który powstaje w wyniku  podgrzania gazu do bardzow wysokich temperatur, np. przy pmocy łuku elektrycznego",
        answers: [
          "Cząsteczki tego gazu stają się naładowane elektrycznie i mają bardzo dużą gęstość cieplną, którą możemy umiarkować",
        ],
      },
      {
        title: "Zastosowanie",
        answer: "",
        answers: [
          "obróbka metali (spawanie)",
          "technika świetlna - neonówki kwarcówki, lampy rtęciowe",
          "energetyka jądrowa",
          "badania naukowe",
        ],
      },
    ],
  },
  {
    question:
      "16. Pole magnetyczne prądu stałego, indukcja magnetyczna, siła Lorentza.",
    answers: [
      {
        title: "Pole magnetyczne prądu stałego",
        answer:
          "Pole magnetyczne wokół prądu stałego to zamknięte linie pola zgodne z regułą prawej ręki",
        answers: [
          "Jest wywoływane przez ładunki elektryczne znajdujące się w ruchu jednostajnym",
          "Przepływ prądu wytwarza pole magnetyczne.",
        ],
      },
      {
        title: "Indukcja megnetyczna",
        answer: "indukcja pola magnetycznego",
        answers: [
          "Podstawowa wielkośc wektora opisująca pole magnetyczne.",
          "siła lorentza podzieona przez ładunek elektryczny oraz prędkośc obiektu naładowanego elektrycznie poruszającego się w polu elektrycznym",
          "Jednostka - TESLA",
          "Wartość tesli jest równa sile Lorentza jaka działa na łądunek 1C poruszający się z prędkością 1 metra na sekundę",
        ],
      },
      {
        title: "Siła Lorentza",
        answer:
          "To siła działająca na cząstekę obdarzoną ładunkiem elektrycznym poruszającą w polu magnetycznym",
        answers: [],
      },
    ],
  },
  {
    question: "17. Transformacja napięcia.",
    answers: [
      {
        title: "Transforamcja napięcia",
        answer:
          "To proces w którym napięcie elektryczne jest zwiększone lub zmniejszone. Jest to możliwe dzięki użyciu tranformatora.",
        answers: [
          "Przekształca napięcie z jednego obwodu na napięcie w innej wartości w innym obwodzie.",
          "Pierwotna częstotliwość zostaje zachowana",
          "Transformator składa się ze stalonego rdzenia i uzbrojeń  wykonanych z miedzi i aluminium.",
          "Rdzeń tranzystora przewodzi zmienny strumień pola magnetycznego, które przepływa później przez uzwojenie wtórne.",
          "Zmiana zachodząca w strumieniu pola magnetycznego uzwojeniu wtórnym powoduje indukcję elektromagnetyczną",
        ],
      },
    ],
  },
  {
    question:
      "18. Indukcja elektromagnetyczna , fale elektromagnetyczne i ich podstawowe właściwości.",
    answers: [
      {
        title: "Indukcja elektromagnetyczna",
        answer:
          "To zjawisko powstawania siły elektromotorycznej w przewodniku na skutek zmian strumienia pola magnetycznego. Zmiana ta może być spowodowana zmianami pola magnetycznego lub względnym ruchem przewodnika i źródła pola magnetycznego",
        answers: [
          "Powstanie napięcia w zwojnicy podczas zmiany pola elektromagnetycznego nazywamy indukcją elektromagnetyczną",
        ],
      },
      {
        title: "Fala elektromagnetyczne",
        answer:
          "to fale energii, które rozchodzą się przez przestrzeń i mogą mieć różne długości, od fal radiowych po promienie gamma",
        answers: [
          "fale radiowe",
          "fale mikrfali",
          "podczerwień",
          "ultrafiolet",
          "promieniowanie rentgenowskie",
        ],
      },
      {
        title: "Właściwości fal",
        answer: "",
        answers: [
          "rozchodzą się w próżni z prędkością światła",
          "bue oitrzebują ośrodka materialnego, aby rozchodzić się w  przestrzeni",
          "Ulegają odbiciu, załamaniu, ugięciu, interferencji itp.",
        ],
      },
    ],
  },
  {
    question:
      "19. Zjawisko fotoelektryczne, siatka dyfrakcyjna i jej zastosowanie",
    answers: [
      {
        title: "Zjawisko fotoelektryczne",
        answer: "Emisja elektronów z materiału pod wpływem światła",
        answers: [],
      },
      {
        title: "Siatka dyfrakcyjna",
        answer: "",
        answers: [
          "układ otworów służący do rozszczepienia fal świetlnych",
          "Siatka dyfrakcyjna służy do pomiaru długości fali",
          "płytka z naniesionymi ryskami",
        ],
      },
      {
        title: "Zastosowanie ",
        answer: "",
        answers: [
          "do analizowania składu chemicznego poprzez badanie widma światła, ",
          "badania struktury materiałów, ",
          "w telekomunikacji do zarządzania sygnałami świetlnymi, ",
          "w laserach do uzyskiwania czystych kolorów ",
          "w fotografii do tworzenia efektów wizualnych",
        ],
      },
    ],
  },
  {
    question: "20. Zdarzenia niezależne, pojęcie zmiennej losowej.",
    answers: [
      {
        title: "Zdarzenia niezależne",
        answer:
          "To takie, że wystąpienie jednego nie wpływa na wystąpienie drugiego.",
        answers: [],
      },
      {
        title: "pojęcie zmiennej losowej",
        answer:
          "To funkcja przypisująca wartość numeryczną każdemu możliwemu wynikowi zdarzenia losowego.",
        answers: [],
      },
    ],
  },
  {
    question:
      "21. Rozkład zmiennej losowej (tylko dla zmiennej typu skokowego).",
    answers: [
      {
        title: "Rozkał zmiennej losowej",
        answer: "Opisuje prawdopodobieństwo różnych wartości zmiennej losowej.",
        answers: [],
      },
      {
        title: "Dla zmiennej typu skokowego",
        answer:
          "Używa się funkcji prawdopodobieństwa dla konkretnych wartości.",
        answers: [],
      },
      {
        title: "Zmienna losowa typu skokowego ",
        answer:
          "to taka, której zbiór wartości jest przeliczalny, a więc w szczególności skończony. Przyjmuje ona wartości ze zbioru {x1, x2, x3,…, xn}.",
        answers: [
          "W przypadku zmiennej losowej typu skokowego, prawdopodobieństwo, że zmienna X przyjmie wartość ze zbioru A jest równe sumie prawdopodobieństw pi dla wszystkich xi należących do A.",
        ],
      },
      {
        title: "Funkcja rozkładu ",
        answer:
          "Funkcją rozkładu prawdopodobieństwa dla zmiennej losowej typu skokowego jest funkcja p, która każdej wartości xi przypisuje prawdopodobieństwo pi.",
        answers: [],
      },
      {
        title: "Przykład",
        answer:
          "Przykładowo, jeśli mamy zmienną losową X, która reprezentuje wynik rzutu kostką, to jest to zmienna typu skokowego, ponieważ może przyjąć jedną z sześciu dyskretnych wartości. Każda z tych wartości ma prawdopodobieństwo 1/6, więc mówimy, że X ma rozkład równomierny.",
        answers: [],
      },
    ],
  },
  {
    question: "22. Wartość oczekiwana (dla zmiennej typu skokowego).",
    answers: [
      {
        title: "Wartość oczekiwana",
        answer:
          "jest średnią ważoną wartości, które zmienna losowa może przyjąć, gdzie wagami są prawdopodobieństwa tych wartości wystąpienia poszczególnych wartości. Wartość oczekiwana jest wartością spodziewaną, ale rzeczywistość może być inna.",
        answers: [],
      },
    ],
  },
  {
    question: "23. Pojęcie rozkładu Bernoulliego.",
    answers: [
      {
        title: "Rozkład Bernoulliego",
        answer:
          "Opisuje dyskretną zmienną losową, która może zakończyć się tylko dwoma wzajemnie wykluczającymi się wynikami. 0 lub 1, sukces lub brak sukcesu ",
        answers: ["Rzut monetą 0 - reszka, 1 orzeł"],
      },
    ],
  },
  {
    question: "24. Zasady szacowania błędów pomiarowych.",
    answers: [
      {
        title: "Błędy pomiarowe",
        answer:
          "Są nieuniknione w każdym procesie pomiarowym imogą mieć różne źródła. Podając wynik powinno podać się informacje o jego dokładności, aby można było ocenić jego wiartygodność",
        answers: [
          "Błędy przybliżenia - wynikają z uproszczenia warunków omiaru lub zastosowania przybliżonych wzorów",
          "błedy systematyczne - wynikają z niedokładności użytych przyrządów, błednej metody pomiaru lub działania czynników zewnętrznych",
          "pomyłki - bład przypadkowy powstaje wskutek fałszyewgo odczytania wskazań, błednego zapisania wyniku, itp.",
        ],
      },
    ],
  },
  {
    question: "25. Fotodiody, diody LED i ich zastosowania.",
    answers: [
      {
        title: "Fotodiody",
        answer:
          "są rodzajem diod półprzewodnikowcyh, które przekształcają światło na prąd",
        answers: [
          "układy zdalnego sterowania",
          "układy pomiarowe wielkości elektrycznych i nieelektrycznych np do pomiarów odległości",
        ],
      },
      {
        title: "diody LED",
        answer: "emitują światło pod wpływem prądu, energooszczędne diody",
        answers: ["oświetlenie", "elektornika"],
      },
    ],
  },
  {
    question: "26. Metody stabilizacji napięcia.",
    answers: [
      {
        title: "Stabilizacja",
        answer:
          "Stabilizacja napięcia osiągana jest za pomocą stabilizatorów napięcia, diod Zenera, lub układów opartych na wzmacniaczach operacyjnych. Wszystkie te metody mają na celu utrzymanie stałego napięcia na wyjściu, niezależnie od obciążenia układu oraz wahań napięcia, chroniąc tym samym wszelkie dalsze części elektroniki.",
        answers: [
          "Transformatory, które zmieniają wysokość napięcia.",
          "Regulatory, które automatycznie dostosowują prąd, aby był zawsze taki sam.",
          "Stabilizatory z serwomechanizmem, które dostosowują napięcie, korzystając z informacji zwrotnej.",
          "Kondensatory, które pomagają utrzymać napięcie na stałym poziomie, zmniejszając skoki.",
          "Automatyczne Regulatory Napięcia (AVR), które są ważne w miejscach takich jak elektrownie.",
          "UPSy, czyli nieprzerwane źródła zasilania, które zapewniają ciągłe napięcie, ",
        ],
      },
    ],
  },
  {
    question: "27. Podać podstawowe warunki powstawania drgań w generatorach.",
    answers: [
      {
        title: "Generator drgań",
        answer:
          "oscylator, to układ elektryczny, którego celem jest wytworzenie drgań elektrycznych.",
        answers: [],
      },
      {
        title: "Warunki powstawania",
        answer: "",
        answers: [
          "Warunek amplitudy: Sygnał na wejściu wzmacniacza podawany z układu sprzężenia zwrotnego musi być na tyle duży, aby na wyjściu wzmacniacza otrzymać sygnał o takim samym lub większym poziomie. Oznacza to, tłumienie układu sprzężenia zwrotnego nie może być większe niż wzmocnienie wzmacniacza.",
          "Warunek fazy: Chwila maksimum sygnału na wejściu wzmacniacza, po przejściu przez wzmacniacz i układ sprzężenia zwrotnego, musi wypadać zawsze w tym samym momencie.",
        ],
      },
    ],
  },
  {
    question: "28. Modulacja i demodulacja AM, FM, PM, ASK, FSK, PSK.",
    answers: [
      {
        title: "Modulacja i demodulacja",
        answer:
          "Procesy używane do przesyłania informacji za pomocą fali nośnej. Demodulacja pozwala na odzyskanie oryginalanego sygnagłu.",
        answers: [
          "modulacja amplitudy: AM, ASK",
          "Modulacja częstotliwości: FM, FSK",
          "Modulacja Fazy: PM, PSK",
          "Technika modulacji sygnałów: AM FM PM",
          "Forma modulacji cyfrowej: ASK FSK PSK",
        ],
      },
      {
        title: "AM i ASK",
        answer: "",
        answers: [
          "AM - modulacja utrzymuje stałą częstotliwość i fazę, a amplitudę skaluje proporcjonalnie do sygnału audio",
          "ASK - kluczowanie amplitudy, dane są reprezentowane przez zmieniającą się amplitudę fali nośnej",
        ],
      },
      {
        title: "FM i FSK",
        answer: "",
        answers: [
          "FM - modulacja utrzymuje stałą amplitudę i zmienia częstotliwość fali w czasie porporcjonalnie do sygnału audio",
          "FSK - kluczowanie częstotliwości, dane są reprezentowane przez zmieniającą się częstotliwość fali nośnej",
        ],
      },
      {
        title: "PM i PSK",
        answer: "",
        answers: [
          "PM - modulacja utrzymuje stałą amplitudę ale przesuwa kształt fali o fazę",
          "PSK - kluczowanie fazy, dane są reprezentowane przez zmieniającą się fazę fali nośnej",
        ],
      },
    ],
  },
  {
    question: "29. Układy cyfrowe średniej skali integracji MSI.",
    answers: [
      {
        title: "Układ cyfrowy",
        answer:
          "Rodzaj ukłądów elektronicznych gdzie sygnały napięciowe najczęściej przyjmują dwa poziomy i są określane przez cyfry 0 i 1",
        answers: [],
      },
      {
        title: "Układ cyfrowe MSI",
        answer:
          "To układy scalone zawierające od 10 do 100 bramek logicznyc. Są częścią hierarchi skali integracji między układmi małej skali SSI do 10 bramek, a układami dużej skali LSI od 100 do 1000 bramek",
        answers: [],
      },
      {
        title: "Wykorzystanie ",
        answer:
          "Układy MSI wykorzystuje się w systemach cyfrowych gdzie potrzebne są bardziej złożone funkcje np. liczniki rejestry dekodery. Ponieważ zawierają więcej bramek niż układy SSI a mniej niż LSI, MSI oferują dobrą równowagę między złożonością a kosztem co czyni je idealnym wyborem do wielu zastosowań",
        answers: [],
      },
    ],
  },
  {
    question: "30. Rejestry, liczniki oraz ich zastosowania.",
    answers: [
      {
        title: "Rejestry",
        answer:
          "Układy przechowujące dane. Jest to pamięć najbliższa procesorowi a zatem najszybsza. Służą do przechowywania adresów lub danych przed lub w trakcie ich przetwarzania.",
        answers: [
          "Używa się ich tam gdzie występuje potrzeba chwilowego przechowania nie wielkiej ilości informacji binarnej",
          "pamięci, sterowniki, układy synchronizacyjne",
        ],
      },
      {
        title: "liczniki",
        answer:
          "Układy cyfrowe które zliczają impulsy. Służą do zliczenia zdarzeń występujących najczęściej w określonym czasie. ",
        answers: [
          "Licznik prądu",
          "Licznik zużycia wody",
          "licznik określający przebieg auta",
        ],
      },
    ],
  },
];
// export const initArr = newArrr;
export const initArr = toLearn;
