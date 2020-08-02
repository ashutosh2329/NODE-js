const express = require('express')
const app = express()
var details = {
	'Name':"Ashutosh",
	'Hobby':"Programming",
	'status':"Student",
};
var contact = {
	'email':"sonutiwari2329@gmail.com",
	'phone-number':"6388554494",
	'address':"varanasi",
};
app.get("/",function(request, response){
	response.send("<h1>hello World!</h1>");
});
app.get("/contact",function(request, response){
	response.send(contact);
});
app.get("/about",function(request, response){
	response.send(details);
});
app.get("/college",function(request, response){
	response.send("<h2>Tezpur University</h2>");
});

app.listen(3000, function(){
	console.log("server started at 3000 port address");
});