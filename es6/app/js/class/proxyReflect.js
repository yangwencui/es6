{
    //代理，用户拿到的对象跟原始的对象它们之间不能直接操作，要经过代理，在代理的层面，做相应的业务逻辑处理
    //外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
    let obj={
     time:'2018-12-05',
     name:'net',
     _r:123
    };
    let monitor=new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2018','2019')
        },
        //拦截对象属性的设置属性
        set(target,key,value){
            if (key==='name'){
                return target[key]=value
            } else{
                return target[key]
            }

        },
        //判断当前对象是否拥有某个属性
        has(target,key){
            if (key==='name'){
                return target[key]
            } else{
                return false
            }
        },
        //拦截删除某个属性
        deleteProperty(target,key){
            if (key.indexOf('_')>-1){
                return true
            } else {
                return target[key]
            }
        },
        //拦截Object.key,Object.getOwnPropertySymbols,  Object.getOwnPropertyNames()
        ownKeys(targer){
            return Object.keys(targer).filter(item=>item!='time')
        }

    });
    console.log('get',monitor.time);
    monitor.time='2020' ;
    monitor.name='wency';
    console.log('set',monitor.time,monitor);
    console.log('has:','name' in monitor,'time' in monitor);

    delete monitor.time;
    console.log('del',monitor);
    delete monitor._r;
    console.log('del',monitor);

    console.log('ownkeys',Object.keys(monitor))

}
{//Reflect对象上可以拿到语言内部的方法修改某些Object方法的返回结果，让其变得更合理
    let obj={
        time:'2018-12-05',
        name:'net',
        _r:123
    };
    console.log('reflect get',Reflect.get(obj,'time'));
    console.log('reflect set',Reflect.set(obj,'name','wency'),obj);
    console.log('has',Reflect.has(obj,'name'));
    console.log('del',Reflect.deleteProperty(obj,'_r'),obj)

}


{
    //校验，数据类型
    function validator(target,validator) {
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if (target.hasOwnProperty(key)) {
                    let va=this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`${key} can not setting`)
                    }
                }else{
                    throw Error(`${key} not exist`)
                }
            }
        })
    }

const  personValidator={
    name(val){
        return typeof val==='string'
    },
    age(val){
        return typeof val==='number' && val>18
    }
}

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
        return validator(this,personValidator)
    }
}
const  person=new Person('lilei',30);
    console.info(person);
    person.name='Han Meimei';
    person.age=19
    console.log(person)

}
