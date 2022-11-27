var x=document.getElementsByClassName("container");
var newDiv = document.createElement('div');
newDiv.className = 'banner-body';

var heading = document.createElement('h3');
heading.innerHTML='LIMITED TIME OFFER';
heading.className = "banner-element";
var timer = document.createElement('h4');
timer.id = "counter";
timer.className = "banner-element";
var discount = document.createElement('h3');
discount.innerHTML = 'GET 10% OFF    Use Code: EXAMSTART';
discount.className = "banner-element";
discount.id="discount";

newDiv.appendChild(heading);
newDiv.appendChild(timer);
newDiv.appendChild(discount);
var expiration = new Date("Dec 3 2022, 23:59:59").getTime();
var fnc = setInterval(function(){
    var now = new Date().getTime();
    var t = expiration - now;
    var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = "Ends in :" + hours + "h : " + minutes + "m : " + seconds + "s";
    if(t < 0){
        // expiration = expiration + (7200 * 1000);
        expiration = new Date(expiration + 7200 * 1000);
    }
}, 1000);

document.getElementsByClassName('customMargin')[0].appendChild(newDiv);

var styles = `
    .banner-body{
        display: flex;
        justify-content: space-around;
        border-radius: 40px;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgb(255, 225, 0) 0%, rgb(255, 140, 0) 65%);
        margin: 40px 10px 40px 0px;
    }

    .banner-element{
        margin: 10px;
    }

    @media screen and  (max-width: 370px ){
        .banner-body{
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 20px;
            background: rgb(2,0,36);
            background: rgb(255, 216, 150);
            border: 2px solid rgb(250, 181, 63);
        }

        #discount{
            background-color: rgb(250, 181, 63);
            width: 100%;
            align-items: center;
            justify-content: space-between;

        }
    }

    *{
        font-family: 'Quicksand', sans-serif;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)