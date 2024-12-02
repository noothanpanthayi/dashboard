import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const mockhandler=(url:any, data:any)=>{
  
    const responseData = rest.get(
       url,
        (req, res, ctx) => {
          return res.once(
            ctx.json(data),
          )
        },
      )
      
      const handlers:any = [responseData]; //handlers stores multiple request, responses without ...
      const server= setupServer(...handlers);

      beforeAll(() => {
        server.listen() 
      })

      afterEach(() => { 
        server.resetHandlers()
      })

      afterAll(() => {
        server.close()
      })


}
