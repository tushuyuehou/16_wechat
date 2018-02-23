const EXPRESS = require('express');
const WECHAT = require('wechat');

let config = {
    appid:'wx80c3985aa6fbb1bc',
    token:'weixin',
    encodingAESKey:'cH68U9vhbWmvQn8TmedYeyI63MjAc83yFc5PmPF2iEW'
};

let app = new EXPRESS();

app.use(EXPRESS.query());

app.get('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);
}));

app.listen(3000);