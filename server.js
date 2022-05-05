const express=require('express')
const appServer=express()
const port=8085
const path=require('path')

const adminRouting=require('./Router/adminRouter')

const mongoConnect=require('./Database/db').mongo_connect;
appServer.use(express.urlencoded());

	appServer.set('view engine','ejs')
	appServer.set('views','View')

	appServer.use(express.static(path.join(__dirname,'Public')))

appServer.use(adminRouting)

	mongoConnect(()=>{
		appServer.listen(port,()=>{
			console.log(`Server connected at http://127.0.0.1:${port}`);
		})
	})


