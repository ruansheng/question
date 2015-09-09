exports.login_controller = {
    "login" : function(req, res){
        res.render('login');
    },
    "doLogin" : function(req, res){
        var username = req.body.username;
        var password = req.body.password;
        if(username == 'rs' && password == '123') {
            var ret = {
                "en": 200,
                "em": "登录成功",
                "data":[]
            }
        } else {
            var ret = {
                "en": 400,
                "em": "账号或密码错误",
                "data":[]
            }
        }
        res.json(ret);
    },
}