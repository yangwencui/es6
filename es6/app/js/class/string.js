{
    console.log('a','\u0061')
    console.log('s',`\u20BB7`);

    console.log('s',`\u{20BB7}`);
}
{
    let s='𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charAt(0));
    console.log('at1',s.charAt(1));

    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));
    console.log('code0',s1.codePointAt(0).toString(16))
    console.log('code1',s1.codePointAt(1));
    console.log('code2',s1.codePointAt(2));

}
{
    console.log(String.fromCharCode("0x20bb7"))
    console.log(String.fromCodePoint("0x20bb7"));
}


{
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
}

//字符串是否包含includes，什么开始，什么结束
{
    let str="string";
    console.log('includes',str.includes('c'));
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('ing'));

}
{//字符串重复赋值
    let str='abc';
    console.log(str.repeat(5));

}
{
    //模本字符串的拼接
    let user={
        name:'list',
        info:'hello world'
    };
    let m=`I am ${user.name},${user.info}`;
    console.log( m)
}


{//向前补白padStart,向后补白padEnd
    console.log('1'.padStart(2,'0'));  //01向前补白，处理日期
    console.log('1'.padEnd(2,'0'))  ; //01向后补白
}

{
    //标签模本，在哪里用，怎么用
    //处理多语言转化

    let user={
        name:'list',
        info:'hello world'
    };
    console.log(abc`I am ${user.name},${user.info}`);
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2
    }


}

{//raw会将\n转义
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}
{

}


{
    let a={a:1};
    let b={b:1};
    console.log(a===b)
}
