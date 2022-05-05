const ModelData=require('../Model/model')

exports.getForm=(req,res)=>{
    res.render('Admin/index',{
        title:"Form"
    })
}

exports.postFormData=(req,res)=>{
    console.log("values: ",req.body);
    let f_name=req.body.f_name
    let l_name=req.body.l_name
    let city=req.body.city
    let pin=req.body.pin
    let phone=req.body.phone
    let email=req.body.email
    let password=req.body.password
    const formData=new ModelData(f_name, l_name, city, pin, phone, email, password)
    formData.saveData().then(results=>{
        console.log("Data saved...");
    }).catch(err=>{
        console.log("Data not Saved..",err);
    })
    res.redirect('/formDetails')
}

exports.getFormDetails=(req,res)=>{
    ModelData.fetchData().then(formData=>{
        res.render('Admin/view-form',{
                title:"Details",
                data:formData
            })
    }).catch(err=>{
        console.log("data not found..",err);
    })
}

exports.postSearchDetails=(req,res)=>{
    console.log("Search Value : ",req.body);
    let search=req.body.search;
    ModelData.search(search).then(result=>{
        console.log("after searching:",result);
        res.render('Admin/view-form',{
            title:"Details",
            data:result
        })
    }).catch(err=>{
        console.log("err",err);
    })
}
