import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  overview: string;
  state: boolean;
  changeState: any;
}

export default function PlayVideoModal({
  changeState,
  overview,
  state,
  title,
}: iAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{overview}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
