import * as JsonPatch from 'json-merge-patch';

export class JsonPatchGenerator {
  static generatePatch<T>(oldObject: T, newObject: T): Partial<T> {
    return (JsonPatch.generate(oldObject, newObject) ?? {}) as Partial<T>;
  }
}
