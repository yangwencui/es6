//解决异步变成,每个步骤标志yield，return，遇到就停止
{
//generator 基本定义
    let tell=function* () {
        yield 'a';
        yield 'b';
        return 'c'
    }
    let k=tell();
    console.info(k.next())
    console.info(k.next())
    console.info(k.next())
    console.info(k.next())
}
