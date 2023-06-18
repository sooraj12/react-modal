import React from "react";
import PropTypes from "prop-types";

import { BaseModal } from "../BaseModal";

import "./Sidebar.scss";

const Sidebar = ({
  show,
  onHide,
  direction,
  dimensions,
  children,
  containerClass,
  disableClickOutside,
}) => {
  const getStyles = (dir) => {
    switch (dir) {
      case "left":
        return {
          borderRadius: "0px 4px 4px 0px",
        };
      case "right":
        return {
          borderRadius: "4px 0px 0px 4px",
        };
      case "top":
        return {
          borderRadius: "0px 0px 4px 4px",
        };
      case "bottom":
        return {
          borderRadius: "4px 4px 0px 0px",
        };
      default:
        return {
          borderRadius: "0px 4px 4px 0px",
        };
    }
  };

  const getAnimation = (dir) => {
    switch (dir) {
      case "left":
        return {
          dialogClass: "d-flex flex-row align-items-center",
          transition: "slide-in-left",
        };
      case "right":
        return {
          dialogClass: "d-flex flex-row-reverse align-items-center",
          transition: "slide-in-right",
        };
      case "top":
        return {
          dialogClass: "d-flex justify-content-center",
          transition: "slide-in-top",
        };
      case "bottom":
        return {
          dialogClass: "d-flex flex-column-reverse align-items-center",
          transition: "slide-in-bottom",
        };
      default:
        return {
          dialogClass: "d-flex flex-row align-items-center",
          transition: "slide-in-left",
        };
    }
  };

  const getDefaultDimensions = (type) => {
    switch (type) {
      case "left":
        return {
          width: "25%",
          height: "100%",
        };
      case "top":
        return {
          width: "100%",
          height: "25%",
        };
      case "right":
        return {
          width: "25%",
          height: "100%",
        };
      case "bottom":
        return {
          width: "100%",
          height: "25%",
        };
      default:
    }
  };

  return (
    <BaseModal
      show={show}
      onHide={onHide}
      disableClickOutside={disableClickOutside}
      {...getDefaultDimensions(direction)}
      {...getAnimation(direction)}
      {...dimensions}
    >
      <div
        className={`modal-content w-100 h-100 ${containerClass}`}
        style={getStyles(direction)}
      >
        {React.cloneElement(children, { show, onHide })}
      </div>
    </BaseModal>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  /**
   * direction from where the sidebar is opened
   */
  direction: PropTypes.string,
  dimensions: PropTypes.object,
  children: PropTypes.element,
  containerClass: PropTypes.string,
};

export { Sidebar };
