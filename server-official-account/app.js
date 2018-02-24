const EXPRESS = require('express');
const WECHAT = require('wechat');
const MYSQL = require('mysql');

let app = new EXPRESS();

app.use(EXPRESS.query());

let config = {
    appid:'wx80c3985aa6fbb1bc',
    token:'weixin',
    encodingAESKey:'cH68U9vhbWmvQn8TmedYeyI63MjAc83yFc5PmPF2iEW',
    checkSignature:true
};

let pool = MYSQL.createPool({
   user:'root'
});

app.use('/',WECHAT(config,(req,res)=>{
    let message = req.weixin;
    let question = message.Content;
    console.log(message.Content);

    let sql = "SELECT * FROM wechat.chat WHERE ? LIKE CONCAT('%',question,'%')";
    pool.query(sql,[question],(err,results)=>{
        if(err) throw err;
        if(results.length === 1){
            res.reply(results[0].answer);
        }else {
            res.reply('你在说什么？我听不懂。。。');
        }
    })
    // let htmlUrl = 'HTML文档：http://www.w3school.com.cn/html/index.asp';
    // if(message.Content.includes('HTML')){
    //     res.reply(htmlUrl);
    // }else{
    //     res.reply({
    //         title:'收到！',
    //         description:'有空再回复！！！',
    //         picUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=240696456,2075843556&fm=27&gp=0.jpg',
    //         url:'https://cn.bing.com'
    //     });
    // }

}));

app.listen(4000);