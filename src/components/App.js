import {
  ModalBaseExample,
  ModalExample,
  ModalHocExample,
  SidebarBaseExample,
  SidebarExample,
  SidebarHocExample,
} from "./Examples";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <ModalExample>
            {({ transition, disableClickOutside }) => {
              return (
                <>
                  <ModalHocExample
                    transition={transition}
                    disableClickOutside={disableClickOutside}
                  />
                  <ModalBaseExample
                    transition={transition}
                    disableClickOutside={disableClickOutside}
                  />
                </>
              );
            }}
          </ModalExample>
        </div>
        <div className="col-sm-6">
          <SidebarExample>
            {({ direction, disableClickOutside }) => {
              return (
                <>
                  <SidebarHocExample
                    direction={direction}
                    disableClickOutside={disableClickOutside}
                  />
                  <SidebarBaseExample
                    direction={direction}
                    disableClickOutside={disableClickOutside}
                  />
                </>
              );
            }}
          </SidebarExample>
        </div>
      </div>
    </div>
  );
}

export { App };
