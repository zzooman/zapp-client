export class Functor<T> {
  constructor(public value: T) {}
  map<U>(f: (value: T) => U): Functor<U> {
    return new Functor(f(this.value));
  }
}
