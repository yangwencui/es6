// let nbaStars=['yaoming','kobe','james','paul']
// let [chinaStar,...usaStar] = nbaStars
// let [,,,myidol] = nbaStars
// console.log(usaStar,chinaStar,myidol)

{
console.log('B',0B11111010)
console.log(0o767)

    }
{
    console.log('15',Number.isFinite(15));//
    console.log('1/0',Number.isFinite(1/0));
    console.log('NaN',Number.isNaN(NaN))
    console.log('0',Number.isNaN(0))
}
//判断是否整数
{
    console.log(25,Number.isInteger(25));
    console.log('25/4',Number.isInteger(25/4));
     console.log('25.0',Number.isInteger(25.0));

}
{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));//10在MAX_SAFE_INTEGER，MIN_SAFE_INTEGER之内，安全
    console.log('a',Number.isSafeInteger('a'))

}

{
    console.log('4.9',Math.trunc(4.9))//只取整数部分
    //Math.sign负数返回-1，整数返回1，0返回0
    console.log('-5',Math.sign(-5));
    console.log('5',Math.sign(5));
    console.log('0',Math.sign(0));
    //如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN
    console.log('-50',Math.sign('-50'))
    //字符串无法转化为数值类型返回NaN
    console.log('foo',Math.sign('foo'))
    }

{
    console.log('8',Math.cbrt(8))//MaTH.cbrt的立方根

}
