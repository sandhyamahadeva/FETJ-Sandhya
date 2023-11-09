const express = require('express');
const app = express();
const cors = require('cors');


const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5000"
}));

app.set('view engine', 'ejs');
app.use(express.json());
// app.use(cookieParser());

app.get('/',(req, res) => {
    res.render('index');
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/login', (req,res) => {
    let token = req.body.token;
    console.log(token);
})

app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`)
})