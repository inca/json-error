'use strict';

module.exports = {
    errorToJSON,
    errorFromJSON,
};

function errorToJSON(err) {
    const {
        message,
        code,
        name,
        details,
        stack,
    } = err;
    return { message, code, name, details, stack };
}

function errorFromJSON(jsonErr) {
    const err = new Error(jsonErr.message);
    err.name = jsonErr.name;
    err.code = jsonErr.code;
    err.details = jsonErr.details;
    err.stack = jsonErr.stack;
    return err;
}

