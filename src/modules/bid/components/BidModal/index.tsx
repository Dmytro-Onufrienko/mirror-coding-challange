import { Button } from "@/modules/common/ui/button";
import { Solicitation } from "@/modules/common/components/SearchBar/data";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/modules/common/ui/dialog";
import { FC, ReactNode } from "react";

interface IBidDetailsModalProps {
  trigger: ReactNode;
  content: Solicitation;
}

const BidDetailsModal: FC<IBidDetailsModalProps> = ({ trigger, content }) => {
  const {
    id,
    title,
    dueDate,
    solicitationSummary,
    mainCategory,
    solicitationType,
    attachments,
  } = content;

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bid Details</DialogTitle>
        </DialogHeader>
        <p>
          <span className="font-bold">ID:</span> {id}
        </p>
        <p>
          <span className="font-bold">Title:</span> {title}
        </p>
        <p>
          <span className="font-bold">Due Date:</span> {dueDate}
        </p>
        <p>
          <span className="font-bold">Solicitation Summary:</span>{" "}
          {solicitationSummary}
        </p>
        <p>
          <span className="font-bold">Main Category:</span> {mainCategory}
        </p>
        <p>
          <span className="font-bold">Solicitation Type:</span>{" "}
          {solicitationType}
        </p>
        <p>
          <span className="font-bold">Attachments:</span> {attachments}
        </p>
        <DialogFooter>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BidDetailsModal;
