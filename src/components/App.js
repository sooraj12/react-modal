import { ModalBaseExample, ModalExample, ModalHocExample } from "./Examples";

function App() {
  return (
    <div className="App">
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
  );
}

export { App };
