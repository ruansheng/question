exports.question_controller = {
    "question" : function(req, res){
        //manager.findManager('825307513@qq.com','123456');
        res.render('question',{'title':'题目列表'});
    }
}