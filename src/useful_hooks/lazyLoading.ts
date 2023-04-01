import { lazy } from 'react';
export function lazyLoad(path, namedExport) {
    return lazy(() => {
        const promise = import(path);
        if (namedExport == null) {
            return promise;
        } else {
            return promise.then((module) => ({ default: module[namedExport] }));
        }
    });
}

//Example
//lazyLoad("./components/About") // if we have default export
//lazyLoad("./components/About", "About") //if we dont have default export
