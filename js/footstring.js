function getString(){
    nihongo = new Array(
        '晴れたり 泣いたり あとは時々歌ったり.',
        '君も星だよ.',
        '煌めく世界中に　僕の歌を乗せて.',
        '君が笑うたび　どんな明日が来ようとも怖くなかった.',
        'いつの日も歌おう このこころのまま.',
        '笑颜を見せて.',
        '笑って くちびるに歌を持って.',
        '仲间が ここにいるよ. いつも君を见てる.',
        '君が梦见てる未来は 傍にあるよ.',
        '宇宙を生んだ神さまの 子供たち.',
        'わたしの指に　消えない夏の日.',
        'あなたの肩に 揺れてた木漏れ日.',
        'ふたつを浮かべて 見えない川は 歌いながら流れてく.',
        '未来の前にすくむ心が いつか名前を思い出す.'
    );
    chinese = new Array(
        '时而欢笑 时而哭泣 然后时而唱起我们的歌.',
        '你亦是星辰.',
        '在这闪耀的世界中 乘着我的歌声.',
        '看到你的笑颜 无论明天会发生什么我都不会害怕.',
        '无论什么时候都唱出来吧 这颗心本来的样子.',
        '让我看看你的笑脸.',
        '笑起来 宛如唇上有歌.',
        '我就在这里，会一直守望着你',
        '你于梦中见到的未来，一直都在你身边',
        '创造宇宙之神明的孩子们啊',
        '在我的指尖消失的夏日',
        '在你肩上摇曳的树叶间的阳光',
        '两条若隐若现的河流 唱着歌儿慢慢流淌',
        '在未来面前畏缩的心 想起来一个名字'
    );
    var num = Math.random();
    while (num == 1) {
        num = Math.random();
    }
    num = nihongo.length * num;
    num = Math.floor(num);
    document.getElementById("footJP").innerHTML = "<small>" + nihongo[num] + "</small>";
}

window.onload = getString;