import Image from "next/image";
import MovieCard from "./MovieCard";

export default function PreviousSeasons() {
  const data = [
    {
      id: 10,
      title: "Family Guy",
      age: 16,
      duration: 0,
      imageString:
        "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
      overview:
        "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      release: 1999,
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
    },
    {
      id: 7,
      title: "Spider-Man: Across the Spider-Verse",
      age: 12,
      duration: 2.2,
      imageString:
        "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      release: 2023,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
    },

    {
      id: 8,
      title: "Coco",
      release: 2017,
      age: 0,
      duration: 1.45,
      imageString:
        "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      overview:
        "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
    },
    {
      id: 9,
      title: "Monk",
      release: 2002,
      age: 12,
      duration: 0,
      imageString:
        "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
      overview:
        "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt="img"
            className="rounded-sm absolute w-full h-full  object-cover"
            width={500}
            height={400}
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={movie.imageString}
                alt="img2"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard title={movie.title} overview={movie.overview} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
