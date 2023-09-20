import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import { useGetProductsQuery } from '../../redux/api/productsapi';
import Shopping from './Shopping'
import { renderWithProviders } from './utils/test-utils';
import { BrowserRouter as Router} from 'react-router-dom'
import { data } from './utils/mockdata';
import { mockhandler } from './utils/mockServer';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';



// beforeEach(() => {
//     useGetProductsQuery.mockClear();
//   });
// mockhandler('https://dummyjson.com/products', data);

const responseData = rest.get(
    'https://dummyjson.com/products',
     (req, res, ctx) => {
       return res(
         ctx.json(data),
       )
     },
   )
   const handlers= [responseData]; //handlers stores multiple request, responses without ...
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

it("should render the products on load of the page ", async()=>{


    renderWithProviders(<Router><Shopping/></Router>)

    await waitFor(()=>{
       screen.debug();
       expect(screen.getByText("Galaxy A71")).toBeInTheDocument();
       expect(data.products.length).toBe(2);
    })

   
})

