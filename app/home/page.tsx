import MovieVideo from "@/app/components/MovieVideo";
import Navbar from "@/app/components/Navbar";
import PreviousSeasons from "../components/PreviousSeasons";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Previous Seasons</h1>
      <PreviousSeasons />
    </div>
  );
}
