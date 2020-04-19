let utils={
    randomNum:function(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    },
    // 判断是否碰撞上了
    // obj1是管道，obj2是小鸟
    crash:function(obj1,obj2){
        // 管道的左边坐标
        let obj1Left=obj1.offsetLeft;
        let obj1Width=obj1.offsetLeft+obj1.offsetWidth;
        let obj1Top=obj1.offsetTop;
        let obj1Height=obj1.offsetTop+obj1.offsetHeight;
        let obj2Left=obj2.offsetLeft;
        let obj2Width=obj2.offsetLeft+obj2.offsetWidth;
        let obj2Top=obj2.offsetTop;
        let obj2Height=obj2.offsetTop+obj2.offsetHeight;
        if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
			return true;
		}
		return false;
        
    }
}