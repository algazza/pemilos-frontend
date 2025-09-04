import type { CandidateType } from "@/schemas/candidate.schema";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const AdminAddCandidate = ({
  children,
  candidate,
  isNewCandidate,
}: {
  children: React.ReactNode;
  candidate?: CandidateType;
  isNewCandidate: boolean;
}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="cursor-pointer">{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] dark text-foreground">
          <DialogHeader>
            <DialogTitle>
              {isNewCandidate ? "Add Candidate" : "Edit Candidate"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="">Nama</Label>
              <Input name="name" defaultValue={candidate?.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Nomor</Label>
              <Input name="number" defaultValue={candidate?.number} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Foto</Label>
              <Input name="image" type="file" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {isNewCandidate ? "Add Candidate" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AdminAddCandidate;
