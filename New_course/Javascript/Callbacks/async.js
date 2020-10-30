// Call Stack
/*
    Mechanism the JS interpreter uses to keep track of its place
    in a script that calls multiple functions.

    Functions are stored in Stack and executed from it.
*/

// WebAPIs
/*
    - JS is single thread.
    - Browsers come with Web APIs that are able to handle
    certain tasks in the background
    - JS call stack recognizes these web API functions and
    passes them off to the browser to take care of
    - Once the browser finishes those tasks, they return and are
    pushed onto the stack as a callback.


    CallStack-WebAPI-CallbackQueue

*/

// Callback Hell
/*
   Using lots of dependent callback functions.

   - Async and Promise Features handle this issue.
*/

// Promises
/*
    - An object representing the eventual completion(success) or failure
    of an asynchronous operation.

    - Three state: pending, resolve, rejected
*/
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout!!!");
            } else {
                resolve(`Data from ${url}`);
            }
        }, delay);
    });
}

// Promise chaining
fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("Promise resolved!(page1)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then((data) => {
        console.log("Promise resolved!(page2)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page3");
    }).then((data) => {
        console.log("Promise resolved!(page3)");
        console.log(data);
    })
    .catch((error) => {
        console.log("Request failed!!!");
        console.log(error);
    });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay);
    });
}


delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('white', 1000))

// Async Functions

/*
    Newer and cleaner syntax for working with async code!

    keywords: async, await

    - Always return a promise
    - If the func returns a value, promise will be resolved with that value
    - If the func throws an exception, promise will be rejected.

    Syntax:
        - async function(){}
        - const blabla = async () => {}
        - async function () { throw new Error("Error Message");}

    - await keyword inside of function declared with async
    - await pause the execution of func, wating for promise to be resolved
    - Only await promises ot functions that return a promise
*/

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgi') return 'Welcome!'
    throw 'Invalid Password'
}

login('bambam')
    .then(msg => {
        console.log("Logged In")
        console.log(msg);
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

async function rainbow() {
    await delayedColorChange('green', 10000);
    await delayedColorChange('magenta', 1000);
    await delayedColorChange('violet', 1000);
    await delayedColorChange('orange', 1000);
    return "All Done";
}

async function printRainbow() {
    let data = await rainbow();
    console.log(data);
}

printRainbow();

async function fakeRequest() {
    try {
        let data1 = await fakeRequestPromise("/page1");
        console.log(data1);
        let data2 = await fakeRequestPromise("/page2");
        console.log(data2);
    } catch (e) {
        console.log("Caught error");
        console.log("Error: ", e);
    }
}