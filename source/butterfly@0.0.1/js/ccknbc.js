// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i style="color:#49B1F5;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> CC康纳百川');
})

if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
}

function aidaori(){
    var aidaoriarr=new Array("0405","0512","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //2010年8月7日，甘肃舟曲特大泥石流
    //1976年9月9日，毛泽东逝世
    //1937年12月13日，南京大屠杀
    var mydate = new Date();
    var str = "";// + mydate.getFullYear();
    var mm = mydate.getMonth()+1;
    if(mydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(mydate.getDate()>9){
      str += mydate.getDate();
    }else{
      str += "0" + mydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/ccknbc.png");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/favicon.svg");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

/* 控制台 */
(function() {
	if (window.console && window.console.log) {
		console.log(
			'\n %c CC康纳百川 %c https://ccknbc.github.io \n',
			'color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;',
			'background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;'
		)
		console.log(
			`%c页面加载消耗了 ${(
				Math.round(performance.now() * 100) /
				100 /
				1000
			).toFixed(2)}s`,
			'background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;'
		)
		if (!localStorage.getItem('access')) {
			localStorage.setItem('access', new Date().getTime())
		}
		let _access = new Date(parseInt(localStorage.getItem('access')))
		let access = `${_access.getFullYear()}年${_access.getMonth() +
			1}月${_access.getDate()}日`
		let i = 0
		if (!localStorage.getItem('hit')) {
			localStorage.setItem('hit', 0)
		} else {
			i = parseInt(localStorage.getItem('hit'))
		}
		localStorage.setItem('hit', ++i)
		console.log(
			`这是你自 ${access} 以来第 ${i} 次在本站打开控制台，你想知道什么秘密嘛~`
		)
		const img = `https://cdn.jsdelivr.net/gh/Tomotoes/images/console/${i % 5}.jpg`
		console.log('%c ', '\n  background:url('.concat(img, ') no-repeat center;\n  background-size:200px;\n  margin:5px 0;\n  padding:0 0 162px 200px;\n  border-radius:10px;\n  overflow:hidden;\n  '))
	}
})()

var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
}