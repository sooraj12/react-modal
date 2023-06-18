import { useState } from "react";
import { BaseModal } from "../../BaseModal";
import { ModalContentSample } from "../ModalContentSample";

function ModalBaseExample({ transition, disableClickOutside }) {
  const [isOpen, setIsOpen] = useState(false);

  const onHide = () => setIsOpen(false);
  return (
    <div>
      <h4>Sample modal using base modal</h4>
      <BaseModal
        show={isOpen}
        onHide={onHide}
        transition={transition}
        dialogClass="ModalContentSample"
        disableClickOutside={disableClickOutside}
      >
        <ModalContentSample onHide={onHide} />
      </BaseModal>
      <button type="button" onClick={() => setIsOpen(true)}>
        Click to open modal
      </button>
    </div>
  );
}

export { ModalBaseExample };
