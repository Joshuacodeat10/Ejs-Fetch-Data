const express= require('express');
const axios= require('axios');
const app= express();
const port=3100;
app.listen(port,()=>{
    console.log('running the app')
})
app.set("view engine","ejs")
app.get('/',async(req,res) => {
    try{
    const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
    const apiData= response.data;
    res.render('index',{title: 'Home',posts: apiData})
    }
    catch(error){
        console.error('Eror fetching data from the APi:',error.message)
        res.status(500).send('Internal server error');
    }
})
app.get('/about',(req,res) => {
    res.render('about',{title: 'About'})
})


app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})
a