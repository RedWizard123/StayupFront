var we_num=1;
var we_color=[ "#f44336","#ff9800", "#ffeb3b", "#4caf50", "#00bcd4", "#2196f3", "#9c27b0"];
var html_text;
var html_text_;
var pic_slide;
var pic_num=0;
var sum=1;
var fly_x=0;
var fly_y=0;
var t=0;
var k=0;
var d=20;
var sqrt2=1.41421;
var right1clicked=false;
var right2clicked=false;
function add_comment(name,text,like,time,from_bottom){

    html_text_=html_text;//preserve source
    
    
    html_text_=html_text_.replace("{{name}}",name);
    html_text_=html_text_.replace("{{name}}",name);
    html_text_=html_text_.replace("{{text}}",text);
    html_text_=html_text_.replace("{{time}}",time);
    html_text_=html_text_.replace("{{like}}",like);
    
    if(from_bottom==false){
    	document.getElementsByClassName("comment-div")[0].insertAdjacentHTML("beforebegin",html_text_);
    }else{
    	
    	document.getElementsByClassName("all-comment-div")[0].innerHTML+=html_text_;
    
    }
    
    
}

function fly(){
    if(fly_x>=window.innerWidth){//表示飞行结束
        //alert("aaaa");
        $("#fly").css({
            "opacity":"0",
            "transform":""
        });
        setTimeout(function(){
            $("#fly").css({
                "transition": "opacity 1s ease-in-out",
                "opacity":"1"
            });
        },1000);
        return(0);


    }else{
        //x=t;
        //y=g*t^2/2
        //t+=50;
        //$("#fly").animate({left:"+="+d+"px"},50);
        //$("#fly").animate({top:"+="+2*fly_x*d+"px",left:"+="+d+"px"},25,"linear",function(){fly();});

        fly_y+=2*fly_x*d*k;
        fly_x+=d;
        //$("#fly").css("transform","translate(-"+(fly_x*sqrt2/2+fly_y*sqrt2/2)+"px,"+(-fly_x*sqrt2/2+fly_y*sqrt2/2)+"px)");
        $("#fly").css("transform","rotate(45deg)translate("+(fly_x*sqrt2/2+fly_y*sqrt2/2)+"px,"+(-fly_x*sqrt2/2+fly_y*sqrt2/2)+"px)");
        setTimeout(function(){fly();},50);//有点递归的味道；
    }
}

$(function(){
    setInterval(function(){

        if(we_num>7){we_num=7;}
        $(".we-span").css("color",we_color[we_num-1]);
        we_num++;
    },3500);

    k=window.innerHeight/(window.innerWidth*window.innerWidth);
    d=window.innerWidth/(3000/50);
    html_text=document.getElementsByClassName("all-comment-div")[0].innerHTML;//set html_text
    document.getElementsByClassName("comment-div")[0].style.display="none";//hidden
    add_comment(
        "Test User",
        "Anglar 2.0 has officially been released and we teach you how to qiuckly build apps and add authentication the right way! Let me know if you have any questions.",
        "2016-5-7",
        "57",
        false
    );//add a new comment
    document.getElementsByClassName("comment-div")[1].parentNode.removeChild(document.getElementsByClassName("comment-div")[1]);//delete
    //any comments here;
    $(".write-button").click(function(){
        if($(".write-text").val()==""){
            alert("请输入要发表的文字！");
            return;
        }
        var date=new Date();
        add_comment("Test User",$(".write-text").val(),date.getFullYear().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getDate().toString(),"0",false);


    });
    document.getElementsByClassName("pic-slide-img")[0].style.opacity= 100;
    pic_num++;

    setInterval(function(){
        if(pic_num> 5){
            pic_num=1;
        }
        document.getElementsByClassName("pic-slide-img")[pic_num-1].style.opacity= 100;

        document.getElementsByClassName("li-dot")[pic_num-1].style.backgroundColor= "#a7a7a7";

        document.getElementsByClassName("pic-slide-img")[(pic_num-2<0)?4:pic_num-2].style.opacity= 0;

        document.getElementsByClassName("li-dot")[(pic_num-2<0)?4:pic_num-2].style.backgroundColor= "white";

        pic_num++;
        },1000);


	$(window).scroll(function(){
　　		var scrollTop = $(this).scrollTop();//滚动条顶端的top
　　		var scrollHeight = $(document).height();//整个文档的高度	
　　		var windowHeight = $(this).height();//浏览器窗口的高度
　　		if(scrollTop + windowHeight >= scrollHeight){
　　　　		//事件,模拟加载延迟
　　　　		var int=setInterval(function(){
　　　　			if(sum<=4){
　　　　				add_comment("aaa",sum.toString()+"<br><img src=\"images/recommend/0"+sum+".jpg\" />","YYYY-MM-DD",0,true);
　　　　				sum++;
　　　　			}else{
　　　　				clearInterval(int);
　　　　				sum=1;
　　　　			}
　　　　		},100);
　　		}

	});
    $("#fly").click(function(){
        $("#fly").css("transition","");
        fly_x=0;
        fly_y=0;
        $("#fly").addClass("fly");
        setTimeout(function(){
            $("#fly").removeClass("fly");
            fly();
        },1050);
    });
    $("#right2ctrl").click(function(){
        if(right2clicked==false){
            right2clicked=true;
            document.querySelector("#right2").classList.add("main-right-down-hide");
            document.querySelector("#right2ctrl").innerHTML="+";
        }else{
            right2clicked=false;
            document.querySelector("#right2").classList.remove("main-right-down-hide");
            document.querySelector("#right2ctrl").innerHTML="-";
        }
    });
    $("#right1ctrl").click(function(){
        document.querySelector(".we-div").classList.add("fadeout");
        setTimeout(function(){
            document.querySelector(".link").classList.add("fadeout");
        },500);
        setTimeout(function(){
            document.querySelector(".x-div").classList.add("fadeout");
        },1000);
        setTimeout(function(){
            document.querySelector(".main-right-up").classList.add("fadeout");
        },1500);
        setTimeout(function(){
            document.querySelector(".main-right-up").style.display="none";
        },2000);
    });





});




