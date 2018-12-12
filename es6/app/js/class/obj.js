{
    //简洁表达
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    };
    console.log(es5,es6);
    //es6对象有方法不需要加 ：function
    let es5_method={
    hello:function () {
      console.log('hello')
    }
    };

    let es6_method={
        hello(){
            console.log('hello')
        }
    };
    console.log(es5_method,es6_method)
}


{
    //属性表达式,es6允许把表达式放在方括号内。
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };
    let es6_obj={
        [a]:'c'
    };
    console.log(es5_obj,es6_obj)
    //应用在对象key值依赖另一个变量，随着变量变化而变化
}
{
    //新增API
    //is 判断两个值是否相等,和===没什么区别但是后者的NaN不等于自身，以及+0等于-0，ES6 提出“Same-value equality”（同值相等）算法
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc')
    console.log('数组',Object.is([1,2,3],[1,2,3]))//false,因为数组的地址不一样

   // Object.assign拷贝，Object.assign(target, source1, source2);
    // 将源对象（source）的所有可枚举属性，复制到目标对象（target）。
    // 1拷贝是浅拷贝，如果source中有继承的，不会拷贝到target里面,2也不能拷贝不可枚举的
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}))//a: "a" b: "b"

    //Object.entries
    let test={k:123,o:123}
    for (let [key,value] of Object.entries(test)){
        console.log([key,value])
    }

}
