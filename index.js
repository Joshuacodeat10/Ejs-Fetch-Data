const express= require('express');
const axios= require('axios')
const app= express();
app.listen(3500,()=>{
    console.log('running of the app')
})
app.set("view engine","ejs")
app.get('/',(req,res) => {
    
 axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {let apiData=response.data; res.render('index',{title: 'Home',posts: apiData})}).catch(error => {
        console.error('Eror fetching data from the APi:',error.message)
        res.status(500).send('Internal server error');
    })
})
app.get('/about',(req,res) => {
    res.render('about',{title: 'About'})
})
app.get('/index',(req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});ddddhhhhhhhh
})

app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})