let express = require('express'),
    path = require('path'),
    open = require('open');
import webpack from 'webpack';
import config from '../webpack_config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: 'true',
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    }
    else{
        open(`http://localhost:${port}`);
    }
});
