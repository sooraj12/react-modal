import { useState } from "react";

function ModalExample({ children }) {
  const [transition, setTransition] = useState("popup");
  const [disableClickOutside, setDisableClickOutside] = useState(false);

  return (
    <>
      {children({ transition, disableClickOutside })}
      <div>transitions</div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="popup"
          name="popup"
          checked={transition === "popup"}
          onChange={() => setTransition("popup")}
        />
        <label htmlFor="popup">popup</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="slide-in-left"
          name="slide-in-left"
          checked={transition === "slide-in-left"}
          onChange={() => setTransition("slide-in-left")}
        />
        <label htmlFor="slide-in-left">slide-in-left</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="slide-in-right"
          name="slide-in-right"
          checked={transition === "slide-in-right"}
          onChange={() => setTransition("slide-in-right")}
        />
        <label htmlFor="slide-in-right">slide-in-right</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="slide-in-top"
          name="slide-in-top"
          checked={transition === "slide-in-top"}
          onChange={() => setTransition("slide-in-top")}
        />
        <label htmlFor="slide-in-top">slide-in-top</label>
      </div>
      <div className="checkbox-container">
        <input
          type="radio"
          id="slide-in-bottom"
          name="slide-in-bottom"
          checked={transition === "slide-in-bottom"}
          onChange={() => setTransition("slide-in-bottom")}
        />
        <label htmlFor="slide-in-bottom">slide-in-bottom</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="disableClickOutside"
          name="disableClickOutside"
          checked={disableClickOutside}
          onChange={() => setDisableClickOutside((state) => !state)}
        />
        <label htmlFor="disableClickOutside">disableClickOutside</label>
      </div>
    </>
  );
}

export { ModalExample };
