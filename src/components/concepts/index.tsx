import Image from "next/image";

const ConceptsSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="concepten">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF0000] to-[#FF7D00 ] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Concepten
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Als team zijn wij op de volgende 3 concepten gekomen waarvan wij
              denken dat deze waarde kunnen creëren voor uitwonende studenten om
              hun brandveiligheid te bevorderen.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-x-8 gap-y-20 px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Student Emergency
            </h2>
            <p className="py-6 text-lg leading-8 text-gray-600">
              Een telefoon game over een brand in een studentenhuis waar de
              student (speler) de goede weg naar buiten of de manier om de brand
              te blussen moet vinden.
            </p>
            <Image
              src="/concept_1.png"
              alt="Concept 1"
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              StudentSafetyVR
            </h2>
            <p className="py-6 text-lg leading-8 text-gray-600">
              Een VR-omgeving waarin een scenario met brand in een
              studentenwoning wordt beleefd. Hier krijg je te zien wat er
              allemaal fout kan gaan en wat je zelf dus zou kunnen verbeteren in
              je eigen studentenwoning.
            </p>
            <Image
              src="/concept_2.png"
              alt="Concept 2"
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              S.A.F.E - Boards
            </h2>
            <p className="py-6 text-lg leading-8 text-gray-600">
              Een reclamebord op publieke plekken in de stad die voorbijgangers
              aanspreekt op hun brandveiligheid maatregelen. Door gebruik te
              maken van omgekeerde psychologie, interacteren met de mensen op
              straat om ideeën van brandveiligheid in huis te laten opkomen in
              hun eigen gedachten, alsof ze er zelf op zijn gekomen.
            </p>
            <Image
              src="/concept_3.png"
              alt="Concept 3"
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF0000] to-[#FF7D00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptsSection;
