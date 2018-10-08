    var cns = document.getElementById("can");
    cns.height = 600;
    cns.width = 300;
    var enemyCounter = 0;
    var ctx = cns.getContext("2d");
    var hero = new Image();
    hero.onload = function () {
        ctx.drawImage(hero, 120, 570);
        hero.xx = 120;
        hero.yy = 570;
    };
    hero.src = "images/hero.png";
    gameStart();

    function gameStart() {
        setTimeout(function f() {
            enemySpawn();
            setTimeout(f, speed());
        }, speed());
    }

    function speed() {
        if (1000 - enemyCounter * 20 > 900) return 2000 - enemyCounter * 50;
        else return 900;
    }

    function enemySpawn() {
        var enemy = new Image();
        var random = Math.round(Math.random() * 270);
        enemy.onload = function () {
            ctx.drawImage(enemy, random, 0);
        };
        enemy.src = "images/enemy.png";
        enemy.xx = random;
        enemy.yy = 0;
        var intervalE = setInterval(goDown(enemy), 5);
        enemyCounter++;
    }
    var intervalL, intervalR, intervalLL, intervalRR;
    var keys = [];
    function moove(e) {
        keys[e.keyCode] = (e.type == "keydown");
        if (keys[37] && keys[39]){
            clearTimeout(intervalL);
            clearTimeout(intervalLL);
            goRight(hero);
        }
        if (keys[37]) {
            // clearTimeout(intervalR);
            // clearTimeout(intervalRR);
            goLeft(hero);
        } else {
            clearTimeout(intervalL);
            clearTimeout(intervalLL);
        }
        if (keys[39]) {
            // clearTimeout(intervalL);
            // clearTimeout(intervalLL);
            goRight(hero);
        } else {
            clearTimeout(intervalR);
            clearTimeout(intervalRR);
        }
    }

    function goLeft(img) {
        var x = img.xx,
            y = img.yy;

        function f() {
            ctx.clearRect(img.xx, img.yy, img.width, img.height);
            ctx.drawImage(img, x, y);
            img.xx = x;
            img.yy = y;
            x -= 1.2;
            if (x < -35) {
                x = cns.width;
            }
        }
        if (!intervalL) {
            intervalL = setTimeout(function run() {
                f();
                intervalLL = setTimeout(run, 5);
            }, 5);
        }
    }

    function goRight(img) {
        var x = img.xx,
            y = img.yy;

        function f() {
            ctx.clearRect(img.xx, img.yy, img.width, img.height);
            ctx.drawImage(img, x, y);
            img.xx = x;
            img.yy = y;
            x += 1.2;
            if (x > cns.width) {
                x = 0;
            }
        }
        if (!intervalR) {
            intervalR = setTimeout(function run() {
                f();
                intervalRR = setTimeout(run, 5);
            }, 5);
        }
    }

    function jump() {

    }

    function goDown(img) {
        var x = img.xx,
            y = img.yy;

        function f() {
            if (img == null) return 0;
            ctx.clearRect(img.xx, img.yy, img.width, img.height);
            ctx.drawImage(img, x, y);
            img.xx = x;
            img.yy = y;
            y += 2;
            if (y > cns.height) {
                img = null;
                clearTimeout(intervalD);
            }
        }
        intervalD = setTimeout(function run() {
            f();
            setTimeout(run, 5);
        }, 5);
    }