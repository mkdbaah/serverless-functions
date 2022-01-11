// const result = document.querySelector(".result")

// const fetchData = async () => {
//   try {
//     const { data } = await axios.get("http://localhost:8888/.netlify/functions/1-hello")
//     // console.log(data)
//     result.textContent = data
//   } catch (error) {
//     console.log("INVOKED")
//     // console.log(error.response)
//     result.innerHTML = error.response.data
//   }
// }

// fetchData()

// const gsadg = () => {
//   console.log("FUCK YOU")
// }
// gsadg()
// opening the html file with live server gave me cors error

// you can console.log the whole object aside from the data alone and explore it well. it has request, headers, config, data, status, statusText and so much more so before destructuring the data make sure you console log everything to see first

// if in the netlify function you decide to set the status code to 404, and you set the tyr catch blcok and set the error handler  the body of he browser will not show anything and tit will go to the console
// the try catch block will catch an error you set the status code to be 404
// the whole "huge" data thing went into the console when i logged error.response to the console
// he changed the body to resource not found and that appeared in the data side

// we can even make the statusCode 400 and it will be bad request
// 401 will be unauthorized

// when i intentionally mispelt functions (funtion) it gave me 404 error not found and the not found also appeared in my browser result inner html side  "how cool is this"

const result = document.querySelector(".result")

const fetchData = async () => {
  try {
    // const { data } = await axios.get("/.netlify/function/1-hello")
    const { data } = await axios.get("/api/1-hello")
    result.textContent = data
  } catch (error) {
    // console.log(error.response.data)
    result.textContent = error.response.data
  }
}

fetchData()

// if this is redux i guess this will the action

// we are redirecting from the browser to the netlify function
// if we pass the real path (without the shortcut) it will still work
// the redirects even comes from the browser and you will see it with your naked eye
// when we use the redirect all that we get is 301 (moved permanently) and it redirects to give us a status code of 200
// browser network tab is very good for finding information about the request and the response
// we can change the status code to 200 so that the url will not change any more (so you you don't see two different function calls in the url or in the network tab but the one comes already has a status code of 200 and not 301)
// and also the value in the address bar did not change as well

// both the http://localhost:8888/api/1-hello  and http://localhost:8888/.netlify/functions/1-hello all works in the browser

// we also have axios installed in the node modules and we will use that too as well
// you can disable it in javascript suggest auto imports in the settings

// you  can use node for api calls to third party apis using axios or using node fetch
