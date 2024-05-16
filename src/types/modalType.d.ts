export interface ModalType {
  id?: string;
  children: React.ReactNode;
  submitButtonText: string;
  submitButtonAction: () => void;
  cancelButtonText?: string;
  cancelButtonAction?: () => void;
}

export interface ToastType {
  id?: string;
  text: string;
  type: "success" | "error" | "warning" | "info";
}
