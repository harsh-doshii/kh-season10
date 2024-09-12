export default function MovieVideo() {
  const data = {
    id: 0,
    title: "K and h season 10",
    age: 12,
    duration: 2.15,
    overview:
      "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    videoSource:
      "https://utfs.io/f/37649495-61a8-4c39-8bb0-0718420ed378-hix7di.mp4",
    imageString:
      "https://utfs.io/f/0f3ca96f-9c5e-4f17-84ef-4572ea5c0075-b94xxv.JPG",
    release: 2023,
    category: "recent",
    youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
  };
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        playsInline
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p>
          It all started on 15th September 2014 when two high school
          sweethearts, Kashish and Harsh, began a journey that would span
          continents, time zones, and countless adventures. From shy smiles to
          heartfelt promises, this is where their story began—a tale of firsts,
          of growing up together, and discovering that true companionship knows
          no distance.
        </p>
      </div>
    </div>
  );
}
