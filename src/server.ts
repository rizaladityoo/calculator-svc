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