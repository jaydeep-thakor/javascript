
// show dbs // to see all the database

use("eCommerce") // to get into particular db to perform operation
// console.log(db)

db.createCollection("orders"); // to create a collection

// ************************************** create **************************************

// to insert a document to selected database's collection
db.orders.insertOne({ 
  productId: 5001,
  quantity: 2,
  price: 1200,
  totalAmount: 2400,
  orderStatus: "CONFIRMED",
  createdAt: "2026-01-18"
})

// to insert multiple document at a time to selected database's collection
db.orders.insertMany([
  {
    productId: 5001,
    quantity: 2,
    price: 1200,
    totalAmount: 2400,
    orderStatus: "CONFIRMED",
    createdAt: "2026-01-18"
  },
  {
    productId: 5002,
    quantity: 1,
    price: 800,
    totalAmount: 800,
    orderStatus: "PENDING",
    createdAt: "2026-01-18"
  },
  {
    productId: 5003,
    quantity: 3,
    price: 500,
    totalAmount: 1500,
    orderStatus: "SHIPPED",
    createdAt: "2026-01-17"
  },
  {
    productId: 5004,
    quantity: 1,
    price: 2500,
    totalAmount: 2500,
    orderStatus: "DELIVERED",
    createdAt: "2026-01-16"
  },
  {
    productId: 5005,
    quantity: 4,
    price: 300,
    totalAmount: 1200,
    orderStatus: "CONFIRMED",
    createdAt: "2026-01-16"
  },
  {
    productId: 5006,
    quantity: 2,
    price: 1500,
    totalAmount: 3000,
    orderStatus: "CANCELLED",
    createdAt: "2026-01-15"
  },
  {
    productId: 5007,
    quantity: 5,
    price: 200,
    totalAmount: 1000,
    orderStatus: "PENDING",
    createdAt: "2026-01-15"
  },
  {
    productId: 5008,
    quantity: 1,
    price: 999,
    totalAmount: 999,
    orderStatus: "CONFIRMED",
    createdAt: "2026-01-14"
  },
  {
    productId: 5009,
    quantity: 2,
    price: 1800,
    totalAmount: 3600,
    orderStatus: "SHIPPED",
    createdAt: "2026-01-14"
  },
  {
    productId: 5010,
    quantity: 3,
    price: 700,
    totalAmount: 2100,
    orderStatus: "DELIVERED",
    createdAt: "2026-01-13"
  }
]
)


// ************************************** read **************************************

// to get all the documents
// let a = db.orders.find()
// console.log(a) 

// to get documents where quantity is 1
// let a = db.orders.find({quantity: 1})
// console.log(a) 
// console.log(a.count()) // to get to know the the number of documents
// console.log(a.toArray())

// to get the first document where orderStatus is confirmed, gives first one
// let b = db.orders.findOne({orderStatus: 'CONFIRMED'})
// console.log(b)


// ************************************** update **************************************

// let pendingOrders = db.orders.find({orderStatus: "PENDING"})
// console.log(pendingOrders)
// console.log(pendingOrders.count())

// to modify first document where order status is pending
// db.orders.updateOne({orderStatus: 'PENDING'}, {$set:{orderStatus: 'CONFIRMED'}})

// to modify all the documents where order status is pending
// db.orders.updateMany({orderStatus: 'PENDING'}, {$set:{orderStatus: 'CONFIRMED'}})


// ************************************** delete **************************************

// to delete first document where createdAt date is 2026-01-14
// db.orders.deleteOne({createdAt: "2026-01-14"})

// to delete all the documents where createdAt date is 2026-01-14
// db.orders.deleteMany({createdAt: "2026-01-14"})

