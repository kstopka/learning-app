export const firstArr = [
  {
    question: "Prawo Ohma i Kirchhoffa, pomiary wielkości elektrycznych.",
    answers: [
      {
        title: "Prawo Ohma",
        answer:
          "Napięcie między dwoma punktami przewodnika jest proporcjonalne do natężenia prądu płynącego przez przewodnik",
      },
      {
        title: "1 Prawo Kirchoffa",
        answer:
          "Suma prądów wchodzących do węzła jest równa sumie prądów wychodzących",
      },
      {
        title: "2 Prawo Kirchoffa",
        answer:
          "suma spadu napięcia jest równa sumie źródeł napięcia w zamkniętym obwodzie",
      },
      {
        title: "Pomiary wielkości elektrycznych",
        answers: [
          "Napięcie - Voltomierz",
          "Natężenie - Amperomierz",
          "Rezystancja - Omomierz",
        ],
      },
    ],
  },
  {
    question: "Oscyloskop i jego możliwości pomiarowe",
    answers: [
      {
        title: "Oscyloskop",
        answer: "To przyrząd do wizualizcji zmian napięcia w funkcji czasu.",
      },
      {
        title: "Możliwości pomiarowe",
        answer:
          "Pozwala analizować sygnały elektryczne, częstotliwości, amplitudę i kształt fali",
      },
    ],
  },
  {
    question:
      "Charakterystyki diod i tranzystorów, omów krótko tranzystor bipolarny oraz MOSFET",
    answers: [
      {
        title: "Dioda",
        answer:
          "Element półprzewodników przewodzący prąd elektryczny głownie w jednym kierunku. Zaczyna przewodzić prąd powyżej pewnego napięcia progowego - 0,7V",
      },
      {
        title: "Tranzywstor",
        answer: "To element półrewodnika służący do wzmacniania prądów",
      },
      {
        title: "Tranzywstor Bipolarny",
        answer:
          "Składa się z kolektora, bazy oraz emitera. Jego działanie polega na kontrolowaniu natężenia prądu przepływającego z emitera do kolektora za pomocą bazy",
      },
      {
        title: "MOSFET",
        answer:
          "MOSFET to typ tranzystora polowego wykorzytujący pole elektryczne do sterowania kształtem i przewodnictwem kanału przewodzenia",
      },
    ],
  },
  {
    question: "Układy wzmacniaczy (rodzaje, parametry).",
    answers: [
      {
        title: "Wzmacniacz",
        answer:
          "Na za zadanie wzmocnić amplitudę sygnału kosztem pobranej energii ze źródła ",
      },
      {
        title: "Rodzaje",
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
    question: "Filtry pasywne i aktywne",
    answers: [
      {
        title: "Filtry pasywne",
        answer:
          "Wykorzystują kondensatory, rezystory, cewki. Przepuszcają lub tłumią określone częstotliwości",
      },
      {
        title: "Filtry aktywne",
        answer:
          "Zawierają elementy RLC i elementy dostarczające energię do filtrowanego układu. Takie jak wzmacniacze czy układy liniowe",
      },
    ],
  },
  {
    question: "Układy zasilające (prostowniki i stabilizatory).",
    answers: [
      {
        title: "Prostownik",
        answer: "Zamienia prąd zmienny na prąd stały.",
      },
      {
        title: "Stabilizator",
        answer:
          "Utrzymuje stałe napięcie wyjściowe niezależenie od zmian obciążenia. Istnieją stabilizatory napięcia stałego oraz napięcia przemiennego.",
      },
    ],
  },

  {
    question: "Układy kombinacyjne i sekwencyjne, bramki logiczne",
    answers: [
      {
        title: "Układy kombinacyjne",
        answer: "Brak pamięci, wyjście zależy tylko od aktualnego stanu wejść",
      },
      {
        title: "Układy sekwencyjne",
        answer:
          "Posiada pamięć, wyjście zależy nie tylko od aktualnego stanu wejść ale również od poprzednich stanów układu",
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
      "Podać przykłady ruchu postępowego i obrotowego oraz ruchów złożonych (podział).",
    answers: [
      {
        title: "Ruch postępowy",
        answer:
          "Punkt materialny porusza się po określonej ścieżce - jadący samochód po prostej drodze",
      },
      {
        title: "Ruch obrotowy",
        answer:
          "Wszystkie punkty materialne bryły poruszają sie po okręgu i znajdują się na osi obrotu - kręcoące się koło samochodu",
      },
      {
        title: "Ruch złożony",
        answer:
          "Połączenie dwóch poprzednich - kręcące się koło samochodzu jadące po prostej dordzę",
      },
    ],
  },
  {
    question: "Zasady dynamiki Newtona.",
    answers: [
      {
        title: "1 zasada Newstona",
        answer:
          "Ciało jest w spoczynku lub w ruchu jednostajnie prostoliniowym jezeli na to ciało nie działa żadna siła lub siły się równoważą",
      },
      {
        title: "2 zasada Newstona",
        answer:
          "Jeżeli na ciało działa siła wypadkowa to porusza się ruchem jednostajnie przyśpieszonym wprost proporcjonalnie do siły, a odwrotnie proporcjonalnie do masy",
      },
      {
        title: "3 zasada Newstona",
        answer:
          "Siła z jaką ciało A oddziałowuje na ciało B jest równa sile oddziaływania ciała B na ciało A. Siły te działają w jednym kierunku ale mają przeciwny wektor.",
      },
    ],
  },
  {
    question:
      "Co to jest rezystancja i pojemność elektryczna? Zasady łączenia elementów R oraz C.",
    answers: [
      {
        title: "Rezystancja",
        answer:
          "Rezystancja opisuje stopień oporu, jaki materiał stawia na przepływ prądu. Zależy od długości przekroju i rodzaju materiału.",
      },
      {
        title: "Pojemność elektryczna",
        answer:
          "Pojemność elektryczna opisuje zdolność kondensatora do magazynowania ładunku elektrycznego. Zależy od geometrii kondensatora i rodzaju dielektryka.",
      },
      {
        title: "Obwód szeregowy",
        answer:
          "Rezystancje poszególnych elementów sumują się, pojemność całkowita jest równa sumie odwrotności pojemności poszczególnych kondensatorów",
      },
      {
        title: "Obwód równoległy",
        answer:
          "Pojemność poszczególnych kondensatorów sumują się, Rezystancja całkowita jest równa sumie odwrotności rezystancji poszczególnych rezystorów.",
      },
    ],
  },
];

export const secondArr = [
  {
    question: "7. Przerzutniki: astabilne, monostabilne i bistabilne.",
    answers: [
      {
        title: "Przerzutniki",
        answer:
          "To układ elektorniczny którego sygnał na wyjściu może zależeć od stanu na jego wejściu lub of jego stanu wewnętrzenego. Stosuje się je do przechowywania małych ilości danych do których potrzebujemy stałego dostępu.",
        answers: [],
      },
      {
        title: "Przerzutniki astabilne",
        answer: "Nie ma stanu stabilnego",
        answers: [],
      },
      {
        title: "Przerzutniki monostabilne",
        answer: "jeden stan stabilny i chwilowy stan niestabilny",
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
          "Stosunek mas substancji wydzielonych na elektrodach podczas przepływu jednol.... ładunków elektrycznych jest równy stosunkowi ich równoważników elektrochemicznych",
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
          "Metoda bezpośrednia - porównanie mierzonej pojemności z wartością wzorcową",
          "Metoda różnicowa - odjęcie od mierzonej pojemności znanej wartości wzorcoweji pomiarze otrzymanej różnicy",
          "Metoda zerowa - badanie różnicy między wielkością mierzoną a wzorcową i takiej zmianie wielkości wzorcowej, aby tę różnicę sprowadzić do zera",
          "Metoda pośrednia - bezpośrdnim pomiarze innych wielkości, związanych z wielkością szukaną znaną zależnością",
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
];

export const initArr = secondArr;
