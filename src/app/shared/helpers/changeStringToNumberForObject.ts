// Ready to get shared @https://www.reddit.com/r/programminghorror/
export default function changeParseableNumberStringsToNumbersForObject<T>(
  object: T
) {
  for (const keyString in object) {
    const key = keyString as keyof T;
    const value = object[key];
    if (typeof value === 'string') {
      let valueAsJSON;
      try {
        valueAsJSON = JSON.parse(value);
      } catch (e) {}
      if (valueAsJSON && Array.isArray(valueAsJSON)) {
        object[key] = valueAsJSON.map((e: string) =>
          returnNumberIfNumber(e)
        ) as unknown as T[keyof T];
      } else {
        object[key] = returnNumberIfNumber(value) as unknown as T[keyof T];
      }
    }
  }
}

function returnNumberIfNumber(value: string): Number | String {
  let numberOrString: Number | String;
  if (value != '' && !isNaN(+value)) numberOrString = +value;
  else numberOrString = value;
  return numberOrString;
}
