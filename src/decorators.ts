export function sealed(param: string) {
  return function (target: Function): void {
    console.log(`Sealing the constructor ${param}`);
    console.log(target);

    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function () {
    console.log('Creating new constructor');
    console.log(target);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  }

  return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
  return function(target: object, method: string, descriptor: PropertyDescriptor) {
    console.log('Writable decorator');
    console.log(target, method, descriptor);

    descriptor.writable = isWritable;
    return descriptor;
  }
}

export function timeout(ms: number = 0) {
  return function(target: object, methodName: string, descriptor: PropertyDescriptor) {
    console.log('Timeout decorator');
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      setTimeout(originalMethod.apply(this, args), ms)
    }

    return descriptor;
  }
}

export function logParameter(target: Object, methodName: string, paramIndex: number) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex)

  const key = `${methodName}_decor_params_indexes`;
  if(Array.isArray(target[key])) {
    target[key].push(paramIndex);
  } else {
    target[key] = [paramIndex];
  }
}

export function logMethod(target: object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const key = `${methodName}_decor_params_indexes`;
    const indexes = target[key];

    if(Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        if (indexes.includes(index)) {
          console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
        }
      });
    }

    const res = originalMethod.apply(this, args);
    return res;
  }

  return descriptor;
}

function makeProperty<T>(
  prototype: any,
  propertyName: string,
  getTransformer: (value: any) => T,
  setTransformer: (value: any) => T
) {
  const values = new Map<any, T>();

  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });
      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}


export function format(pref: string = 'Mr./Mrs.') {
  return function(target: Object, propertyName: string) {
    makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
  }
}

export function positiveInteger(target: object, propertyName: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function(value: number) {
    if (value < 1 || !Number.isInteger(value)) {
      throw Error('Invalid value');
    }

    originalSet.call(this, value);
  }

  return descriptor;
}