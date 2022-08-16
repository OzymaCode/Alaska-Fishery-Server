const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())

const data = {
  products: [
    {
      name: 'Halibut',
      id: 1,
      image: 'item-halibut.jpg',
      price: 14.12,
      details:
        'Halibut yield large fillets from both sides of the fish, with the small round cheeks providing an additional source of meat. Halibut are often boiled, deep-fried or grilled while fresh. Smoking is more difficult with halibut meat than it is with salmon, due to its ultra-low fat content. Eaten fresh, the meat has a clean taste and requires little seasoning. Halibut is noted for its dense and firm texture.',
    },
    {
      name: 'Salmon',
      id: 2,
      image: 'item-salmon.jpg',
      price: 5.49,
      details:
        'To the Indigenous peoples of the Pacific Northwest Coast, salmon is considered a vital part of the diet. Specifically, the indigenous peoples of Haida Gwaii, located near former Queen Charlotte Island in British Columbia, rely on salmon as one of their main sources of food, although many other bands have fished Pacific waters for centuries. Salmon are not only ancient and unique, but it is important because it is expressed in culture, art forms, and ceremonial feasts. Annually, salmon spawn in Haida, feeding on everything on the way upstream and down. Within the Haida nation, salmon is referred to as "tsiin",[113] and is prepared in several ways including smoking, baking, frying, and making soup.',
    },
    {
      name: 'Trout',
      id: 3,
      image: 'item-trout.jpg',
      price: 9.65,
      details:
        'As a group, trout are somewhat bony, but the flesh is generally considered to be tasty. The flavor of the flesh is heavily influenced by the diet of the fish. For example, trout that have been feeding on crustaceans tend to be more flavorful than those feeding primarily on insect life. Additionally, they provide a good fight when caught with a hook and line, and are sought after recreationally. Because of their popularity, trout are often raised on fish farms and planted into heavily fished waters, in an effort to mask the effects of overfishing. Farmed trout and char are also sold commercially as food fish. Trout is sometimes prepared by smoking.',
    },
    {
      name: 'Herring',
      id: 4,
      image: 'item-herring.jpg',
      price: 4.67,
      details:
        'Herring has been a staple food source since at least 3000 BC. The fish is served numerous ways, and many regional recipes are used: eaten raw, fermented, pickled, or cured by other techniques, such as being smoked as kippers. Herring are very high in the long-chain omega-3 fatty acids EPA and DHA. They are a source of vitamin D.',
    },
    {
      name: 'Sardines',
      id: 5,
      image: 'item-sardines.jpg',
      price: 3.73,
      details:
        'Sardines or pilchards are a nutrient-rich, small, oily fish widely consumed by humans and as forage fish by larger fish species, seabirds and marine mammals. Sardines are a source of omega-3 fatty acids. Sardines are often served in cans, but can also be eaten grilled, pickled, or smoked when fresh.',
    },
  ],
}

app.get('/products', (req, res) => {
  res.json(data)
})

app.get('/products/:id?', (req, res) => {
  const paramId = req.params.id
  const queryId = req.query.id
  var id

  if (paramId && !queryId) id = paramId
  else if (queryId && !paramId) id = queryId

  const thisProduct = data.products.filter((product) => product.id == id)[0]

  res.json(thisProduct)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
