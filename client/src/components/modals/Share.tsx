import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormattedMessage, useIntl } from "react-intl";
import { useRef, useState } from "react";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "@/hooks/use-toast";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

type TShareModalProps = {
  trigger: JSX.Element;
  url: string;
};
export function ShareModal(props: Readonly<TShareModalProps>) {
  const { trigger , url } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const handleCopyProfileLink = async () => {
    if (inputRef.current) {
      const success = await copyToClipboard(inputRef.current);
      if (success) {
        toast({
          title: intl.formatMessage({ id: "profile.userAvatar.toast.title" }),
          variant: "default",
          description: intl.formatMessage({
            id: "share.property.link.description",
          }),
          duration: 1500,
          action: <FaCheckCircle />,
          className: cn(
            "top-0 right-0  border-none flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-typography-10 text-light-0"
          ),
        });
        setOpen(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-sm ring-[2px] ring-typography-10">
        <DialogHeader>
          <DialogTitle>
            <FormattedMessage id="common.shareLink" />
          </DialogTitle>
          <DialogDescription>
            <FormattedMessage id="share.description" />
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              <FormattedMessage id="common.link" />
            </Label>
            <Input
              id="link"
              defaultValue={url}
              readOnly
              className="text-light-40"
              ref={inputRef}
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">
              <FormattedMessage id="common.copy" />
            </span>
            <Copy className="text-light-60" onClick={handleCopyProfileLink}  />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-[99px] border-[1px] text-white bg-typography-10 hover:bg-typography-10"
            >
              <FormattedMessage id="common.close" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
