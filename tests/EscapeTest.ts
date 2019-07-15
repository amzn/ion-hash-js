/// <reference types="intern" />

const { registerSuite } = intern.getPlugin('interface.object');
const { assert } = intern.getPlugin('chai');
import { escape } from '../src/IonHash';

registerSuite('escape', {
    empty: () => { test([], []); },
    noop: () => { test([0x10, 0x11, 0x12, 0x13], [0x10, 0x11, 0x12, 0x13]); },
    escape_b: () => { test([0x0b], [0x0c, 0x0b]); },
    escape_e: () => { test([0x0e], [0x0c, 0x0e]); },
    escape_c: () => { test([0x0c], [0x0c, 0x0c]); },
    escape_bec: () => { test([0x0b, 0x0e, 0x0c], [0x0c, 0x0b, 0x0c, 0x0e, 0x0c, 0x0c]); },
    escape_cc: () => { test([0x0c, 0x0c], [0x0c, 0x0c, 0x0c, 0x0c]); },
    escape_multiple: () => { test([0x0c, 0x10, 0x0c, 0x11, 0x0c, 0x12, 0x0c], [0x0c, 0x0c, 0x10, 0x0c, 0x0c, 0x11, 0x0c, 0x0c, 0x12, 0x0c, 0x0c]); },
});

let test = (actual, expected) => { assert.deepEqual(escape(actual), expected) };

