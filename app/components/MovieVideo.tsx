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
      "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
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
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          eveniet sapiente assumenda magni illo enim numquam libero explicabo
          quibusdam corporis voluptatem at voluptates impedit nostrum aliquid
          quasi vero, aperiam nisi.
        </p>
      </div>
    </div>
  );
}
