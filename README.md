## Synopsis

```es6
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
```

Yes, it just copies a bunch of fields to/from an object and returns it.

## OMG WHY?!

1. Because `Error` isn't JSON-serializable, even in 2017.

2. Because when you parse error-ish object from JSON, you shouldn't throw it like that, you should throw an instance of `Error`.
