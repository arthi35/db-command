//mongo=>mongo db is also a javascript
//use b30wd=>step1
//db.movies.insertMany()=>step2
//db.movies.find({})=>step3
//db.movies.find({}).pretty()=>step4
//db.movies.find{()}.count()
//all movies wiith rating>8
//db.movies.find({rating:{$gt:8} }).pretty()
db.movies.find({ rating:{$gt:8} })
db.movies.find( {}, {name:1} ).pretty()
//projections=>keys ignoring filter
db.movies.find( {}, {name:1,rating:1} ).pretty()//inclusion =>true
db.movies.find( {}, {name:0} ).pretty()//exclusion=>false
db.movies.find({ rating:{$gt:8}},{name:1,rating:1}).pretty()
//exception
db.movies.find( {}, {_id:0,name:1,rating:1} ).pretty()//this condition is satisfied in projection
db.movies.find( {}, {name:1,rating:0} ).pretty()//=>but this condition is not satisfied
//Note:"Projection cannot be mixed like 1&0"
db.movies.find({}).sort({rating:1}).pretty()
db.movies.find({},{name:1,rating:1}).sort({rating:1}).pretty()//rating sort //ascending order
db.movies.find({},{name:1,rating:1}).sort({name:1}).pretty()//name sort//ascending order
db.movies.find({},{name:1,rating:1}).sort({name:-1}).pretty()//decendinding order(-1)

//if rating is equal for three movies first we have to give preference for rating
db.movies.find({},{_id:0,name:1,rating:1}).sort({name:1,rating:-1}).pretty()
// Eg:Documents:> db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1,name:1}).pretty()
// { "name" : "Jai Bhim", "rating" : 8.8 }
// { "name" : "Interstellar", "rating" : 8.6 }
// { "name" : "No Country for Old Men", "rating" : 8.1 }
// { "name" : "Baahubali", "rating" : 8 }
// { "name" : "Ratatouille", "rating" : 8 }
// { "name" : "The Avengers", "rating" : 8 }
// { "name" : "Iron man 2", "rating" : 7 }
db.orders.insertMany([
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
  ])
  //aggregation:-=>matching urgent orders=>$match is like where condition in SQL
  db.orders.aggregate([{$match:{status:"urgent"}}])//stage1:filtering the urgent orders
  
  db.orders.aggregate([
    {$match:{status:"urgent"}},
{$group:{_id:"$productName"}}
])
// { "_id" : "Steel beam" }
// { "_id" : "Iron rod" } =>o/p for group
//while using group underscore id is very important 
// here $(dollar sign represents to bring the product name values)
db.orders.aggregate([
  {$match:{status:"urgent"}},
{$group:{_id:"$productName",totalUrgentQuantity:{$sum:"$quantity"}},
},

])
//in this step we sholud use aggregate functions like sum,average or count
  //o/p{ "_id" : "Steel beam", "totalUrgentQuantity" : 50 }
//{ "_id" : "Iron rod", "totalUrgentQuantity" : 60 }=>output for while using aggregate function
db.orders.aggregate([
  {$match:{status:"urgent"}},
{$group:{_id:"$productName",totalUrgentQuantity:{$sum:"$quantity"}},
},
{$sort:{_id:1}}
])//while sorting in aggregate function
//o/p:{ "_id" : "Iron rod", "totalUrgentQuantity" : 60 }
// { "_id" : "Steel beam", "totalUrgentQuantity" : 50 }

db.movies.find({name:{$nin:["Baahubali","Jai Bhim"]}},{name:1})
db.movies.updateMany({ name: { $nin: ["Baahubali", "Jai Bhim"] } },{ $set: { language: "english" } });//for setting the language english
//except Baahubali and Jaibhim
db.movies.updateMany({name:{$nin:["Baahubali","Jai Bhim"]}},{$set:{language:"english"}})
db.movies.find({},{_id:0,name:1,language:1})
db.movies.findOne({name:"Jai Bhim"})//for selecting one movie
db.movies.updateOne({name:"Jai Bhim"},{$set:{language:"tamil"}})
db.movies.find({rating:8,language:"english"},{_id:0,name:1,rating:1})//command for rating:8&language:"english"
//O/P:{ "name" : "The Avengers", "rating" : 8 }
//{ "name" : "Ratatouille", "rating" : 8 }
db.movies.deleteMany({rating:8,language:"english"})// =>command for deleting
// { "acknowledged" : true, "deletedCount" : 2 }
