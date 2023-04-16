import { DaisyColorType } from "./color-types";

interface ColorInputs {
  bgColor?: DaisyColorType,
  textColor?: DaisyColorType
};

export const daisyColor = (input: ColorInputs): string => {
  const bgString = input.bgColor
    ? ` bg-${input.bgColor} `
    : "";

  const textString = input.textColor
    ? ` text-${input.textColor} `
    : "";

  return bgString + textString;
};
