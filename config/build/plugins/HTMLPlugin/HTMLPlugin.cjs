const {rm, writeFile} = require('fs/promises');
const path = require('path');

const renderHTML = (options) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet">
      <title>${options.title}</title>
      ${options?.cssPath?.map(path => `<link href=${path} rel='stylesheet'/>`).join(" ")}
    </head>
    <body>
      <div id="app"></div>
      ${options?.jsPath?.map(path => `<script src=${path}></script>`).join(" ")}
      <script>
      const evtSource = new EventSource('http://localhost:3000/subscribe');
      evtSource.onopen = function () {console.log('open')};
      evtSource.onerror = function () {console.log('error')};
      evtSource.onmessage = function () {console.log('message')
      window.location.reload();
    };
      </script>
    </body>
  </html>
  `;
};

const preparePaths = (outputs) => {
return outputs.reduce((acc, path) => {
const [js, css] = acc;
const splitedFileName = path.split('/').pop();

if(splitedFileName?.endsWith('.js')) {
js.push(splitedFileName);
} else if(splitedFileName?.endsWith('.css')) {
  css.push(splitedFileName);
}

return acc;
}, [[], []])
} 

const HTMLPlugin = (options) => {
    return {
        name: 'HTMLPlugin',
        setup(build) {
            const outdir = build.initialOptions.outdir;
          build.onStart(async () => {
            try {
              if(outdir) {
                await rm(outdir, {recursive: true});
              }
            } catch (e) {
              console.log(e);
            }
            
          });
    
          build.onEnd(async (result) => {
            const outputs = result.metafile.outputs;
            const [jsPath, cssPath] = preparePaths(Object.keys(outputs || {}));
            if(outdir) {
                await writeFile(path.resolve(outdir, 'index.html'), options.template || renderHTML({jsPath, cssPath, ...options}));
            }
          })
        },
    };
}

module.exports = HTMLPlugin;
  
 