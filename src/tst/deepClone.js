const deepClone = (objToClone) => {
    if (typeof objToClone !== 'object' || objToClone === null) {
        return objToClone;
    }

    const newObject = Array.isArray(objToClone) ? [] : {};

    for (let key in objToClone) {
        const value = objToClone[key];
        newObject[key] = deepClone(value);
    }

    return newObject;
};

//new function in JS : structuredClone // although has problems if field is function
