import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useTransition, config } from "react-spring";

import { ModalContent } from "./ModalContent";
import { ModalBackdrop } from "./ModalBackdrop";
import { ModalPortal } from "./ModalPortal";

import "./BaseModal.scss";

const BaseModal = ({
  show,
  onHide,
  children,
  height,
  width,
  transition = "slide-in-left",
  dialogClass,
  disableClickOutside,
}) => {
  const modalRef = useRef();

  const handleClick = (event) => {
    if (modalRef.current === event.target && !disableClickOutside) {
      onHide(event);
    }
  };

  const backdropTransition = useTransition(show, {
    "--opacity": 0,
    from: { "--opacity": 0 },
    enter: { "--opacity": 0.5 },
    leave: { "--opacity": 0 },
    config: { ...config.gentle, clamp: true },
  });

  return (
    <ModalPortal>
      {backdropTransition((styles, item) =>
        item ? (
          <ModalBackdrop aria-modal="true" role="dialog" style={styles}>
            <ModalContent
              height={height}
              width={width}
              show={show}
              transition={transition}
              dialogClass={dialogClass}
              handleClick={handleClick}
              ref={modalRef}
            >
              {children}
            </ModalContent>
          </ModalBackdrop>
        ) : null
      )}
    </ModalPortal>
  );
};

BaseModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.element,
  height: PropTypes.string,
  width: PropTypes.string,
  transition: PropTypes.string,
  /**
   * class name given to the outer div so that css can be given under this scope and
   * helps in removing extra divs which might cause issues when using bootstrap clsses
   */
  dialogClass: PropTypes.string,
};

export { BaseModal };
