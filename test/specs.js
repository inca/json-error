'use strict';

const expect = require('expect');

const {
    errorToJSON,
    errorFromJSON,
} = require('..');

describe('errorToJSON', () => {

    it('converts errors to JSON', () => {
        const err = new TypeError('WTF?');
        err.details = { answer: 42 };
        err.code = 'unknown';
        const jsonErr = JSON.parse(JSON.stringify(errorToJSON(err)));
        expect(jsonErr.message).toEqual('WTF?');
        expect(jsonErr.name).toEqual('TypeError');
        expect(jsonErr.code).toEqual('unknown');
        expect(jsonErr.details).toExist();
        expect(jsonErr.details.answer).toEqual(42);
        expect(jsonErr.stack).toExist();
    });

});

describe('errorFromJSON', () => {

    it('converts errors from JSON', () => {
        const jsonErr = {
            message: 'WTF?',
            name: 'TypeError',
            code: 'unknown',
            details: {
                answer: 42,
            },
            stack: 'some stack',
        };
        const err = errorFromJSON(jsonErr);
        expect(err instanceof Error).toEqual(true);
        expect(err.message).toEqual('WTF?');
        expect(err.name).toEqual('TypeError');
        expect(err.code).toEqual('unknown');
        expect(err.details).toExist();
        expect(err.details.answer).toEqual(42);
        expect(err.stack).toExist();
    });

});

