const ESBuild = require('esbuild');
const config = require('./esbuild-config.cjs');

ESBuild.build(config).catch(console.log);