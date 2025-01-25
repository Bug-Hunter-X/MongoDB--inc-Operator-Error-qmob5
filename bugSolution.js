```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:1}});

//Ensure the field is a number
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:Number(value)}});
```