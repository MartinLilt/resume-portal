const ESBuild = require('esbuild');
const config = require('./esbuild-config.cjs');
const path = require('path');
const express = require('express');
const {EventEmitter} = require('events');

const PORT = process.env.PORT || 3000;

const app = express();
const emitter = new EventEmitter;

app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.get('/subscribe', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cashe-Control': 'no-cashe',
    };
    res.writeHead(200, headers);
    res.write('');
    emitter.on('refresh', () => {
        res.write('data: message \n\n');
    });
});

function sendMessage() {
    emitter.emit('refresh');
};

app.listen(PORT, () => console.log('Server started on http://localhost:' + PORT));



ESBuild.build({...config, 
    watch: {
    onRebuild(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log('build...');
            sendMessage();
        }
    }
}}).then((result) => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

