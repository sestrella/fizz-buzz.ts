"use strict";

export default function(x: number): string {
  return transformers.reduce((result, transformer) => {
    if (transformer.apply(x)) {
      result.push(transformer.transform(x));
    }
    return result;
  }, []).join(" ");
}

const transformers: Transformer[] = [{
  apply: x => isDivisibleBy(x, 3),
  transform: () => "fizz"
}, {
  apply: x => isDivisibleBy(x, 5),
  transform: () => "buzz"
}, {
  apply: x => !(isDivisibleBy(x, 3) || isDivisibleBy(x, 5)),
  transform: x => x.toString()
}];

interface Transformer {
  apply: (x: number) => boolean;
  transform: (x: number) => string;
}

function isDivisibleBy(x: number, y: number): boolean {
  return x % y === 0;
}
