var APP_ID = 'JK709yLMEVNy9puK0pWUCXTo-gzGzoHsz';
var APP_KEY = 'qu14rgnl2t4QUB2JRhK8QGVs';
var hasilUndi = null;
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

function getNomer() {
    var wechatid = document.getElementById("wechatid");
    var num = Math.floor(Math.random() * 10000) + 1;
    var nomer_undia = document.getElementById("nomer_undian");
    var nomer_undian_value = document.getElementById("nomer_undian_value");

    var query = new AV.Query('allNumber');
    query.equalTo('wechatid', wechatid.value.toString());
    query.find().then(function (all) {
        var alls = all[0];

        if(alls.get('number').toString()!==num.toString()) {
            nomer_undia.innerText = "Nomer Undian anda:\n";
            nomer_undian_value.innerText = alls.get('number').toString();
            nomer_undia.style.display = "block";
            nomer_undian_value.style.display = "block";
        }
    }).then(function (all) {
        // 更新成功
    }, function (error) {
        // 异常处理
        console.log(error.toString());
        var allNum = AV.Object.extend('allNumber');
        var allnum = new allNum();
        allnum.set('number', num.toString());
        allnum.set('wechatid', wechatid.value.toString());
        allnum.save().then(function (allnum) {
            console.log('New object created with objectId: ' + allnum.id);
            nomer_undia.innerText = "Your Lucky Number:\n 您的抽奖号：\n";
            nomer_undian_value.innerText = allnum.get('number').toString();
            nomer_undia.style.display = "block";
            nomer_undian_value.style.display = "block";
        }, function (error) {
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    });
}


function siapaYgMenang(){
  var undi = null;
  var undi1 = null;
  var nomer_undian_value = document.getElementById("nomer_undian_value");
  var rand = document.getElementById("rand");
  var query = new AV.Query('allNumber');
  query.count().then(function(count){
    undi = Math.floor((Math.random() * count) + 1);
    query.find().then(function(doc){
      hasilUndi = doc[undi].get('number');
      undi1 = doc[undi].get('number').toString();
      rand.style.display="none";
      nomer_undian_value.innerText= undi1.toString();
      nomer_undian_value.style.display="block";
    });
  }),function (error) {
    console.log(error.toString());
  };
}
