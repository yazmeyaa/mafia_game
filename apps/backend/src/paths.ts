import 'module-alias/register';
import { addAliases } from 'module-alias';

addAliases({
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