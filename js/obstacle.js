// function Block(){
//     // 下管道变化的高度
//     this.dowmHeight=utils.randomNum(0,150)
//     // 上下官打牌之间的距离
//     this.gapHeight=utils.randomNum(150,160)
//     // 上管道变化的高度
//     this.upHeight=305-this.dowmHeight-this.gapHeight
//     // 创建管道的函数
//     this.createDiv=function(){
//         let newDiv=document.createElement("div")
//         newDiv.style.width="62px"
//         newDiv.style.height=height+"px"
//     }
    
// }
function Block() {
	this.upDivWrap = null;
	this.downDivWrap = null;
	this.downHeight = utils.randomNum(0,150);//下管道变化的高度
	this.gapHeight = utils.randomNum(150,160);//上下管道之间的距离
	this.upHeight = 305 - this.downHeight - this.gapHeight;//上管道变化的高度
	this.createDiv = function(url, height, positionType, left, top) {  //创建div的函数
		let newDiv = document.createElement("div");
		newDiv.style.width = "62px";
		newDiv.style.height = height+"px";
		newDiv.style.position = positionType;
		newDiv.style.left = left+"px";
		newDiv.style.top = top+"px";
		newDiv.style.backgroundImage = url;  
		return newDiv;
	};
		
}
Block.prototype.createBlock = function(){
	let upDiv1 = this.createDiv("url(./img/up_mod.png)", this.upHeight );
	let upDiv2 = this.createDiv("url(./img/up_pipe.png)", 60);
	this.upDivWrap = this.createDiv(null, null, "absolute", 450); //一开始管道距离最左边450px
	this.upDivWrap.appendChild(upDiv1);
	this.upDivWrap.appendChild(upDiv2);//生成上方管道
	
	let downDiv1 = this.createDiv("url(./img/down_pipe.png)", 60);
	let downDiv2 = this.createDiv("url(./img/down_mod.png)", this.downHeight);
	
	this.downDivWrap = this.createDiv(null, null, "absolute", 450, 363 - this.downHeight); //最后一个参数表示下管道距离顶端的偏移量（423-60-this.downHeight）
	this.downDivWrap.appendChild(downDiv1);
	this.downDivWrap.appendChild(downDiv2); //生成下方的管道
	
	bigBg.appendChild(this.upDivWrap);
	bigBg.appendChild(this.downDivWrap);
};

Block.prototype.moveBlock = function(){ //设置管道往左移动
	this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + "px";
	this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + "px";
};