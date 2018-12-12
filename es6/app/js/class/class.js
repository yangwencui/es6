{
    class Parent{
        constructor(name='wency'){
            this.name = name;
        }
    }
    let v_parent=new Parent('v');
    console.info('constructor',v_parent)

    //
    class Child extends Parent{

    }
    console.info('extends',new Child())

}

{
    class Parent{
        constructor(name='wency'){
            this.name = name;
        }
        get longName(){
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value
        }
    }

    //
    class Child extends Parent{
    constructor(name='child'){
        super(name);
        this.type='child'
    }
    }

    let v=new Parent();
    console.log('getting',v.longName);
    v.longName='hello123';
    console.log('setting',v.longName)
    // console.info('extends params',new Child('hello'))

}
{
    //静态方法调用，直接用类名去调用
    class Parent{
        constructor(name='wency'){
            this.name = name;
        }
        static tell(){
            console.log('tell')
        }
        get longName(){
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value
        }
    }
  Parent.tell()
}

{

    class Parent{
        constructor(name='wency'){
            this.name = name;
        }
        static tell(){
            console.log('tell')
        }
        get longName(){
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value
        }
    }
    //静态属性直接在类名后面去加
    Parent.type='test'
    console.log('静态属性',Parent.type)
}
