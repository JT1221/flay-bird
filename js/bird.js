var bird = {
    flyTimer: null,
    moveTimer:null,
    ele: document.createElement("div"),
    // 创建小鸟
    addBrid: function () {
        this.ele.className = "birdStyle"
        bigBg.appendChild(this.ele)
        bird.flyBrid()
    },
    birdSpeed: 0, //设置小鸟飞行的速度
    // 控制小鸟下降
    flyBrid: function () {
        bird.flyTimer = setInterval(fly, 30)
        function fly() {
            bird.ele.style.top = bird.ele.offsetTop + bird.birdSpeed++ + "px"
            if(bird.ele.offsetTop<=0){
                bird.birdSpeed=2
            }
            if (bird.ele.offsetTop >= 395) {
                bird.ele.style.top = 395 + "px"
                clearInterval(bird.flyTimer)
                clearInterval(bird.moveTimer)
                land.remove()
                birdSpeed = 0
            }
            if(bird.birdSpeed>12){
                bird.birdSpeed=12
            }
        }
        bird.WingWave()
    },
    // 小鸟扇动翅膀
    WingWave:function(){
        var up = ["url(./img/up_bird0.png)", "url(./img/up_bird1.png)"];
        var down = ["url(./img/down_bird0.png)", "url(./img/down_bird1.png)"];
        var downIndex=0
        var upIndex=0
        bird.moveTimer=setInterval(move,120)
        function move(){
            if(bird.birdSpeed>0){
                bird.ele.style.backgroundImage=down[downIndex++]
                if(downIndex==2){
                    downIndex=0
                }
            }
            if(bird.birdSpeed<0){
                bird.ele.style.backgroundImage=up[upIndex++]
                if(upIndex==2){
                    upIndex=0
                }
            }
        }   
    }
}