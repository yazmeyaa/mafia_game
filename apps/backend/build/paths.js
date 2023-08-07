"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const module_alias_1 = require("module-alias");
(0, module_alias_1.addAliases)({
    '@app': `${__dirname}/`,
    '@models': `${__dirname}/models`,
    '@config': `${__dirname}/config`,
    '@handlers': `${__dirname}/handlers`,
    '@routes': `${__dirname}/routes`,
    '@services': `${__dirname}/services`,
    '@types': `${__dirname}/types`,
    '@utils': `${__dirname}/utils`,
    '@modules': `${__dirname}/modules`,
});
