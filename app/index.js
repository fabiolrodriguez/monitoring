var express = require('express');

var prom = require('prom-client');

const register = prom.register;

var app = express();

const client = require('prom-client');

const counter = new prom.Counter({
  name: 'aula_request_total',
  help: 'Request Counter',
  labelNames: ['statusCode']
});

const gauge = new prom.Gauge({
    name: 'aula_free_bytes',
    help: 'Gauge example'
    // collect() {
    //   this.set(/* the current value */);
    // },
});

const histogram = new prom.Histogram({
  name: 'aula_request_time_sec',
  help: 'Tempo de resposta da API',
  buckets: [0.1, 0.2, 0.3, 0.4, 0.5]
});

const summary = new client.Summary({
  name: 'aula_request_time_sec_sum',
  help: 'Tempo de resposta da API',
  percentiles: [0.5, 0.9, 0.99],
});

app.get('/', function(req, res) {
    counter.labels('200').inc(); 
    counter.labels('404').inc(); 
    gauge.set(100*Math.random());

    const tempo = Math.random();

    histogram.observe(tempo);
    summary.observe(tempo);

    res.send('Hello World!');
});

app.get('/metrics', async function(req, res) {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.listen(3000);