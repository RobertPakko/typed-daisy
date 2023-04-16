import { Component } from "solid-js";
import { wind } from "tailwindest";
import { daisy } from "./../../typed-daisy-package/daisy-component";
import { daisyTheme } from "../../typed-daisy-package/daisy-theme";
import { daisyColor } from "../../typed-daisy-package/daisy-color";

const App: Component = () => {
  return (
    <div {...daisyTheme("cupcake")} class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-cyan-500",
      backgroundImageGradientEnd: "to-blue-500"
    }).class()}>
      <div class={daisy("card")() + daisyColor({bgColor: "base-100"}) + wind({boxShadow: "shadow-xl"}).class()}>
        <div class={daisy("card-body")()}>
          <article class={daisy("prose")()}>
            <h1>typed-daisy</h1>
            <div class={daisy("divider")() + wind({margin: "m-0"}).class()}/>
            <h2>⚡ Faster Development</h2>
            <p>Develop faster with added type definitions.</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default App;
