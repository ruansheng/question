exports.questions_controller = {
    "questions" : function(req, res){
        //manager.findManager('825307513@qq.com','123456');
        res.render('questions',{'title':'问卷调查列表'});
    }
}