    function checkLogin() {
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        
        // 这里设置你想要的特定值，比如账号 yiloko 密码 123456
        if (user === "yiloko" && pass === "123456") {
    alert("访问授权成功，跳转中");
    window.location.href = "https://blog.yiloko.com"; 
} else {
            alert("身份验证失败：无效的凭证。");
        }
    }
// 播放器
window.onload = function(){
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 0,
    theme: '#ffffff', // 配合毛玻璃效果，使用白色主题色
        audio: [
            {
                name: '神様のいうとおり',
                artist: 'やくしまるえつこ',
                url: './music/神様のいうとおり.mp3', // 检查音频文件名
                cover: './icon/kami.jpg' // 图片
            },
            {
                name: 'HELP!!',
                artist: 'Kobo Kanaeru',
                url: './music/Kobo Kanaeru - HELP!! .mp3', 
                cover: './icon/HELP!!.jpg'
            },
            {
                name: 'ワレワレは宇宙人だ。',
                artist: 'Sooda',
                url: './music/wareware.mp3',
                cover: './icon/wareware.jpg'
            },
            {
                name: 'ソラゴト',
                artist: '明透',
                url: './music/明透 - ソラゴト.mp3',
                cover: './icon/soragoto.jpg'
            },
            {
                name: '心拍数#0822',
                artist: '鹿乃',
                url: './music/心拍数0822.mp3',
                cover: './icon/shinpakusuu.jpg'
            },
            {
                name: 'Life We Sow',
                artist: 'Mili',
                url: './music/Life We Sow.mp3',
                cover: './icon/life.jpg'
            },
            {
                name: 'Re searchlight',
                artist: 'Aiobahn',
                url: './music/Re searchlight.mp3',
                cover: './icon/Re searchlight.jpg'
            },
            {
                name: "Steppin' Up Life!",
                artist: '鬼頭明里',
                url: "./music/Steppin'UpLife!.mp3",
                cover: './icon/gt.jpg'
            },
            {
                name: "In My Room",
                artist: 'キツネDJ',
                url: "./music/hikikomori.mp3",
                cover: './icon/hikikomori.jpg'
            },
            {
                name: "砂のこども",
                artist: '水瀬ましろ',
                url: "./music/suna.mp3",
                cover: './icon/suna.jpg'
            },
            {
                name: "ライアーメイデン",
                artist: 'ヤバス',
                url: "./music/mushi.mp3",
                cover: './icon/mushi.jpg'
            },
            {
                name: '妄想感傷代償連盟',
                artist: 'DECO*27/初音ミク',
                url: './music/妄想感傷代償連盟.mp3',
                cover: './icon/msgsdslm.jpg'
            },
            {
                name: 'ネロイズム',
                artist: 'かいりきベア/鳴花ミコト',
                url: './music/ss.mp3',
                cover: './icon/ss.jpg'
            },
            {
                name: 'everything',
                artist: 'Studio "Syrup Comfiture"',
                url: './music/everything.mp3',
                cover: './icon/everything.jpg'
            },
            {
                name: '3253212',
                artist: 'reche',
                url: './music/3253212.mp3',
                cover: './icon/3253212.jpg'
            },
            {
                name: 'you',
                artist: '雪野五月',
                url: './music/you.mp3',
                cover: './icon/you.jpg'
            },
            {
                name: 'かみさまちゃん',
                artist: 'ど〜ぱみん/歌愛ユキ',
                url: './music/kamisama.mp3',
                cover: './icon/kamisama.jpg'
            },
            {
                name: 'オノマトペ',
                artist: '羽生まゐご',
                url: './music/オノマトペ .mp3',
                cover: './icon/onomatobe.jpg'
            }
        ]
    });
}
  