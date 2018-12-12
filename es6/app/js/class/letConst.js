function test(){
  for (let i=1;i<3;i++) {
      console.log(i)
  }
  console.log(i) //let定义的变量只在块级作用域
                 //ReferenceError: i is not defined
                 //因为es6是严格模式，严格模式变量未声明，不能引用
}

function last(){
    const PI=3.1415926; //const声明常量必须赋值
   // const PI=3     //编译不通过，const声明数值常量不能修改，
    const k={
        a:1
    }
    k.b=3;      //const声明数值常量不能修改，但是k指向的对象的地址，这个地址不变，但是对象是可以变得
    console.log(PI,k);
}


// test();
 last();
