import Image from "next/image";

const students = [
  {
    name: "Kasper Beljaars",
    role: "Student Creative Media & Game Technologies",
    imageUrl: "/kasper.jpg",
  },
  {
    name: "Owen Brouwer",
    role: "Student Creative Media & Game Technologies",
    imageUrl: "/owen.jpg",
  },
  {
    name: "Roy de Schepper",
    role: "Student Communicatie & Multimedia Design",
    imageUrl: "/roy.jpg",
  },
  {
    name: "Sera Meijer",
    role: "Student Communicatie & Multimedia Design",
    imageUrl: "/sera.jpg",
  },
  {
    name: "Tess Blom",
    role: "Student Communicatie & Multimedia Design",
    imageUrl: "/tess.jpg",
  },
  {
    name: "Tim Waterreus",
    role: "Student Creative Media & Game Technologies",
    imageUrl: "/tim.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="over">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Het team
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {students.map((student) => (
            <li key={student.name}>
              <div className="flex items-center align gap-x-6">
                <Image
                  className="h-16 w-16 sm:h-24 sm:w-24 xl:h-32 xl:w-32 rounded-full"
                  src={student.imageUrl}
                  alt={student.name}
                  width={500}
                  height={500}
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {student.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-orange-600">
                    {student.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
