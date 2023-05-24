import Image from "next/image";

const Section = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="proces">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proces
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Als team zijn we begonnen met het uitvoeren van zowel deskresearch
            als fieldresearch naar het ontwerpvraagstuk: Hoe kunnen we het beste
            de burgers betrekken en voorzien van handelingsperspectief om
            professionals in hulpverlening en incident-en crisisbestrijding te
            kunnen ondersteunen? Hierbij hebben we onze inzichten verzameld op
            een ‘Insight Wall’, waar we de inzichten hebben ingedeeld op de
            thema’s: prepare, respond en recover.<br></br>
            <br></br>Door deze inzichten zijn we op onze potentiële doelgroep
            gekomen: uitwonende studenten. Hierbij hebben wij de volgende
            onderzoeksvraag geformuleerd: Hoe kunnen wij intrinsieke motivatie
            stimuleren bij uitwonende studenten zodat ze brandveilig kunnen
            wonen, wetende dat ze ja zeggen maar nee doen? Aan de hand van deze
            onderzoeksvraag zijn we als team gaan brainstormen om zoveel
            mogelijk ideeën en of concepten te genereren.
            <br></br>
            <br></br>
            Het resultaat van deze brainstorm waren 75 ideeën en of concepten
            die we hebben ingedeeld op basis van haalbaarheid en orginaliteit.
            Na deze ideeën en of concepten te hebben ingedeeld hebben we gestemd
            op 3 ideeën en of concepten waarvan wij als team denken dat er
            waarde gecreëerd kan worden voor onze doelgroep, om de
            brandveiligheid voor hen te bevorderen.
            <br></br>
            <br></br>
            Klik op de knop hieronder om onze presentatie te downloaden om meer
            te weten te komen over ons proces en de concepten.
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
            src="/proces.jpg"
            alt="proces"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
