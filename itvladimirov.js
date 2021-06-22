const
  compression = require('compression'),
  http = require('http'),
  express = require('express'),
  cors = require('cors'),
  app = express(),
  api_router = require('./api/api.js');
  global.conf = require('./config');


  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());

  app.use((error, req, res, next) => {
  res.status(500).json({"error": {"status": error.status, "message": error.message}})
  })

  app.use('/api/' + conf.version + '/', api_router);
  app.use(express.static(__dirname + '/client/build'));


  let httpServer = http.createServer(app);
  httpServer.listen(conf.api_port); 
  console.log(`Worker ${process.pid} admin started port: `+conf.api_port);

  require('./app/app')


