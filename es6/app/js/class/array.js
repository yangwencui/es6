// import babelPolyfill from 'babelPolyfill'
{
    //Array.of方法用于将一组值，转换为数组
    //Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一
    let arr=Array.of(3,4,5,6,7);
    console.log('arr=',arr);
    let empt=Array.of();
    console.log('empt=',empt)

}

{
    //Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
    // 和可遍历（iterable）的对象
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent) //textContent原生js获取dom节点text内容
    });
    //Array.from在转化数组同时还遍历一遍
    console.log(Array.from([1,3,5],function (item) {
        return item*2
    }))
}
{
    //fill方法使用给定值，填充一个数组

     console.log('fill-7',[1,'2',undefined].fill(7))//fill不带参数，全部tianc
     console.log('fill-pos',['a','b','c'].fill(7,1,3))//带参数，fill（7，1，3）第一参数，填充值，第二个参数起始位置，第三个参数，结束位置

}
{//entries()，keys()和values()
    //keys返回索引，values返回值，entries返回索引和值

    for (let index of ['a','kbc','c',4].keys()){
        console.log('keys',index)
    }
    for (let values of ['a','kbc','c',4].values()){
     console.log('values',values)}

     for (let [index,value] of ['a','kbc','c',4].entries()){
     console.log(index,value)
     }
}
{
//当前数组内部，把指定的数据成员复制到其它位置
    console.log([1,2,3,4,5].copyWithin(0,3,5))
}
{
    //数组查找，数组实例的find方法，用于找出第一个符合条件的数组成员。
    // 它的参数是一个回调函数，所有数组成员依次执行该回调函数，
    // 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
    console.log([1,2,3,4,5].find(function (item) {
        return item>3
    }))
    //数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

    console.log([1,2,3,4,5].findIndex(function (item) {
        return item>3
    }))

}

{
    //表示某个数组是否包含给定的值，与finds方法类似,同时解决NaN
    console.log([1,2,3,4,5,NaN].includes(2))
    console.log([1,2,3,4,5,NaN].includes(NaN))
}

