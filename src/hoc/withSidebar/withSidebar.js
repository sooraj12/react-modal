import React from "react";

import { Sidebar } from "../../components/Sidebar";

function withSidebar(options) {
  return function (Component) {
    return function (props) {
      const { show, onHide } = props;
      return (
        <Sidebar show={show} onHide={onHide} {...options} {...props}>
          <Component {...props} />
        </Sidebar>
      );
    };
  };
}

export { withSidebar };
