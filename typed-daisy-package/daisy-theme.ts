export const daisyTheme = (
  theme: "light"
    | "dark"
    | "cupcake"
    | "winter"
) => {
  const obj: any = {};
  obj["data-theme"] = theme;

  return obj;
};