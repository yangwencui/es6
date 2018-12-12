{
    //set应用场景，去重
    let s=new Set();
    [1,2,1,4,2,5,6].forEach(item => s.add(item))
    console.log('s',s);



}
//Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

{//add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。

    let arr=['add','del','has','clear'];
    let list=new Set(arr);

    console.log('has',list.has('has'));
    console.log('del',list.delete('del'),list);
    console.log('clear',list.clear(),list);
    console.log('add',list.add(1),list);



}
{
    //Set 结构的实例有四个遍历方法，可以用于遍历成员
    //keys()：返回键名的遍历器
    // values()：返回键值的遍历器
    // entries()：返回键值对的遍历器
    // forEach()：使用回调函数遍历每个成员
    let arr=['add','del','has','clear'];
    let list=new Set(arr);

    for (let key of list.keys()) {
        console.log("****");
        console.log('keys',key)
    }

    for (let value of list.values()) {
        console.log('value',value)
    }

    for (let [index, value] of list.entries()){
        console.log('entries',index,value)
    }

    list.forEach(item =>console.log(item))

}

{
    //weakSet元素对象只能是对象
    //weakSet对象只能是弱引用，引用的是地址
    //weakSet属性没有size和clean，也不能遍历

    let obj1={};
    let obj2={'a':1};
    let wkSet=new WeakSet();
    console.log('add',  wkSet.add(obj1),wkSet);
    console.log('has',wkSet.has(obj1))

}
{
    //Map是键值对的集合
    let map=new Map();
    let arr=[1,2,3];
    map.set(arr,456);
    console.log('map',map,map.get(arr))

    //作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
    let m= new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    console.log(m.size)
    console.log('has',m.has('name'));
    console.log('get',m.get('title'));
    console.log('del',m.delete('name'),m);
    //map遍历与set相同


}
{
    //weakMap素对象只能是对象
    //weakMap属性没有size和clean，也不能遍历
    let weakMap=new WeakMap();
    let o={};
    weakMap.set(o,123);
    console.log(weakMap.get(o))
}

{
    //map,set,array 的增删改查对比
    let map = new Map();
    let arr = [];
    let set = new Set();
//增
    let item = {t: 1};

    map.set('t', 1);
    arr.push({t: 1});
    set.add({t: 1});
    console.log('compare start......');

    console.info('map-arr-set-add', map, arr, set);

//查，map和set差不多。数组需要找那个索引

    let map_exist = map.has('t');
    let arr_exist = arr.findIndex(item => item.t);
    let set_exist = set.has({t: 1});

    console.info('map-arr-set-exist',map_exist,arr_exist,set_exist);

//改，数组需要找到那个索引才能修改，set要找到那个值

    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'');
    set.forEach(item=>item.t?item.t=2:'');
    console.info('map-arr-set-modify', map, arr, set);

  //删除数组需要找到那个索引，set要先找到那个值
    map.delete('t');
    let index=arr.forEach(item=>item.t);
    arr.slice(index,1);
    set.forEach(item=>item.t?set.delete(item):'');
    console.info('map-arr-set-del', map, arr, set);
}

{
    //map,set,Object  的增删改查对比
    let map = new Map();
    let set = new Set();
    let obj={}
    let  item={t:1};

    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.log('compare start......');

    console.info('map-arr-obj-add', map,set,obj);
//改
    console.log({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })
//修改
    map.set('t',2);
    item.t=2;//在set中，直接对应用的值进行修改
    obj['t']=2;
    console.info('map-set-obj-modify', map, set,obj);

    //在set中，如果没有对数据进行一份应用，就是先定义一个变量item，删除就要foreach先找到那个值，再删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
//删除
    console.info('map-arr-obj-add', map,set,obj);
}
