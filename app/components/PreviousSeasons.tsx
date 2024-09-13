import Image from "next/image";
import MovieCard from "./MovieCard";

export default function PreviousSeasons() {
  const data = [
    {
      id: 10,
      title: "Concerts",
      age: 16,
      duration: 0,
      imageString:
        "https://utfs.io/f/f8c69287-cfdf-4d28-9f3f-71016a4f6a6b-1x998c.JPG",
      overview:
        "Music brings Harsh and Kashish even closer in this episode. From singing along at Coldplay, The Local Train, and Anuv Jain’s concerts to sharing a video call during the Eras tour, their love for live music knows no bounds. With dreams of attending the Eras tour together and maybe even seeing Diljit live, this episode is a symphony of memories and melodies.",
      release: 1999,
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
    },
    {
      id: 7,
      title: "Cats",
      age: 12,
      duration: 2.2,
      imageString:
        "https://utfs.io/f/9bb997a1-14c9-47be-968d-29353b17e939-1xf5x6.JPG",
      overview:
        "In this episode, Harsh and Kashish's love for all things feline takes center stage. From the days of feeding and playing with their beloved neighborhood cat to showering each other with cat-themed gifts and reels, their shared affection for cats is woven into their story. A heartwarming chapter of purrs, paws, and playful moments.",
      release: 2023,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
    },

    {
      id: 8,
      title: "Festivals",
      release: 2017,
      age: 0,
      duration: 1.45,
      imageString:
        "https://utfs.io/f/8a5715b2-43d0-4ba7-92f4-346a8fd2815a-1xegpp.HEIC",
      overview:
        "In this festive episode, Harsh and Kashish look back on their shared celebrations since 2014, from the colors of Holi to the lights of Diwali, the joy of Ganesh Chaturthi, and the warmth of Christmas. But it's Navratri that holds a special place in their hearts, where the Garba beats bring them together for their favorite tradition—dancing through the night.",
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
    },
    {
      id: 9,
      title: "Geography",
      release: 2002,
      age: 12,
      duration: 0,
      imageString:
        "https://utfs.io/f/bc7bc4a5-3047-487a-90f7-eafcefd4f819-1x989v.JPG",
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
