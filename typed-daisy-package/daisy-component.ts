import { DaisyComponents } from "./component-const";

type DaisyKeys<T> = T extends keyof typeof DaisyComponents ? keyof typeof DaisyComponents[T] : never;

export const daisy = <T extends keyof typeof DaisyComponents>(componentKey: T) => {
  return (modifiers?: DaisyKeys<T>[]) => ` ${[componentKey.toString()].concat((modifiers ?? []).map(x => DaisyComponents[componentKey][x] as string)).join(" ")} `;
};
