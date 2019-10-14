<<<<<<< HEAD
import { IncomingMessage ,ServerResponse } from "http"
import { parse } from 'url'
import { add, minus, divide, times } from './calculator'

export function addService(req: IncomingMessage, res:ServerResponse) {
    const url = parse(req.url, true)
    const query = url.query
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    const n1 = parseInt(query['n1'] as string ,10)
    const n2 = parseInt(query['n2'] as string ,10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    const n3 = add(n1, n2)

    const output = {
        result : n3
    }
    res.setHeader('Content-Type',"application/json")
    res.write(JSON.stringify(output))
    res.end()
    
}

export function minusService(req: IncomingMessage, res:ServerResponse){
    const url = parse(req.url, true)
    const query = url.query
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    const n1 = parseInt(query['n1'] as string ,10)
    const n2 = parseInt(query['n2'] as string ,10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    const n3 = minus(n1, n2)

    const output = {
        result : n3
    }
    res.setHeader('Content-Type',"application/json")
    res.write(JSON.stringify(output))
    res.end()
}

export function divideService(req: IncomingMessage, res:ServerResponse){
    const url = parse(req.url, true)
    const query = url.query
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    const n1 = parseInt(query['n1'] as string ,10)
    const n2 = parseInt(query['n2'] as string ,10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    const n3 = divide(n1, n2)

    const output = {
        result : n3
    }
    res.setHeader('Content-Type',"application/json")
    res.write(JSON.stringify(output))
    res.end()
}

export function timesService(req: IncomingMessage, res:ServerResponse){
    const url = parse(req.url, true)
    const query = url.query
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    const n1 = parseInt(query['n1'] as string ,10)
    const n2 = parseInt(query['n2'] as string ,10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    const n3 = times(n1, n2)

    const output = {
        result : n3
    }
    res.setHeader('Content-Type',"application/json")
    res.write(JSON.stringify(output))
    res.end()
}
=======
import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url';
import { add } from "./calculator";

export function addService(req: IncomingMessage, res: ServerResponse) {
  // parsing parameters
  const url = parse(req.url, true);
  const query = url.query;
  
  // n1 & n2 harus ada
  if (!query['n1'] || !query['n2']) {
    res.statusCode = 400;
    res.end();
    return;
  }

  // n1 & n2 harus angka
  const n1 = parseInt(query['n1'] as string, 10);
  const n2 = parseInt(query['n2'] as string, 10);
  if(isNaN(n1) || isNaN(n2)){
    res.statusCode = 400;
    res.end();
    return;
  }

  // add
  const n3 = add(n1, n2);

  // encode results
  const output = {
    result: n3
  };
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(output));
  res.end();
}
>>>>>>> f8e214eecd905d3996496473bade816a01a7ef56
