'use strict';

interface PromiseConstructor {
    try: <T>(fn: (...args: any[]) => T, ...args: any[]) => Promise<T>;
}

Promise.try || (Promise.try = function (func, ...args) {
    if (new.target) {
        throw new TypeError("Promise.try is not a constructor");
    }
    return new this(async (resolve, reject) => {
        try {
            resolve(await func.apply(this, args));
        } catch (error) {
            reject(error);
        }
    });
});