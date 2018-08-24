<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Address Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> -->
   
    <style>
        .wheel {
            font-size: 100%;
            height:200px;
            position:relative;
            border:1px solid #ccc;
            overflow:hidden;
            z-index:0;
            float:left;
            width: 100%;
        }
        .column-on-wrapper{
            width: 100%;
            z-index:1;
            margin:0;
            padding:0;
            display:block;
            text-align:center;
        }
        .column-on-wrapper .item {
            height:40px;
            line-height: 40px;
            font-size:14px;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            margin:0;
            padding:0;
        }
        /* .item1 {
            margin-top:80px;
        }
        .item10 {
            margin-bottom: 80px;
        } */
        .loc-dest {
            position: absolute;
            top: 80px;
            width: 100%;
            height: 40px;
            /* transform:translateY(-50%); */
            z-index:0;
            background: rgba(0,0,0,0.15);
        }
    </style>
</head>
<body>
    <div class="container wheel">
        <ul class="column-on-wrapper" style="transform:translate3d(0px,0px,0px);">
            <li class="item item1" data-loc="" data-move="">test one</li>
            <li class="item item2" data-loc="" data-move="">test two</li>
            <li class="item item3" data-loc="" data-move="">test three</li>
            <li class="item item4" data-loc="" data-move="">test four</li>
            <li class="item item5" data-loc="" data-move="">test five</li>
            <li class="item item6" data-loc="" data-move="">test 1</li>
            <li class="item item7" data-loc="" data-move="">test 2</li>
            <li class="item item8" data-loc="" data-move="">test 3</li>
            <li class="item item9" data-loc="" data-move="">test 4</li>
            <li class="item item10" data-loc="" data-move="">test 5</li>
        </ul>
        <div class="loc-dest"></div>
    </div>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
    <script src="address.js"></script>
</body>
</html>
var loc_top = document.querySelector('.loc-dest').offsetTop;
var loc_bottom = loc_top + document.querySelector('.loc-dest').clientHeight;

var base = [document.querySelector('.item').offsetTop - 10, document.querySelector('.item').offsetTop+document.querySelector('.item').clientHeight-10];
console.log(base);
var items = document.getElementsByClassName('item');
var startY;
var slider = document.querySelector('.column-on-wrapper');
var curDistance= [],offset,oldMoveY;
// for(var i=0;i<items.length;i++){   
//     //items[i].dataset.loc = loc_top - items[i].offsetTop;
//     items[i].dataset.loc = items[i].offsetTop;;
// }
function updateCurDistance(Slider,index){
    if(Slider.style.transform){
        curDistance[index] = parseInt(Slider.style.transform.split(',')[1]);
    }else{
        curDistance[index] = parseInt(Slider.style.webkitTransform.split(',')[1]);
    }
}

document.querySelector('.wheel').addEventListener('touchend',function(e){
    var moveEndY = parseInt(e.changedTouches[0].clientY);
    var offsetSum = moveEndY - startY;

})

document.querySelector('.wheel').addEventListener('touchstart',function(e){
    startY =parseInt(e.changedTouches[0].clientY);
    oldMoveY = startY;
})

document.querySelector('.wheel').addEventListener('touchmove',function(e){
   e.preventDefault();
   var moveY = e.touches[0].clientY;
    offset = moveY - oldMoveY;
    updateCurDistance(slider,0);
    slider.style.transform = "translate3d(0," + moveY + "px,0)";
})
