import React, { forwardRef } from "react";
import { animated } from "react-spring";
import { useBodyScrollLock } from "../../hooks";

const ModalBackdrop = forwardRef(
  ({ className, onClick, children, ...props }, ref) => {
    useBodyScrollLock(true);
    return (
      <animated.div ref={ref} className="ModalBackdrop" {...props}>
        {children}
      </animated.div>
    );
  }
);

export { ModalBackdrop };
