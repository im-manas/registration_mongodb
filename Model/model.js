const mongodb=require('mongodb')
const getDB=require('../Database/db').getDB

module.exports=class form
{
    constructor(f_name, l_name, city, pin, phone, email, password)
    {
        this.f_name=f_name
        this.l_name=l_name
        this.city=city
        this.pin=pin
        this.phone=phone
        this.email=email
        this.password=password
    }

    //for save the data in database
    saveData()
    {
        const db=getDB()
        let dbOperation=db.collection('data').insertOne(this)
        return dbOperation
        .then(results=>{
            console.log("data saved to database",results);
        }).catch(err=>{
            console.log("Data not submited..",err);
        })
    }

    //for fatching data from database
    static fetchData()
    {
        const db=getDB();
        const sort={f_name: -1}
        return db.collection('data').find().sort(sort).toArray()
        .then(form=>{
            return form;
        })
        .catch(err=>{
            console.log("product not found",err);
        })
    }

    //for search
    static search(city)
    {
        const db=getDB()
        return db.collection('data').find({city:city}).toArray()
        .then((result)=>{
            console.log("Search done..",result);
            return result
        }).catch(err=>{
            console.log("error",err);
        })
    }
}
