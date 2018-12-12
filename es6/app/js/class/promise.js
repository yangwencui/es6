{//回调
    let ajax=function (callback) {
        console.log('start');
       setTimeout(function () {
           callback&&callback.call()
       },1000)
    };
    ajax(function () {
        console.log('timeout1')
    })
}
{
   let ajax=function () {
     console.log('start 2')  ;
     return new Promise(function (resolve, reject) {
         setTimeout(function () {
            resolve()
         },1000)
     })
   };
   ajax().then(function () {
       console.log('promise,timeout2')
   })
}

{
    let ajax=function () {
        console.log('start 3')  ;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    };
    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            },2000)
        });
    })  .then(function () {
        console.log('timeout3')
    })
}
{
    let ajax=function (num) {
        console.log('start 4') ;
        return new Promise(function (resolve, reject) {
          if (num>5){
              resolve()
          }else {
              throw new  Error ('something wrong')
          }
        })
    };
    ajax(6).then(function () {
       console.log('log',6);
    }).catch(function (err) {
        console.log('catch',err)
    });
}

{
    //所有图片加载完加载到页面
    function loading(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }

        })
    }

    function showimgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img)
        })
    }
//把多个promise实例当做一个promise实例
    //只有3张图片全都加载完成了，才会显示出来
    Promise.all([
        loading('http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180'),
        loading('http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180'),
        loading('http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180')
    ]).then(showimgs)
}


{
    //三张图，位于不同位置，那个到了，显示哪个

    //有一个加图载完加载就添加到页面,后续不管了
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            };
            img.onerror = function (err) {
                reject(err)
            }

        })
    }
    function showImg(img) {
      let p=document.createElement('p');
      p.appendChild(img);
      document.body.appendChild(p)
    }

    Promise.race([
        loadImg('http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180'),
        loadImg('http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180'),
        loadImg('http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180')
    ]).then(showImg)

}


{
    var a = 100;
     function test(){
         console.log(a);
        var a = 10;
        console.log(a);
     }
     test()
}


{
    function  test() {
        for (var i=0;i<4;i++) {
            setTimeout(function () {
                console.log("test start:");
                console.log(i);
            },1000)
        }
    }
    test()
}
