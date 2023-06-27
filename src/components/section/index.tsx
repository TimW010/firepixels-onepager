import Image from "next/image";

const Section = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32" id="proces">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proces
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Op de afbeelding hiernaast is ons proces gedurende dit project
              gevisualiseerd.
              <br></br>
              <br></br>
              Klik op de knop hieronder om onze eindpresentatie te downloaden om
              meer te weten te komen over ons proces tot aan het eindproduct.
              <br></br>
              <br></br>
              <a
                href="/presentatie.pptx.pdf"
                download="presentatie_firepixels"
                className="text-base font-semibold leading-7 text-white bg-orange-600 py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Download presentatie
              </a>
            </p>
          </div>
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ontwerpProces.jpg"
              alt="ontwerpproces"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32" id="concept">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-1xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Concept
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Als team hebben we ervoor gekozen om het concept{" "}
              <strong>Vuurvaste Schuivers</strong> uit te werken, een mobiele
              puzzelgame om uitwonende studenten meer bewust te maken over
              brandveiligheid in huis.
            </p>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Doel
            </h3>
            <ul role="list" className="mt-6 list-disc">
              <li className="text-lg leading-8 text-gray-600">
                Inspireren om voorzorgmaatregelen te nemen voor huisbrand
                gevaar.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Informeren over brandveligheid
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Amuserend (gamification)
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Extrinsiek motiveren
              </li>
            </ul>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              De doelgroep van Vuurvaste Schuivers zijn uitwonende studenten
              tussen de 18 en 24 jaar oud die wel eens een spelletje spelen op
              hun mobiele telefoon. Om deze doelgroep te bereiken hebben wij
              ervoor gekozen om gebruik te maken van toiletposters, aangezien de
              doelgroep vaak een spelletje speelt op hun mobiele telefoon
              tijdens het toiletbezoek.
            </p>
          </div>
        </div>
        <div className="mt-6 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <Image
            src="/poster_1.jpg"
            alt="poster_1"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/poster_2.jpg"
            alt="poster_2"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/poster_3.jpg"
            alt="poster_3"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-1xl">
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Het spel
            </h3>
            <ul role="list" className="mt-6 list-disc">
              <li className="text-lg leading-8 text-gray-600">
                Creëer een pad naar de uitgang van de kamer door de meubels te
                verschuiven voordat de brand te groot wordt en de tijd voorbij
                is.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Levels worden moeilijker met grotere speelvelden en opdrachten
                om je acties te limiteren.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Ben je niet binnen de tijd uit de woning, dan heb je het level
                niet gehaald. Hierna wordt uitgelegd wat je fouten waren en
                probeer je het opnieuw.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Voordat je een level begint wordt er een opdracht gegeven die je
                tijdens het spel moet uitvoeren
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Grotere meubels zijn moeilijker te verschuiven dan lichte
                producten.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Per dag heb je drie levens: drie fouten die je mag maken.
              </li>
              <li className="text-lg leading-8 text-gray-600">
                Na 20 seconden op de klok begint het vuur te groeien en
                blokkeert rook je zicht op het speelveld.
              </li>
            </ul>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Demo
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hieronder is een demo te zien van het spel Vuurvaste Schuivers.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-6">
          <div className="max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ifpZsEATBgw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
