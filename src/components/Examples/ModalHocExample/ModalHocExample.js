import { useState } from "react";
import { withBaseModal } from "../../../hoc";
import { ModalContentSample } from "../ModalContentSample";

const Modal = withBaseModal({})(ModalContentSample);

/**
 *
 * disableClickOutside
 * height
 * width
 * transition
 *  slide-in-left
 *  slide-in-right
 *  slide-in-top
 *  slide-in-botton
 *  popup
 * dialogClass
 */
function ModalHocExample({ transition, disableClickOutside }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h4>Sample modal using HOC</h4>

      <Modal
        show={isOpen}
        onHide={() => setIsOpen(false)}
        transition={transition}
        dialogClass="ModalContentSample"
        disableClickOutside={disableClickOutside}
      />
      <button type="button" onClick={() => setIsOpen(true)}>
        Click to open modal
      </button>
    </div>
  );
}

export { ModalHocExample };
