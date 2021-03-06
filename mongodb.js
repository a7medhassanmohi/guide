//! mongodb
//! mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//? password: m001-mongodb-basics

/* show dbs
?use<database name>
?show collections
?db.<collection name>.find({})
?db.<collection name>.find({}).count()
?db.<collection name>.find({}).pretty()
? db.dropDatabase()
? db.myCollection.drop()
? db .stats()

*/
//~ import data
/* 
1-first go to the directory file you want to add
2- type
    mongoimport <name of file.json > -d <name of database> -c <name of collection > --jsonArray --drop 

    ! --jsonArray ==> mean insert all document
    ! --drop  ==> mean if the collection exist drop it first
*/

//~ insert collection
/* 
?db.<collection name>.insert({},{ordered:true})

?db.<collection name>.insert([{},{}]) ==> insert multiple document
!note
Optional. If true, perform an ordered insert of the documents in the array, and if an error occurs with one of documents, MongoDB will return without processing the remaining documents in the array.

If false, perform an unordered insert, and if an error occurs with one of documents, continue processing the remaining documents in the array.

Defaults to true.

!writeconcern



*/

//~ update collections

/* 
$set $push $inc $min $max $mul ,$pull $pop
$unset  ==>to drop field 
    db.c.updateMany({text:"ahm"},{$unset:{phone:""}})

$rename     ==> to rename field    
    db.c.updateMany({text:"ahm"},{$rename:{phone:"total age"}})

$upsert  ==> if you update document doesnt exist so there is no update happen ,if he doesn't find this document  you want for him to insert it ,default value for upsert false    

   db.c.updateMany({text:"ahm"},{$set:{phone:"total age"}},{upsert:true}) 



 db.c.updateMany({text:"ahm"},{$set:{"phone.$.age":5}},{upsert:true}) 

 db.c.updateMany({text:"ahm"},{$inc:{"phone.$[].age":-1}})
 
 
 db.c.updateMany({text:"ahm"},{$push:{hoppies:{$each:[{},{}]}}})  =>> to push multiple document in array

db.c.updateMany({text:"ahm"},{$pull:{phone:{title:"hikinng"}}})  ==> to remove elemnt in array

db.c.updateMany({text:"ahm"},{$pop:{phone:1}})  ==> to remove last element in array



? $inc: Update all documents in the zips collection where the city field is equal to "HUDSON" by adding 10 to the current value of the "pop" field.
db.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": 10 } })
..........................................

? $set: Update a single document in the zips collection where the zip field is equal to "12534" by setting the value of the "pop" field to 17630 and if  not find the field he will create it.
db.zips.updateOne({ "zip": "12534" }, { "$set": { "pop": 17630 } })
!db.zips.updateOne({ "zip": "12534" },  { "pop": 17630 } ) give you an error you must put $set

....................................
? $push: Update one document in the grades collection where the student_id is ``250`` *, and the class_id field is 339 , by adding a document element to the "scores" array.

db.grades.updateOne({ "student_id": 250, "class_id": 339 },
                    { "$push": { "scores": { "type": "extra credit",
                                             "score": 100 }
                                }
                     })

! dont use update
db.zips.update({ "zip": "12534" }, { "pop": 17630 } )    it will change only the first documet and it will replace all data with  only Pop:17630


*/

//~ deleting
/*
db.inspections.deleteMany({ "test": 1 })
db.inspection.drop()
 */

//~ reading data

/* 
~ $in 
db,collection .find({runtime:{$in:[30,40]}}) 
? this mean that we search for runtime that equal 30 or 40

~ $nin 
db,collection .find({runtime:{$nin:[30,40]}}) 
? this mean that we search for runtime that not equal 30 or 40

*/

//~ Query Operators - Comparison operator
/* 
eq-ne,gt,lt,gte,lte
ex db.trips.find({ "tripduration": { "$lte" : 70 },"usertype": { "$ne": "Subscriber" } }).pretty()

*/

//~Query Operators - Logical operator
/* 
$and: 
$or:
$nor:
$not:
 ?db.routes.find({"$and":[{"id":{"$gt":10}},{"id":{"$lt":100}}]})

?db.routes.find({"id":{"$gt":10,"$lt":100}})
*/

//~Element operator
/* 
1- $exists
ex  db.user.find({age:{$exist:true}}) ==> find document that exist age field

ex db.user.find({age:{$exist:true,$ne:null}}) ==> find document that exist age field and not equal null

2-$type

ex db.user.find({age:{$type:"number"}}) ==> find document that  age field are number type

ex db.user.find({age:{$type:["number","string"]}}) ==> find 
*/

//~
/* 

*/

//~ Expressive Query operator  (evaluation operator ) (?????? ???????? ????????????  ???????????? ?????? ?????? ???? doucment)
/* 
1-$expr 
db.trips.find({ "$expr": { "$eq": [ "$end station id", "$start station id"] } }).count()

db.trips.find({ "$expr": { "$and": [ { "$gt": [ "$tripduration", 1200 ]},{ "$eq": [ "$end station id", "$start station id" ]}]}}).count()

2-$regex
ex db.collection.find({text:{$regex:/musical/i})  // not prefer to search with regex due to performance


*/

//~ array operator
/* 
1-$all , $size,$elemMatch

?db.listingsAndReviews.find({"amenities":"ahmed"}) ==> you can search in array using this syntax monogodb is smart enough to know that is array and i wnt search for this value inside the array

?db.listingsAndReviews.find({"amenities":{"$size": 20,"$all":["a,b,c"]}}) ==> you are looking for an array with certain size =20 ,and contain a,b,c no mater the order

?db.listingsAndReviews.find({"amenities":{"$all":["a,b,c"]}}) ==>ou are looking for an array contain at least a,b,c  no mater the  order of them

?db.grades.find({ "class_id": 431 },{ "scores": { "$elemMatch": { "score": { "$gt": 85 } } }}).pretty()

!Array Operators and Projection
db.grades.find({query},{projection})
db.grades.find({query},{<field>:1})
db.grades.find({query},{<field>:0})
~projection with arrau
db.grades.find({geners:"ahmed"},{"geners.$:1"})

!Array Operators and Sub-Documents\

db.trips.findOne({ "start station location.type": "Point" })

db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
                  { "name": 1 }).pretty()

db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": { "$regex": "CEO" } },
                  { "name": 1 }).count()


db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": {"$regex": "CEO" } },
                  { "name": 1 }).pretty()

db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).pretty()

db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).count()


*/

//~Aggregation Framework
/* 
?db.listingsAndReviews.find({ "amenities": "Wifi" },{ "price": 1, "address": 1, "_id": 0 }).pretty()

?db.listingsAndReviews.aggregate([ { "$match": { "amenities": "Wifi" } }, { "$project": { "price": 1, "address": 1,"_id": 0 }}]).pretty()
?db.listingsAndReviews.aggregate([ { "$project": { "room_type": 1, "_id": 0 }},{ "$group": { "_id": "$room_type" }}])

?db.listingsAndReviews.aggregate([{ "$project": { "address": 1, "_id": 0 }}, { "$group": { "_id": "$address.country","count": { "$sum": 1 } } }
])


db.zips.find().sort({ "pop": 1 }).limit(1)  ==>sort from low to hight
db.zips.find().sort({ "pop": -1 }).limit(1)  ==>sort from high to low
*/

//~Introduction to Indexes
/* 
use sample_training

db.trips.find({ "birth year": 1989 })

db.trips.find({ "start station id": 476 }).sort( { "birth year": 1 } )

db.trips.createIndex({ "birth year": 1 })

db.trips.createIndex({ "start station id": 1, "birth year": 1 })
 */
