var manager = require('../model/manager_model').manager;

exports.index_controller = {
    "index" : function(req, res){
        //manager.findManager('825307513@qq.com','123456');
        res.render('index',{'title':'question'});
    },
    "course" : function(req, res){
        res.render('course',{'title':'使用帮助'});
    },
    "error" : function(req, res){
        res.render('error',{'title':'error'});
    }

}