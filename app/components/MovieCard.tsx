"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";

interface dataProps {
  title: string;
  overview: string;
}

export default function MovieCard({ title, overview }: dataProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-10 w-10" />
      </button>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
      <PlayVideoModal
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
      />
    </>
  );
}
