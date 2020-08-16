const Todo = require("../models/todo");

todoList=[
    {
        description:"sfjksndfnsdjf",
        category:'right',
        date:'17-08-2000'

    },
    {
        description:"sfjksndfnsdjf",
        category:'right',
        date:'17-08-2000'

    },
    {
        description:"sfjksndfnsdjf",
        category:'right',
        date:'17-08-2000'

    }
]

//function for home page
module.exports.home=function(req,res){
    Todo.find({},(err,list)=>{
        if(err){
            console.log('there is an error',err);
            return;
        }
        return res.render('home.ejs',{
                title:'Home',
                todo_list:list
        })
    });
};

//put data in database
module.exports.homepost=function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },(err,newTodo)=>{
        if(err){
            console.log('there is an error',err);
            return;
        }
        console.log('*****',newTodo);
        return res.redirect('back');
    })
};

//delete data in database
module.exports.deletetodo=function(req,res){
    
        let id = req.body.checked;
        for(let i=0;i<=id.length; i++){
            Todo.findByIdAndDelete(id,(err) => {
                    if (err) {
                        console.log('error in deleting')
                        return;
                    }
                });
                return res.redirect('back');
              
        }

};

