var title = {
    el: document.getElementById("title"),
    bird: document.getElementById("bird"),
    timer: null,
    id: 3,
    index: 0,
    birdArr: ["./img/bird0.png", "./img/bird1.png"],
    // 标题和小鸟移动
    move: function () {
        if (this.timer) {
            return
        }
        this.timer = setInterval(() => {
            // console.log(this.el)
            this.id *= -1
            this.el.style.top = this.el.offsetTop + this.id + 'px'
            this.bird.src = this.birdArr[this.index++]
            if (this.index == this.birdArr.length) {
                this.index = 0
            }
        }, 200)
    },
    // 消失
    vanish: function () {
        this.el.style.display = "none"
        clearInterval(this.timer)
        this.timer = null;
    }
}
var land = {
    el: document.getElementById("grassland1"),
    el2: document.getElementById("grassland2"),
    timer: null,
    id: 2,
    // 让地移动
    move: function () {
        if (this.timer) {
            return
        }
        this.timer = setInterval(() => {
            this.el.style.left = this.el.offsetLeft - this.id + "px"
            this.el2.style.left = this.el2.offsetLeft - this.id + "px"
            if (this.el.offsetLeft < -343) {
                this.el.style.left = 343 + "px"
            }
            if (this.el2.offsetLeft < -343) {
                this.el2.style.left = 343 + "px"
            }
        }, 20)
    },
    // 消失
    remove: function () {
        // console.log(this.timer)
        clearInterval(this.timer);
        this.timer = null;
    }
}
var blockArr=[]
var blockDistance=utils.randomNum(130,250)
var start = document.getElementById("start")
var bigBg = document.getElementById("bigBg")
var gameover=document.getElementById("gameover")
var overOk=document.getElementById("ok")
var isClick=false;

// 开始之后要干的事情
start.onclick = function () {
    // 隐藏
    start.style.display = "none";
    title.vanish()
    // 创建小鸟
    bird.addBrid()
    // 创建管道
    let b=new Block()
    b.createBlock()
    blockArr.push(b)
    //点击背景事件
    bigBg.onclick=function(){
        bird.birdSpeed=-8
    }
    isClick=true;
}
var timer=setInterval(landRan,20)

function landRan(){
    // console.log(blockArr[0])
    blockArr.forEach((item,index)=>{
        item.moveBlock()
        // 判断何时结束游戏
        let x=utils.crash(item.upDivWrap,bird.ele)
        let y=utils.crash(item.downDivWrap,bird.ele)
        let z=bird.ele.offsetTop>=390
        if(x||y||z){
            window.clearInterval(timer)
            bird.birdSpeed=0
            isClick=false;
            land.remove()
            gameover.style.display="block"
        }
    })
    // 两个管道之间的距离
    if(isClick){
        // 创建管道
        if(blockArr[blockArr.length-1].downDivWrap.offsetLeft<450-blockDistance){
            blockDistance=utils.randomNum(130,250)
            let newBlock=new Block()
            newBlock.createBlock()
            blockArr.push(newBlock)
        }
        // 删除管道
        if(blockArr[0].downDivWrap.offsetLeft<-50){
            bigBg.removeChild(blockArr[0].downDivWrap)
            bigBg.removeChild(blockArr[0].upDivWrap)
            blockArr.shift(blockArr[0])
        }
        // console.log(2232)
    }
    console.log(blockArr.length)
    
    
}

overOk.onclick=function(){
    window.location.reload()
}

// 设置小鸟，小鸟的翅膀煽动效果和默认向下摆动

// createBird()

title.move()
land.move()
// land.remove()
