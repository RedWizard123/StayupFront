var we_num=1;
var we_color=[ "#f44336","#ff9800", "#ffeb3b", "#4caf50", "#00bcd4", "#2196f3", "#9c27b0"];
var html_text;
var html_text_;
var pic_slide;
var pic_num=0;
var sum=1;
function add_comment(name,text,like,time,from_bottom){

    html_text_=html_text;//preserve source
    
    
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
$(function(){
    setInterval(function(){

        if(we_num>7){we_num=7;}
        $(".we-span").css("color",we_color[we_num-1]);
        we_num++;
    },3500);




    html_text=document.getElementsByClassName("all-comment-div")[0].innerHTML;//set html_text 
    
    
    
    document.getElementsByClassName("comment-div")[0].style.display="none";//hidden
    
    
    
    
    
    add_comment("Test User",
        "Anglar 2.0 has officially been released and we teach you how to qiuckly build apps and add authentication the right way! Let me know if you have any questions.",
        "2016-5-7",
        "57",
        false
    );//add a new comment
    document.getElementsByClassName("comment-div")[1].parentNode.removeChild(document.getElementsByClassName("comment-div")[1]);//delete 
    
    
    
    //any comments here;
    $(".write-button").click(function(){
        var date=new Date();
        add_comment("Test User",$(".write-text").val(),date.getFullYear().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getDate().toString(),"0",false);


    });
    document.getElementsByClassName("pic-slide-img")[0].style.opacity= 100;
    pic_num++;
    setInterval(function(){
        document.getElementsByClassName("pic-slide-img")[pic_num-1].style.opacity= 100;
        document.getElementsByClassName("li-dot")[pic_num-1].style.backgroundColor= "#a7a7a7";
        pic_num++;
        if(pic_num> 5){
            pic_num=1;
        }
        document.getElementsByClassName("pic-slide-img")[(pic_num-2<0)?4:pic_num-2].style.opacity= 100;

        document.getElementsByClassName("li-dot")[(pic_num-2<0)?4:pic_num-2].style.backgroundColor= "white";

        },10000);
	$(window).scroll(function(){
　　		var scrollTop = $(this).scrollTop();//滚动条顶端的top
　　		var scrollHeight = $(document).height();//整个文档的高度	
　　		var windowHeight = $(this).height();//浏览器窗口的高度
　　		if(scrollTop + windowHeight >= scrollHeight){
　　　　		//事件,模拟加载延迟
　　　　		var int=setInterval(function(){
　　　　			if(sum<=4){
　　　　				add_comment("aaa",sum.toString(),"aaa","sadsfdgf",true);
　　　　				sum++;
　　　　			}else{
　　　　				clearInterval(int);
　　　　				sum=1;
　　　　			}
　　　　		},100);
　　		}
	});





});




