fetch("https://fakestoreapi.com/products/")
  .then((data) => {
    // console.log(data);
    //data here is converted into that object//
    return data.json()
    //fulfilled or reject it.. assuming it fulfilled : agrument Of Completedata will pass
  })
  .then((data) => {
    // add this data to the screen
    const shop = document.getElementById("shop")
    let html = ""
    for (let i = 0; i < data.length; i++) {
      const curData = data[i]
      html += `
      <div class ="shop">
        <h1 class="title">${curData.title}</h1>
        <img src=${curData.image} alt="img" class="images">
        <p class="description">${curData.description}</p>
        <p class="price">${curData.price}</p>
      </div>`
    }
    shop.innerHTML = html

    // add a click event to all titles
    const titles = document.getElementsByClassName("title")
    for (let i = 0; i < titles.length; i++) {
      const showTitle = titles[i]
      showTitle.addEventListener("click", (evt) => {
        console.log(evt.target.innerHTML)
      })
    }

    const collection = document.getElementsByClassName("price")
    console.log(collection)

    // for every element in the collection -> add an event listener

    for (let i = 0; i < collection.length; i++) {
      const showPrice = collection[i]
      showPrice.addEventListener("click", (evt) => {
        console.log(evt.target.innerHTML)
      })
    }

    // TODO: when a user clicks on a price - it should trigger an alert that reads 'The price of this item is ${}'
  })
  .catch((err) => {
    console.log(err)
  })
