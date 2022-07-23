const {rm} = require('fs/promises');

const CleanPlugin = {
    name: 'CleanPlugin',
    setup(build) {
      build.onStart(async () => {
        try {
          const outdir = build.initialOptions.outdir;
          if(outdir) {
            await rm(outdir, {recursive: true});
          }
        } catch (e) {
          console.log(e);
        }
        
      });
    },
};

module.exports = CleanPlugin;
  
 