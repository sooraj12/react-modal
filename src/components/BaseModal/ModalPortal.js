import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

function ModalPortal({ children }) {
  return createPortal(children, modalRoot);
}

export { ModalPortal };
