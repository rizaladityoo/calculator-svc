<<<<<<< HEAD
import {createServer} from 'http'
import {parse} from 'url'
import { addService, divideService, minusService, timesService } from './calculator.service'

const server = createServer((req,res) => {
    const url = parse(req.url)
    switch (url.pathname) {
        case '/add' :
            addService(req,res) 
            break
        case '/minus' :
            minusService(req,res)
            break
        case '/divide' :
            divideService(req,res)
            break
        case '/times':
            timesService(req,res)
            break
        default :
            res.statusCode = 401
            res.end()
    }
})

server.listen(3000)
=======
import { createServer } from 'http';
import { parse } from 'url';
import { addService } from './calculator.service';

const server = createServer((req, res) => {
  const url = parse(req.url);
  switch(url.pathname){
    case '/add':
      addService(req, res);
      break;
    default:
      res.statusCode = 404;
      res.end();
  }
});

server.listen(3000);
>>>>>>> f8e214eecd905d3996496473bade816a01a7ef56
