// domain/.netlify/functions/1-hello
// this function can be hosted on our local machine and it doesn't need any internet to run. This means a mini backend server is set for you and it will run
// this is far better than express if you know what you are doing
// and you don't need to call this function in our url but we may consider it as a controller function end point to hook our axios call to it
// Build scalable, dynamic applications. Deploy server-side code that works as API endpoints, runs automatically in response to events, or processes more  (this is from the netlify docs)
// I think he uses airtable as a replacement for the mongodb I am talking about
// we are exporting a function by the name of handler and netlify expects the name handler also
// every asynchronous function returns a promise and so a serverless function by default returns a promise

// event and context are been supplied by netlify
// event has a lot of information about the incoming request. so eeerrrhhh req
// context explains the context in which this function is running (we are going to use it in this story)
// netlify has authentication services and you might use the context in there
// when we console log the event or the context, we will see it in the server and not in the browser
// we need to reload the netlify function in the browser to re invoke it
// we always and always have to return a string in the body (you can also stringify them)
// this pops up in the server (Your function response must have a string body. You gave: [object Object])
// if you have any other data type apart from strings, like arrays objects and many more you must use the
// JSON.stringify()  for it
// if you don't return anything in your lambda function too there will be an error (lambda response was undefined. check your function code again)

// const person = { name: "Kwabena", age: 34 }

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "We have fixed the redirect in our code in the app js oooo hmmmm nawa for us",
  }
}

// exports.handler = (event, context, cb) => {
//   cb(null, {
//     statusCode: 200,
//     body: "Now we have to change this so that we can say for sure that it changed",
//   })
// }

// event object
// {
//   path: '/.netlify/functions/1-hello',
//   httpMethod: 'GET',
//   queryStringParameters: {},
//   multiValueQueryStringParameters: {},
//   headers: {
//     'x-forwarded-for': '::1',
//     'sec-gpc': '1',
//     'accept-language': 'en-US,en;q=0.9,sn;q=0.8,la;q=0.7',
//     'accept-encoding': 'gzip, deflate, br',
//     'sec-fetch-dest': 'document',
//     'sec-fetch-user': '?1',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-site': 'none',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
//     'upgrade-insecure-requests': '1',
//     'sec-ch-ua-platform': '"Windows"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
//     'cache-control': 'max-age=0',
//     connection: 'close',
//     host: 'localhost:8888',
//     'client-ip': '::1'
//   },
//   multiValueHeaders: {
//     'x-forwarded-for': [ '::1' ],
//     'sec-gpc': [ '1' ],
//     'accept-language': [ 'en-US,en;q=0.9,sn;q=0.8,la;q=0.7' ],
//     'accept-encoding': [ 'gzip, deflate, br' ],
//     'sec-fetch-dest': [ 'document' ],
//     'sec-fetch-user': [ '?1' ],
//     'sec-fetch-mode': [ 'navigate' ],
//     'sec-fetch-site': [ 'none' ],
//     accept: [
//       'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'    ],
//     'user-agent': [
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
//     ],
//     'upgrade-insecure-requests': [ '1' ],
//     'sec-ch-ua-platform': [ '"Windows"' ],
//     'sec-ch-ua-mobile': [ '?0' ],
//     'sec-ch-ua': [
//       '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"'
//     ],
//     'cache-control': [ 'max-age=0' ],
//     connection: [ 'close' ],
//     host: [ 'localhost:8888' ],
//     'client-ip': [ '::1' ]
//   },
//   body: undefined,
//   isBase64Encoded: false
// }
// Response with status 200 in 10 ms.

//
//
//
//
// context object
// {
//   done: [Function: bound ],
//   fail: [Function: bound ],
//   succeed: [Function: bound ],
//   getRemainingTimeInMillis: [Function: bound ],
//   callbackWaitsForEmptyEventLoop: false,
//   functionName: 'handler',
//   functionVersion: '1.0',
//   invokedFunctionArn: 'arn:aws:lambda:us-east-1:194391658336:function:handler:1.0',
//   memoryLimitInMB: 3141,
//   awsRequestId: '30ceb986-c135-5373-0d42-2dd4705930be',
//   logGroupName: 'Group name',
//   logStreamName: 'Stream name',
//   identity: null,
//   clientContext: {},
//   _stopped: false
// }
// Response with status 200 in 5 ms.

// the response from the server is JSON but we passed an object stringified
// {
//   "name": "Kwabena",
//   "age": 34
// }

// the response with i console it in the server
// { name: 'Kwabena', age: 34 }

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: "Our first netlify function that i wrote on my own"
//   }
// }
//
//
//
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// http response status codes (like the res in the node code)
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// http request
// GET, POST, PUT, DELETE

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 404,
//     body: "The response was very successful but Hmmm Nigga mess am up",
//   }
// }

// Just because you can do it, doesn't mean that you can therefore give the correct api response status codes
// if it is 404 then we must supply the error
// we must not confuse other developers using using our api
// the status text is not "Not Found"
// error.response is the whole thing but error.response.data will give you the error message you just passed
