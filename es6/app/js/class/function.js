{
    //指定参数默认值,默认值后面不能有没有默认值的参数
    function test(x,y=3) {
        console.log('默认值',x,y)
    }
    test('hello')//hello,3
    test('hello','yes')//hello,yes
}

{
    let x=3;
    function test2(x,y=x) {
        console.log('默认值:',x,y)
    }
    test2(4) ; //默认值:4,4
    test2();//err:undefinded

    function test3(c,y=x) {
        console.log('默认值:',x,y)
    }
    test3('kill');//默认值:kill,3
}

{
    //rest 参数搭配的变量变成一个数组，就是离散的值转化数组，并且rest之后没有参数
    function test4(...arg) {
        for (let v of arg) {
            console.log('rest:',v)
        }
    }
    test4(1,2,3,4,'a')//rest:1 rest:2 rest:3 rest:4 rest:a
}
{
    //将数组转化离散的值
    console.log(...[1,2,4]);//1 2 4
    console.log('a',...[1,2,4])// a,1,2,3,4
}

{
    //箭头函数
    //arrow函数名，参数，返回值
    let arrow=v=>v+3
    console.log('arrow',arrow(3)); //6
 //没有参数，用（）代替
    let arrow2 = () =>5;
    console.log(arrow2());//5

    //函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    //这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。
    // 如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。
    // 但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);
        }, 100);
    }
    var id = 21;

    foo.call({ id: 42 });//42

    //箭头不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
}
{
    //尾调用，函数的最后一句是一个函数
    //作用，提升性能
    function tail(x) {
        console.log('tail',x)
    }
    function fx(x) {
        return tail(x)
    }
    fx(123) //123
}

