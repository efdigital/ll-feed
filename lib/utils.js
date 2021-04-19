"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sanitize(url) {
    if (typeof (url) === 'undefined') {
        return;
    }
    return url.replace(/&/g, '&amp;');
}
exports.sanitize = sanitize;
//# sourceMappingURL=utils.js.map