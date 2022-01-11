// [
//   // the images where coming from airtables and not from the server that we will deploy the on (just saying)
//   // serverless functions can be used in a lot of ways
//   ({
//     id: "recmg2a1ctaEJNZhu",
//     name: "utopia sofa",
//     image: {
//       url: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
//     },
//     price: 39.95,
//   },
//   {
//     id: "recvKMNR3YFw0bEt3",
//     name: "entertainment center",
//     image: {
//       url: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
//     },
//     price: 29.98,
//   },
//   {
//     id: "recxaXFy5IW539sgM",
//     name: "albany sectional",
//     image: {
//       url: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
//     },
//     price: 10.99,
//   },
//   {
//     id: "recyqtRglGNGtO4Q5",
//     name: "leather sofa",
//     image: {
//       url: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
//     },
//     price: 9.99,
//   })
// ]

// we can the data from airtables as well but for the mean time we can get it from a data sitting on our localhost
// in this case our back end is the functions folder (just left with the database) or we can say our gateway to the backend is all in the functions folder
// we have to write code from here to link up with the serverless functions which is even possible it can take us to a database
// if you create a products.json data and host it means that you can use it for a small project that is not scalable at all
const result = document.querySelector(".result")

const fetchData = async (event, context) => {
  try {
    const { data } = await axios.get("/api/2-basic-api")
    const products = data
      .map((product) => {
        console.log(product)
        const {
          name,
          price,
          image: { url },
        } = product
        return `
        <article class="product">
          <img src="${url}" alt="${name}" />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
          </div>
        </article>
      `
      })
      .join("")
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>There was an error. Please try again later</h4>`
  }
}

fetchData()

// front end request to the serverless function and the serverless function request to the database and comes back with the data from the database and the front end takes it and parse it to the user
// when you console log the data directly from the serverless function (in the frontend) you will see an array of objects
// when you map through and console log, they come as individual objects now
// we are using a template literal in the javascript file (interesting hah!)

// the above gives data and this one parses the data into html
