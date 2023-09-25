// npm run test

// npm test -- --coverage

// 1. Render a component to test  - render(<App/>)
// 2. Find elements
// 3. Interact with those elements
// 4. Assert that the results are expected

Examples:
=========================================================
import { render, screen } from '@testing-library/react';
import Header from '../Header';
test('renders learn react link', () => {
  render(<Header title="My Header"/>);
  const headerElement = screen.getByText(/My Header/i);
  expect(headerElement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
    render(<Header title="Planet"/>);
    const headerRole = screen.getByRole("heading", {name:'Cats'});
    expect(headerRole).toBeInTheDocument();
  });

 it('should render same text passed into title prop', () => {
    render(<Header title="Planet"/>);
    const headerRole = screen.getByTitle("pet");
    expect(headerRole).toBeInTheDocument();
  });

  const headerRole = screen.getByTestId("pet");

//Find By
 it('should render same text passed into title prop', async () => {
    render(<Header title="Planet"/>);
    const headerElement = await screen.findByText(/Planet/i);
    expect(headerElement).toBeInTheDocument();
  });

it('should render same text passed into title prop',  () => {
    render(<Header title="Planet"/>);
    const headerElement =  screen.queryByText(/Dog/i);
    expect(headerElement).not.toBeInTheDocument();
  });

const MockTodoFooter=({numberOfIncompleteTasks})=>{
   return <>
        <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    </>
}

it('should render task correctly', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={12}/>);
    const todoFooterElement = screen.getByText(/12 tasks left/g);
    expect(todoFooterElement).toBeInTheDocument();
  });


 <div className="todo-footer">
            <p style={{opacity:1}}>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link to="/followers">Followers</Link>
        </div>

 it('should render task correctly', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const todoFooterElement = screen.getByText(/1 task left/g);
    expect(todoFooterElement).toBeVisible();
  });

  it('should render task correctly', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).not.toBeFalsy();
  });

  it('should render task correctly', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent("1 task left");
  });

  it('should render task correctly', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
  });

it("should test textbox and button is available ",()=>{
    render(<AddInput/>);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent('Add');
    expect(screen.getByPlaceholderText("Add a new task here...")).toBeInTheDocument();
    expect(screen.getByTitle("Add")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter Todo")).toBeInTheDocument();
 });

import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from '../AddInput'

describe("This test User Input feature",()=>{

function existByRole(element){
 return expect(screen.getByRole("textbox")).toBeInTheDocument();
}


function elementExist(element){
    return    expect(screen.getByRole(element)).toBeInTheDocument();
   }

function containsText(element){
    return expect(screen.getByRole("button")).toHaveTextContent('Add');
   }




it("should test textbox and button is available ",()=>{
    render(<AddInput/>);
    existByRole("textbox");
    existByRole("button");
    containsText("Add");
 });

 it("should test textbox and button is available ",()=>{
    render(<AddInput/>);
    existByRole("textbox");
    existByRole("button");
    containsText("Add");
 });

 it("should test textbox and button is available ",()=>{
    render(<AddInput/>);
    
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent('Add');
    expect(screen.getByPlaceholderText("Add a new task here...")).toBeInTheDocument();
    expect(screen.getByTitle("Click to Add")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveProperty("title")
    expect(screen.getByLabelText("Enter Todo")).toBeInTheDocument();
    expect(screen.getByText(/Enter Todo/g)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveProperty("alt")
    expect(screen.getByRole("img")).toHaveAttribute("alt")
    expect(screen.getByRole("img")).toHaveClass("todoImg")
    expect(screen.getByAltText("reactLogo")).toBeInTheDocument();
 });

 it("should contain all the form elements",()=>{
    render(<AddInput/>);
   
    const elements=["textbox", "button", "img",
   "checkbox", "radio", "slider"];

   elements.forEach((item)=>{
    elementExist(item)
   })

 })

 const mockedSetTodo=jest.fn();

 it("should contain all the form elements",()=>{
    render(<AddInput todos={[]} 
    setTodos={mockedSetTodo}/>);
    const inputElement=screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
 })

 it("should be able to type in input",()=>{
    render(<AddInput todos={[]} 
                     setTodos={mockedSetTodo}/>);
    const inputElement=screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
        target:{value:"Go Grocery Shopping"}
    });
    expect(inputElement).toHaveValue("Go Grocery Shopping");
 })

})


====================
      const downloadInboundFile=jest.fn();
      const filename=COLUMNDEF.find(row=>row.field==="invFileName");
      console.log('filename %%%%%% ', filename)
      filename.onCellClicked(params);
      expect(downloadInboundFile).toHaveBeenCalled();