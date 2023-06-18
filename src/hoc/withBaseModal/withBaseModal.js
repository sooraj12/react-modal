import React from "react";
import { BaseModal } from "../../components/BaseModal";

function withBaseModal(options) {
  return function (Component) {
    return function (props) {
      const { show, onHide, disableClickOutside } = props;
      return (
        <BaseModal
          {...options}
          show={show}
          onHide={onHide}
          disableClickOutside={disableClickOutside}
          {...props}
        >
          <Component {...props} />
        </BaseModal>
      );
    };
  };
}

export { withBaseModal };
