interface PromiseConstructor {
    try: <T>(fn: (...args: any[]) => T, ...args: any[]) => Promise<T>;
}

Promise.try || (Promise.try = function (func, ...args) {
    if(new.target) {
        throw new TypeError("Promise.try is not a constructor");
    }
    return new this((resolve, reject) => {
        try {
            resolve(func.apply(this, args));
        } catch (error) {
            reject(error);
        }
    });
});