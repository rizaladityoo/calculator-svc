import { expect } from 'chai'
import { get } from "request-promise-native"
import { StatusCodeError } from 'request-promise-native/errors'

describe('calculator', function(){
    this.timeout(5000)
    this.slow(5000)

    describe('add', function(){
        it("harusnya bisa melakukan pertambahan", async function(){
            const result = await get('http://localhost:3000/add?n1=1&n2=3', {
                json: true
            });
            expect(result).to.be.deep.eq({
                result:4
            });
        });

        it("harusnya error ketika input bukan angka", async function(){
            let error
            try {
                await get('http://localhost:3000/add?n1=4&n2=hai',{
                    json:true
                })
            } catch (err) {
                error = err
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        })

        it("harusnya error ketika input tidak ada", async function() {
            let error = null;
            try {
              await get("http://localhost:3000/add", { json: true });
            } catch (err) {
              error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
          });

        it("harusnya error ketika akses endpoint yang tidak ada", async function() {
            let error = null;
            try {
            await get("http://localhost:3000/ajduaquajfkjabfka", { json: true });
            } catch (err) {
            error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(401);
        });
    })

    describe('minus', function(){
        it("harusnya bisa melakukan pengurangan", async function(){
            const result = await get('http://localhost:3000/minus?n1=7&n2=3', {
                json: true
            });
            expect(result).to.be.deep.eq({
                result:4
            });
        });

        it("harusnya error ketika input bukan angka", async function(){
            let error
            try {
                await get('http://localhost:3000/minus?n1=4&n2=hai',{
                    json:true
                })
            } catch (err) {
                error = err
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        })

        it("harusnya error ketika input tidak ada", async function() {
            let error = null;
            try {
              await get("http://localhost:3000/minus", { json: true });
            } catch (err) {
              error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
          });
    })

    describe('divide', function(){
        it("harusnya bisa melakukan pembagian", async function(){
            const result = await get('http://localhost:3000/divide?n1=4&n2=2', {
                json: true
            });
            expect(result).to.be.deep.eq({
                result:2
            });
        });

        it("harusnya error ketika input bukan angka", async function(){
            let error
            try {
                await get('http://localhost:3000/divide?n1=4&n2=hai',{
                    json:true
                })
            } catch (err) {
                error = err
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        })

        it("harusnya error ketika input tidak ada", async function() {
            let error = null;
            try {
              await get("http://localhost:3000/divide", { json: true });
            } catch (err) {
              error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
          });

    })

    describe('times', function(){
        it("harusnya bisa melakukan pertambahan", async function(){
            const result = await get('http://localhost:3000/times?n1=2&n2=3', {
                json: true
            });
            expect(result).to.be.deep.eq({
                result:6
            });
        });

        it("harusnya error ketika input bukan angka", async function(){
            let error
            try {
                await get('http://localhost:3000/times?n1=4&n2=hai',{
                    json:true
                })
            } catch (err) {
                error = err
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        })

        it("harusnya error ketika input tidak ada", async function() {
            let error = null;
            try {
              await get("http://localhost:3000/times", { json: true });
            } catch (err) {
              error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
          });
    })

}) 