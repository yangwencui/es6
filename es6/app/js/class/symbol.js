{
    //symbol代表独一无二的值
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2)   //false，Symbol对象生成的值都是独一无二的

    let a3=Symbol.for('a3');////Symbol.for(key)在全局搜索key是否注册，注册，返回这个值，没注册，会调用Symbol生成独一无二的值
    let a4=Symbol.for('a3');
    console.log(a3===a4)//true  a1已结注册了

}

{//key值不冲突，obj定义两个key值abc
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':'345',
        'c':'456'
    }
    //对象有用到symbol做key值，通过for in 和 let of 拿不到symbol的值
    for (let [index, value] of Object.entries(obj)){
        console.log(index,value)
    }

    //Object.getOwnPropertySymbols(obj)只拿到带Symbol做key值得对象，Object.getOwnPropertySymbols(obj)返回的是一个数组

    for (let [index, value] of Object.entries(Object.getOwnPropertySymbols(obj))){
        console.log('getOwnPropertySymbols:',index,value)
    }
    // Reflect.ownKeys(obj)得到的是一个数组，可以拿到obj所有的属性，包括带Symbol
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys',item,obj[item])
    })



}
