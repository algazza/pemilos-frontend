import AdminAddCandidate from "@/components/admin/AdminAddCandidate";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { CandidateType } from "@/schemas/candidate.schema";
import { Pen, Trash } from "lucide-react";

const candidateData: CandidateType[] = [
  {
    name: "el rakkai",
    label: "OSIS",
    number: 1,
    image:
      "https://framerusercontent.com/images/BTg3sB9FIWbVRXPcnrNti3vJf10.webp?width=1593&height=1290",
  },
  {
    name: "Jonenten",
    label: "OSIS",
    number: 2,
    image:
      "https://framerusercontent.com/images/HVs1Zls05O9rFlKOz89PD8ACXY.webp?scale-down-to=512&width=516&height=516",
  },
  {
    name: "rifiqi nabil",
    label: "MPK",
    number: 1,
    image:
      "https://framerusercontent.com/images/qRQy3zjFQl3QrhoBrzAc9xM.webp?scale-down-to=512&width=1626&height=1418",
  },
  {
    name: "palepale",
    label: "MPK",
    number: 2,
    image:
      "https://framerusercontent.com/images/ZN3ZO3sMNWCASnOqB55YOulZEU.webp?scale-down-to=2048&width=2301&height=747",
  },
  {
    name: "valendika",
    label: "MPK",
    number: 3,
    image:
      "https://framerusercontent.com/images/9CQ1dErnNQyZyBc4payP7s4Nk8.webp?scale-down-to=512&width=516&height=516",
  },
];

const Candidate = () => {
  return (
    <section>
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">User</h1>
        <AdminAddCandidate isNewCandidate={true}>
          <Button type="button">Tambah</Button>
        </AdminAddCandidate>
      </div>

      {["OSIS", "MPK"].map((org) => (
        <div key={org} className="grid mt-4 gap-2">
          <h1 className="text-xl">{org}</h1>
          <div className="flex gap-4">
            {candidateData
              .filter((cdt) => cdt.label === org)
              .map((cdt) => (
                <Card key={cdt.name} className="flex-1">
                  <CardTitle className="w-full flex gap-4 items-center justify-end px-4">
                    <AdminAddCandidate isNewCandidate={false} candidate={cdt}>
                      <Pen className="size-4" />
                    </AdminAddCandidate>

                    <AlertDialog>
                      <AlertDialogTrigger className="cursor-pointer">
                        <Trash className="size-4" />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="dark text-foreground">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Apakah ada yakin ingin menghapus kandidat ini?
                          </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-500 text-white">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardTitle>
                  <CardContent className="grid justify-center items-center text-center gap-4">
                    <div>
                      <h3 className="text-lg">{cdt.name}</h3>
                      <span>{cdt.number}</span>
                    </div>
                    <div className="size-40">
                      <img
                        src={cdt.image}
                        className="object-cover object-center overflow-hidden"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Candidate;
