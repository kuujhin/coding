declare module "lodash" {
  function head<T>(array: T[]): T;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T): string;
  function split(
    string: string,
    separator: RegExp | string,
    limit: number
  ): string[];
  function hasPath(object: Object, path: string[] | string): boolean;
  function filter<T>(array: T[], predicate: (value: T) => boolean): T[];
  function every<T>(array: T[], predicate: (value: T) => boolean): boolean;
  function map<T, K>(array: T[], iteratee: (value: T) => K): K[];
}
