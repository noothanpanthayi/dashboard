// Common Matchers
// Jest uses toBe and toEqual matchers to test a value is with exact equality.

// toBe which uses === to test exact equality.

test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});
// toEqual which recursively checks every field of an object or array.

test('obj assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

// Can also test for opposite of a matcher using not.toBe.

// Truthiness
// Sometimes you need to differentiate undefined, null, and false, but in some case, no need to treat these differently.

// Here are the helpers that let you be explicit about what you want.

// toBeNull matches only null

// toBeUndefined matches only undefined

// toBeDefined: opposite of toBeUndefined

// toBeTruthy matches anything that an if statement treats as true

// toBeFalsy matches anything that an if statement treats as false

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  The number can be compared using toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan and toBeLessThanOrEqual.

The toBe and toEqual are equivalent for numbers.

test('1 + 1', () => {
  const value = 1 + 1;
  expect(value).toBeGreaterThan(3);
});
Here the test fails, because the sum is not greater than 3.

To check equality of the floating point numbers, use toBeCloseTo instead of toEqual. This will avoid the tiny rounding error that occurs while using toEqual.

test('Checking "toBe"', () => {
  const value = 0.1 + 0.2;
  expect(value).toBe(0.3);//rounding error
  expect(value).toBeCloseTo(0.3); //works.
});

You can check strings against regular expressions with toMatch.

test('There is no "I" in Fresco Play', () => {
  expect('Fresco Play').not.toMatch(/I/);
});


Jest allows you to check if an array contains a particular item using toContain:

var employee=[];
employee=['Johns', 'Liani'];
test('Expects "Johns" in employee Array', () => {
  expect(employee).toContain('Johns');
});

Use toThrow, if you want to test that a particular function throws an error when it is called.

Here is a sample test that shows four different ways of checking if a function throws an Error.

var employee= [];
function EmptyCheck() {
  if( employee.length === 0){throw new Error('Empty Array');}
}
test('Empty check', () => {
  expect(EmptyCheck).toThrow();
  expect(EmptyCheck).toThrow(Error);
  expect(EmptyCheck).toThrow('Empty Array');
  expect(EmptyCheck).toThrow(/Empty/); //uses regexp
});

Sometimes while writing tests, you have some setup work that has to happen before tests run, and you have some finishing work that needs to happen after test run. Jest provides some helper functions to handle this. Some of them are,

beforeEach and afterEach

beforeAll and afterAll

describe

If you have some work that needs to do be done frequently for many tests, you can use beforeEach and afterEach functions.




An Example for Repeating Setup
Consider you have Login tests that interact with the Employee DB.

Here we have two Login tests, where getData() is called before each test, and clearData() is called after each test.

beforeEach(()=>{
 getData();
});
afterEach(()=>{
 clearData();
});
test('John: Logins',()=>{
 expect(Login('John','**pswd**')).toBeTruthy();
});
test('Liani: Logins',()=>{
 expect((Login('Liani','**pswd**')).toBeTruthy();
});


One-Time Setup
In some cases, you only need to do setup once, toward the start of a file. 
This can be particularly annoying when the setup is asynchronous, 
so you cannot just do it inline. Jest provides beforeAll and afterAll 
to deal with this circumstance.


One-Time Setup: Example
Consider you write tests for getDetails() and getExperience() which interacts with the Employee DB.

If both initializeDB and releaseDB returned promises, and the Employee DB could be reused between tests, we can write our test code as:

beforeAll(()=>{
 return initializeDB();
});
afterAll(()=>{
 return releaseDB();
});
test('Employee DB has John',()=>{
  expect(checkEmployee('John')).toBeTruthy();
});
test('Checks experience of Liani',()=>{
  expect(getExperience('Liani')).toBeGreaterThan('2');
});

You can group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.

Scoping: An Example
For example, let us say we had not just a Cloud database, but also a Local database. We could do a different setup for different tests:

// Applies to all tests in this file
beforeAll(() => {
  return initializeCloudDB();
});
test('get updates from Cloud', () => {
  expect(isConnected('CloudDB')).toBeTruthy();
});
describe('Connecting to local', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeLocalDB();
  });
  test('Updating local with cloud', () => {
    expect(UpdateLocalDB('LocalDB','CloudDB')).toBe(true);
  });
});

General Advice
If a test fails, the first thing that you have to check is whether the test is failing when it is the only test that runs.

In Jest, it is simple to run only one test - just temporarily change that test command to a test.only:


test.only('only test that runs', () => {

  expect(true).toBe(false);

});


Mock Functions are simulated functions that mimic the behavior of the real ones by isolating functionality into small, testable units under test.

Why Mock Functions?
The real function is complex to incorporate it in a unit testing (Example, your function has many networking calls)

The result of your function is non-deterministic.


Different Ways to Mock Functions in Jest
You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.

There are two ways to mock functions in Jest.

By creating a mock function to use in test code

By writing a manual mock to override a module dependency.


Trying a Mock Function
Let us take a simple example that myFun is mocked mockedFun in test.

function myFun(){
  return "myFun called";
}
test('First Mock Function', () => {
  mockedFun =  jest.fn();
  mockedFun.mockImplementation(function () {
      return "mockedFun called";
});
console.log(mockedFun());
});
Test Result will show the mockedFun called message.

.mock property
All mock functions have the special property called .mock, the place where all information about how the function that has been called is kept.

These mock members are very useful in tests to assert how these functions get called, or instantiated:

test('.mock property example', () => {
 const mockFn = jest.fn();
 const a = new mockFn();
 console.log(mockFn.mock.instances.length); // is 1
});



Available Mock Methods
There are many functions related to mock in Jest. Let us check few of them.

mock.calls

mock.instances

mockClear()

mockReset()

mockRestore()

mockImplementation(fn) and mockImplementationOnce(fn)

mockReturnValue(val) and mockReturnValueOnce(val)


mock.calls array
Jest records all calls that have been made during mock function.

Each call is represented by an array of arguments that were passed during the call.

For example, a mock function f is called twice, with the arguments f(arg1, arg2), and then with the arguments f(arg3, arg4) would have a mock.calls array like below:

[ [arg1,arg2],

[arg3,arg4], ];



mock.instances array
An array that records all the object instances that have been instantiated from the mock function using new.
Below example has a mock function that has been instantiated twice.


test('.mock property example',()=>{

 const mockFn = jest.fn();

 const a = new mockFn();

 const b = new mockFn();

 console.log(mockFn.mock.instances[0] === a);//true

 console.log(mockFn.mock.instances[1] === a);//false

});

mockClear() and mockReset()
mockClear()
Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.

Useful when you have to clean up a mock's usage data between two assertions.

mockReset()
Resets all information stored in the mock, also any inital implementation given.

Useful when you want to completely restore a mock back to its initial state.


mockRestore()
Will Remove the mock and restores the initial implementation.

Helpful when you have to mock functions in particular test cases and restore the original implementation in others.

Only works when mock was created with jest.spyOn. Thus you have to take care of restoration yourself when manually assigning jest.fn().


Mock Function Implementation
Function's actual implementations can be mocked in test using,

mockImplementation(fn) - it allows to change the implementation for testing.

mockImplementationOnce(fn) - it allows changing the implementation only once in the entire testing process.

Mock Function Implementation Example
This Example explains the usage of mockImplementation and mockImplementationOnce.


function real(){

  return "real";

}

test('Mock Implementation', () => {

 mocked = jest.fn();

 mocked.mockImplementation(function () {

   return "mocked";

 });

 mocked.mockImplementationOnce(function () {

   return "mocked_once";

});

console.log(real()); //real

console.log(mocked()); //mocked_once

console.log(mocked(),mocked()); //mocked mocked

});

Mock Return Values
Mock functions can be used to inject test values into your code during a test using following functions,

mockReturnValue(value) returns the value when mock function is called.

mockReturnValueOnce(value) returns the value only once when mock function is called.

Mock Return Values Example
This Example explains the usage of mockReturnValueOnce and mockReturnValue.


test('Mock Returns',()=>{

const myMock = jest.fn();

myMock.mockReturnValueOnce("only once : mocked return ")

 .mockReturnValue('mocked return');

console.log(myMock()); //only once : mocked return 

console.log(myMock()); //mocked return

console.log(myMock()); //mocked return

});


What is Callback Function?
Callback is a function that is passed to another function as a parameter, and the callback function is called inside the function.

Consider a function fetchData(Callback), which fetches status information and calls callback(status), when it is complete.

function fetchData(callback) {
  setTimeout(function () {
    callback({status: 'completed'}); 
  }, 2000);
}


Callbacks: Handling Asynchronous Tests
Instead of placing the test in a function with an empty argument, employ a single argument called done.

Jest will wait until the done callback is called before finishing the test.

test('fetch data returns status completed', done => {
  function callback(data) {
    expect(data.status).toBe('completed');
    done();
 }
  fetchData(callback);
});
Above test checks the status of fetchData function. You can also change the status in order to understand the concept better.

Promises: Handling Asynchronous Tests
If your code uses promises, just return a promise, and Jest will wait for that promise to resolve. The test will fail automatically if the promise is rejected.

Consider the following functions which return promises.

function first() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('first');
         resolve('first');}, 2000);
   });
   return promise;
}
function second() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('second');
         resolve('second');}, 2000);
   });
   return promise;
};



.resolves: Handling Asynchronous Tests
You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

test('Promise to be resolved', () => {
  expect(first)
   .then(second)
   .resolves.toBe('second');
});




.rejects: Handling Asynchronous Tests
If you expect a promise to be rejected use the .rejects matcher. If the promise is fulfilled, the test will automatically fail.

function second() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('second');
         reject('error in second');}, 2000);
   });
   return promise;
};
test('Promise to be rejected', () => {
  expect(first)
   .then(second)
   .rejects.toBe('error');
});

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

If you are just getting started with React, we recommend you to go through the course ReactJS first.


