{
let arr=['a',1,'g'];
 let iter=arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
}
//obj没有填充iterator借口
{
    //obj没有填充iterator借口，下面代码自定义obj借口
  let obj={
      array:[1,2,3,4,5,6,7],
      [Symbol.iterator](){
          let self=this;
          let index=0;
          let arr=self.array;
          let len=arr.length;
          return {
             next(){
                 if (index<len) {
                     return{
                       value:arr[index++],
                       done:false
                     }
                     }else{
                     return{
                         value:arr[index++],
                         done:true
                     }
                 }
             }
          }

      }
  };
  for (let key of obj){
      console.log(key)
  }
}
{
    let arr=['a',1,'g'];
    for (let value of arr){
        console.log(value)
    }
}
