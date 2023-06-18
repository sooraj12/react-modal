import { useState } from "react";
import { Sidebar } from "../../Sidebar";
import { SidebarContentSample } from "../SidebarContentSample";

function SidebarBaseExample({ direction, disableClickOutside }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h4>Sample sidebar using Sidebar component</h4>

      <Sidebar
        show={isOpen}
        onHide={() => setIsOpen(false)}
        direction={direction}
        // dimensions={{ width: "65%", height: "92%" }}
        // containerClass="SidebarContentSample"
        disableClickOutside={disableClickOutside}
      >
        <SidebarContentSample />
      </Sidebar>
      <button type="button" onClick={() => setIsOpen(true)}>
        Click to open sidebar
      </button>
    </div>
  );
}

export { SidebarBaseExample };
