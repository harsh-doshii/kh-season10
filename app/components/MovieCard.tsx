interface dataProps {
  title: string;
  overview: string;
}

export default function MovieCard({ title, overview }: dataProps) {
  return (
    <>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
    </>
  );
}
