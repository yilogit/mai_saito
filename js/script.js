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
function toggleCenterMenu() {
    const menu = document.getElementById('centerMenuOverlay');
    // 切换 active 类名
    menu.classList.toggle('active');
}

// 按 ESC 键也能关闭
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('centerMenuOverlay').classList.remove('active');
    }
});
// 播放器
window.addEventListener('load', function(){
const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        lrcType: 0,
        theme: '#ffffff',
        audio: [
            {
                name: '神様のいうとおり',
                artist: 'やくしまるえつこ',
                url: './music/神様のいうとおり.mp3',
                cover: './icon/kami.jpg'
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
    // --- 任务 2：初始化 JLPT 倒计时 ---
    initJLPTTimer();

});

// 倒计时逻辑函数
function initJLPTTimer() {
    const target = new Date('2026-07-05T09:00:00').getTime();
    const timerContainer = document.getElementById('jlptTimer');
    
    // 如果页面上没找到倒计时容器，直接跳过，防止报错
    if (!timerContainer) return;

    function update() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            timerContainer.innerHTML = "<div style='color:#4a9540'>MISSION_STARTED</div>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // 安全更新 DOM 元素
        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');
        const pEl = document.getElementById('progress-bar');

        if (dEl) dEl.innerText = d.toString().padStart(3, '0');
        if (hEl) hEl.innerText = h.toString().padStart(2, '0');
        if (mEl) mEl.innerText = m.toString().padStart(2, '0');
        if (sEl) sEl.innerText = s.toString().padStart(2, '0');

        // 进度条：假设备考周期 180 天
        if (pEl) {
            const percent = Math.max(0, Math.min(100, (1 - d / 180) * 100));
            pEl.style.width = percent + "%";
        }
    }

    update();
    setInterval(update, 1000);
}