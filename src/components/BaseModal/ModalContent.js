import React from "react";
import FocusLock from "react-focus-lock";
import { animated, useTransition, config } from "react-spring";

const ModalContent = React.forwardRef(
  (
    { width, height, children, show, transition, dialogClass, handleClick },
    ref
  ) => {
    const getAnimationProperties = (type) => {
      if (type === "slide-in-left") {
        return {
          from: { transform: "translateX(-100%)" },
          enter: { transform: "translateX(0%)" },
          leave: { transform: "translateX(-100%)" },
          config: config.slow,
          unique: true,
        };
      } else if (type === "slide-in-top") {
        return {
          from: { transform: "translateY(-100%)" },
          enter: { transform: "translateY(0%)" },
          leave: { transform: "translateY(-100%)" },
          config: config.slow,
          unique: true,
        };
      } else if (type === "slide-in-right") {
        return {
          from: { transform: "translateX(100%)" },
          enter: { transform: "translateX(0%)" },
          leave: { transform: "translateX(100%)" },
          config: config.slow,
          unique: true,
        };
      } else if (type === "slide-in-bottom") {
        return {
          from: { transform: "translateY(100%)" },
          enter: { transform: "translateY(0%)" },
          leave: { transform: "translateY(100%)" },
          config: config.slow,
          unique: true,
        };
      } else if (type === "popup") {
        return {
          from: {
            opacity: 0,
            s: 0.7,
          },
          enter: {
            opacity: 1,
            s: 1,
          },
          leave: {
            opacity: 0,
            s: 0.7,
          },
          config: {
            ...config.gentle,
            clamp: true,
          },
        };
      }
    };

    const animation = useTransition(show, {
      ...getAnimationProperties(transition),
    });

    const getStyles = (animation, type) => {
      if (
        type === "slide-in-left" ||
        type === "slide-in-right" ||
        type === "slide-in-top" ||
        type === "slide-in-bottom"
      ) {
        return animation;
      } else if (type === "popup") {
        return {
          opacity: animation.opacity,
          transform: animation.s.interpolate((s) => `scale(${s})`),
        };
      }
    };

    /**
     * focus lock will keep the focus within the modal when it is open
     */
    return (
      <>
        {animation((styles, item) => {
          return (
            item && (
              <FocusLock returnFocus={true}>
                <div
                  className={`modal ${
                    dialogClass
                      ? dialogClass
                      : "d-flex justify-content-center align-items-center"
                  }`}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="title"
                  aria-hidden="true"
                  aria-modal="true"
                  ref={ref}
                  onClick={handleClick}
                >
                  <animated.div
                    className="modal-container d-flex justify-content-center"
                    role="document"
                    style={{
                      width: width,
                      height: height,
                      ...getStyles(styles, transition),
                    }}
                  >
                    {React.cloneElement(children)}
                  </animated.div>
                </div>
              </FocusLock>
            )
          );
        })}
      </>
    );
  }
);

export { ModalContent };
