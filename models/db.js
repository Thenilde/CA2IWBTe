const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://musics:12345@cluster0.ogpfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser:true},(err)=>{
    if (!err){ console.log('Congratulations your mongo is connected TB Silva')}
    else{console.log('Error in your DB Borges:' + err)}
});


require('./music.model');