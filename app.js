var express = require("express");
var path = require("path");

var app = express();
const PORT = process.env.PORT || 8080

app.get('/api/customers', (req, res) =>{
    const cusromers = [
        {id: 1, firstName:"yehonatan", lastName: "natan"},
        {id: 2, firstName:"ricky", lastName: "natan"},
        {id: 3, firstName:"guy", lastName: "natan"},
    ];
    res.json(cusromers);
});

app.listen(PORT, () => console.log("server listening in port ", PORT));

