// export const initArr = [
//   {
//     question: "Prawo Ohma ",
//     answer:
//       "Prawo Ohma mówi, że napięcie między dwoma punktami przewodnika jest proporcjonalne do natężenia prądu płynącego przez przewodnik",
//   },
//   {
//     question: "Pierwsze Prawo Kirchhoffa",
//     answer:
//       "Pierwsze prawo Kirchhoffa mówi o zachowaniu ładunku w węzłach obwodu.",
//   },
//   {
//     question: "Drugie Prawo Kirchhoffa",
//     answer:
//       "Drugie prawo Kirchhoffa określa, że suma spadków napięcia w zamkniętym obwodzie jest równa sumie źródeł napięcia.",
//   },
//   {
//     question: "Oscyloskop",
//     answer:
//       "Oscyloskop to przyrząd do wizualizacji zmian napięcia w funkcji czasu. Pozwala analizować sygnały elektryczne, częstotliwość, amplitudę i kształt fali.",
//   },
//   {
//     question: "Pomiary wielkości elektrycznych",
//     answer:
//       "Pomiary wielkości elektrycznych, takich jak napięcie, prąd i rezystancja, są zazwyczaj wykonywane za pomocą mierników, takich jak woltomierz, amperomierz i omomierz. Woltomierz mierzy napięcie, amperomierz mierzy natężenie prądu, a omomierz mierzy rezystancję.",
//   },
//   {
//     question: "Diody ",
//     answer:
//       "Diody to elementy półprzewodnikowe, które przewodzą prąd elektryczny głównie w jednym kierunku. Dioda zaczyna przewodzić prąd powyżej pewnego napięcia progowego.",
//   },
//   {
//     question: "Tranzystory ",
//     answer:
//       "Tranzystory to elementy półprzewodnikowe, które służą do wzmacniania prądów. ",
//   },
//   {
//     question: "Tranzystor bipolarny ",
//     answer:
//       "Tranzystor bipolarny typu n-p-n lub p-n-p zbudowany jest z dwóch złącz p-n położonych blisko siebie. Działanie tranzystora polega na tym, że prąd płynący z emitera do kolektora sterowany jest przez prąd bazy. Sterowanie prądem bazy reguluje przepływ prądu kolektora-emitera.",
//   },
//   {
//     question: "MOSFET ",
//     answer:
//       "MOSFET to typ tranzystora polowego, który wykorzystuje pole elektryczne do sterowania kształtem i przewodnictwem “kanału” przewodzenia. Sterowanie odbywa się za pomocą napięcia na bramce, kontrolując przepływ prądu między źródłem a drenem.",
//   },
//   {
//     question: "Wzmacniacze ",
//     answer:
//       "Wzmacniacze to układy elektroniczne zwiększające amplitudę sygnału. Wzmacniacz sygnałów elektrycznych to rodzaj wzmacniacza, którego zadaniem jest wytworzenie na wyjściu wzmocnionego wejściowego sygnału elektrycznego, kosztem energii pobieranej ze źródła zasilania.",
//   },
//   {
//     question: "Najważniejsze parametry elektryczne wzmacniacza ",
//     answer: `•	współczynnik wzmocnienia prądowego i napięciowego

//     •••••••••	rezystancja (impedancja) wejściowa – określa jak bardzo wzmacniacz obciąża źródło sygnału (im wyższa, tym lepiej),

//     •••••••••	rezystancja (impedancja) wyjściowa – określa straty energii w postaci ciepła wydzielonego w obwodach wzmacniacza (im niższa, tym lepiej),
//     •••••••••	pasmo przenoszonych częstotliwości, stosunek sygnału do szumu.

//     `,
//   },
//   {
//     question: "Rodzaje wzmacniaczy",
//     answer:
//       "wzmacniacz antenowy, wzmacniacz gitarowy, wzmacniacz gramofonowy, wzmacniacz mikrofonowy, wzmacniacz słuchawkowy",
//   },
//   {
//     question: "Filtry pasywne ",
//     answer:
//       "Filtry pasywne wykorzystują rezystory, kondensatory, cewki. Przepuszczają lub tłumią określone częstotliwości.",
//   },
//   {
//     question: "Filtry aktywne ",
//     answer:
//       "Filtry aktywne wykorzystują wzmacniacze operacyjne. Zapewniają większą elastyczność w projektowaniu.",
//   },
//   {
//     question: "Prostowniki ",
//     answer: "Prostowniki przekształcają prąd zmienny na prąd stały.",
//   },
//   {
//     question: "Stabilizatory ",
//     answer:
//       "Stabilizatory utrzymują stabilne napięcie wyjściowe, niezależnie od zmian obciążenia",
//   },
//   {
//     question: "Przerzutniki ",
//     answer: "Przerzutniki to układy cyfrowe z dwoma stanami (0 i 1).",
//   },
//   {
//     question: "Przerzutnik astabilny",
//     answer:
//       "Przerzutnik astabilny (ang. astable multivibrator) to układ mający 2 stany quasi-stabilne. Przerzutniki astabilne są generatorami impulsów prostokątnych pracującymi samowzbudnie, tzn. bez zewnętrznego pobudzenia. Astabilny - generuje ciągłe przejścia między stanami.",
//   },
//   {
//     question: "Przerzutnik monostabilny ",
//     answer:
//       "Przerzutnik monostabilny (ang. univibrator, monostable multivibrator) to układ mający jeden stan stabilny, w którym układ może przebywać dowolnie długo, i stan quasi-stabilny, w którym układ przebywa tylko przez pewien czas. Monostabilny - posiada jeden ustalony stan stabilny.",
//   },
//   {
//     question: "Przerzutnik bistabilny ",
//     answer:
//       "Przerzutnik bistabilny to układ, który może pozostawać w jednym z dwóch stanów stabilnych. Przejście z jednego stanu do drugiego jest powodowane zewnętrznym sygnałem przełączającym. Przerzutniki bistabilne są zwykle stosowane jako układy pamiętające w systemach cyfrowych. Bistabilny - ma dwa stabilne stany.",
//   },
//   {
//     question: "Układy kombinacyjne ",
//     answer:
//       "Układy kombinacyjne to układy, w których wyjście zależy tylko od aktualnego stanu wejść. Nie mają one pamięci, co oznacza, że nie przechowują żadnych informacji o poprzednich stanach.",
//   },
//   {
//     question: "Układy sekwencyjne ",
//     answer:
//       "Układy sekwencyjne to układy, które mają pamięć. Wyjście takiego układu zależy nie tylko od aktualnego stanu wejść, ale także od poprzednich stanów układu.",
//   },
//   {
//     question: "Bramki logiczne ",
//     answer:
//       "Bramki logiczne to proste układy elektroniczne realizujące podstawowe operacje algebry Boole’a na pojedynczych bitach. Są one minimalnymi jednostkami do budowy dowolnego półprzewodnika. ",
//   },
//   {
//     question: "Ruch postępowy ",
//     answer:
//       "Ruch postępowy to ruch, w którym punkt materialny porusza się po określonej ścieżce. Przykładem ruchu postępowego może być jazda samochodu po prostej drodze lub ruch punktu materialnego po okręgu.",
//   },
//   {
//     question: "Ruch obrotowy",
//     answer:
//       "Ruch obrotowy to ruch, w którym wszystkie punkty materialne bryły poruszają się po okręgach o środkach leżących na osi obrotu. Przykładem ruchu obrotowego może być obrót koła rowerowego lub ruch tramwaju na zakręcie.",
//   },
//   {
//     question: "Ruchy złożone",
//     answer:
//       "Ruchy złożone to ruchy, które są kombinacją ruchu postępowego i obrotowego. Przykładem ruchu złożonego może być ruch koła samochodu, które obraca się dookoła osi (ruch obrotowy), ale jednocześnie przemieszcza się razem z samochodem (ruch postępowy) lub ruch punktu na powierzchni opony jadącego roweru.",
//   },
//   {
//     question: "Pierwsza zasada Newtona",
//     answer:
//       "ciało pozostaje w stanie spoczynku lub ruchu jednostajnego prostoliniowego, jeżeli na nie, nie działa żadna siła.",
//   },
//   {
//     question: "Druga  zasada Newtona",
//     answer: "zmiana pędu ciała jest proporcjonalna do działającej siły",
//   },
//   {
//     question: "Trzecia zasada Newtona",
//     answer:
//       "dla każdej siły istnieje równoważna jej siła przeciwna skierowana w przeciwną stronę.",
//   },
// ];
export const initArr = [
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
