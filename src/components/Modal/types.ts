import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
}
