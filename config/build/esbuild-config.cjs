const path = require('path');
const CleanPlugin = require('./plugins/CleanPlugin.cjs');
const HTMLPlugin = require('./plugins/HTMLPlugin/HTMLPlugin.cjs');

const mode = process.env.MODE || 'development';
 
const isDev = mode === 'development';
const isProd = mode === 'production';

module.exports = {
    outdir: path.resolve(__dirname, '..', '..', 'build'),
    entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'index.jsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    minify: isProd,
    metafile: true,
    sourcemap: isDev,
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
    },
    plugins: [CleanPlugin, HTMLPlugin({title: 'My resume'})],
};



