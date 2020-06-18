// 浏览器搞笑标题
var OriginTitle = '大学吒的博客';
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://imgkr.cn-bj.ufileos.com/148d5469-390b-4bc2-902c-6d66833fc36b.ico");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://imgkr.cn-bj.ufileos.com/148d5469-390b-4bc2-902c-6d66833fc36b.ico");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});