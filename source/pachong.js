/**
 * Created by zhangyongn on 2015/2/4.
 */
var https = require('http');
var handleResponse=function(response)
{
    console.log("------------");
    //<img src=ziku/li/zhangqian/258.jpg  border=1 style='border-color:#4286E7' alt='点击看详细资料' width=120 height=120 >
    var reg=/<img\s.*?\s?src\s*=\s*['|"]?([^\s'"]+)['|"]?\s*border\s*=\s*['|"]?1['|"]?\s*.*?>/g;



//匹配图片的src
    s=[]
    while(result=reg.exec(response)){
        for(var i=result.length-1;i;--i){
            s.push(result[i]);
        }
    }
    console.log(s);
    document.getElementById("out").innerHTML= s.join(",");
}
var html="";
https.get('http://www.9610.com/zidian/index.asp?title=&key=%C6%F7&page=1', function(res) {
    //console.log("statusCode: ", res.statusCode);
    //console.log("headers: ", res.headers);

    res.on('data', function(d) {


        html+=d.toString();
    });
    res.on('end',function(){
        handleResponse(html);
    });

}).on('error', function(e) {
    console.error(e);
});