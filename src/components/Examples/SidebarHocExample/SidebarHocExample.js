import { useState } from "react";
import { withSidebar } from "../../../hoc";
import { SidebarContentSample } from "../SidebarContentSample";

/**
 *
 * direction
 * dimensions
 * containerClass
 * disableClickOutside
 */

const WithSidebar = withSidebar({})(SidebarContentSample);

function SidebarHocExample({ direction, disableClickOutside }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h4>Sample sidebar using HOC</h4>

      <WithSidebar
        show={isOpen}
        onHide={() => setIsOpen(false)}
        direction={direction}
        // dimensions={{ width: "65%", height: "92%" }}
        // containerClass="SidebarContentSample"
        disableClickOutside={disableClickOutside}
      />
      <button type="button" onClick={() => setIsOpen(true)}>
        Click to open sidebar
      </button>
    </div>
  );
}

export { SidebarHocExample };
