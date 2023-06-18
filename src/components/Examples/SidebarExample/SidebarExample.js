import { useState } from "react";

function SidebarExample({ children }) {
  const [direction, setDirection] = useState("left");
  const [disableClickOutside, setDisableClickOutside] = useState(false);

  return (
    <>
      {children({ direction, disableClickOutside })}
      <div>direction</div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="left"
          name="left"
          checked={direction === "left"}
          onChange={() => setDirection("left")}
        />
        <label htmlFor="left">left</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="right"
          name="right"
          checked={direction === "right"}
          onChange={() => setDirection("right")}
        />
        <label htmlFor="right">right</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="top"
          name="top"
          checked={direction === "top"}
          onChange={() => setDirection("top")}
        />
        <label htmlFor="top">top</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="bottom"
          name="bottom"
          checked={direction === "bottom"}
          onChange={() => setDirection("bottom")}
        />
        <label htmlFor="bottom">bottom</label>
      </div>

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="disableClickOutside--sidebar"
          name="disableClickOutside--sidebar"
          checked={disableClickOutside}
          onChange={() => setDisableClickOutside((state) => !state)}
        />
        <label htmlFor="disableClickOutside--sidebar">
          disableClickOutside
        </label>
      </div>
    </>
  );
}

export { SidebarExample };
