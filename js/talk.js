new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("LZK && ZMT")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("给你的六一小快乐，婷也是我的宝贝...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();