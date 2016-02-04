CallPromiseMixin = function CallPromiseMixin(methodOptions) {
    methodOptions.callPromise = function callPromise(args) {
        return new Promise((resolve, reject) => {
            this.call(args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    return methodOptions;     
}