import React from 'react'

const Questions = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full h-full px-24 max-sm:px-4 py-16">
      <h1 className=" text-2xl font-bold">Pytanie :</h1>
      <p className="text-xl"> Jak przebiega proces adopcji zwierząt?</p>
      <h1 className=" text-xl font-bold">Odpowiedzi : </h1>
      <ul className="flex flex-col items-start justify-start gap-4 ml-8 text-xl">
        <li>
          Adopcja psa lub kota ze schroniska, fundacji czy domu tymczasowego
          zawsze powinna być dokładnie przemyślaną decyzją. Pracownicy i
          wolontariusze dwoją się i troją, by zapewnić swoim podopiecznym jak
          najlepsze warunki, dlatego decydując się na przygarnięcie zwierzaka
          konieczne jest przejście przez całą procedurę.{' '}
        </li>
        <li>
          Na początku warto zastanowić się nad wyborem odpowiedniego zwierzęcia.
          Nie powinno się kierować wyłącznie wyglądem – decyzja powinna być
          świadoma, a przyszły pupil jak najlepiej dopasowany aktywnością i
          charakterem do swojego nowego opiekuna. Warto zastanowić się także nad
          innymi kwestiami: czy wszyscy w domu wyrażają zgodę, czy posiada się
          odpowiednią wiedzę, by zaopiekować się zwierzęciem o nieznanej
          przeszłości, czy jest się gotowym do poświęceń, zwłaszcza w pierwszych
          chwilach w nowym domu, czy w razie wyjazdu lub choroby jest ktoś, kto
          może zająć się pupilem, a także czy sytuacja materialna pozwala na
          zapewnienie odpowiednich warunków – karmy, niezbędnych akcesoriów czy
          opieki weterynaryjnej w razie choroby.{' '}
        </li>
        <li>
          Gdy już zwierzak zostanie wybrany, następnym krokiem jest wypełnienie
          ankiety przedadopcyjnej. Tam znajdują się istotne pytania dotyczące
          warunków w jakich będzie żył zwierzak i świadomości opiekunów. Mogą
          pojawić się kwestie karmy, wyboru weterynarza, nieobecności w domu,
          alergii domowników, losu poprzednich zwierząt czy dzieci mieszkających
          pod dachem. W przypadku kotów często pojawia się pytanie o
          zabezpieczenie okien i balkonów siatką. Od przyszłych właścicieli psów
          oczekuje się informacji na temat czasu poświęcanego na spacery oraz
          gotowości do skorzystania z usług behawiorysty lub szkoleniowca.
        </li>
        <li>
          Ostatnim etapem procedur adopcyjnych jest podpisanie umowy. Tam
          przyszły właściciel zobowiązuje się do dbania o zwierzę oraz
          dopilnowania, by nigdy nie trafiło na ulicę. Zwykle wzór takiej umowy
          można znaleźć na stronie organizacji, z której chce się adoptować
          czworonoga. Umowa ma charakter cywilno-prawny i jest zabezpieczeniem
          przyszłych losów zwierzęcia.
        </li>
      </ul>
    </div>
  )
}

export default Questions
