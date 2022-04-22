window.addEventListener("load",setup)
x=0
var pro_type=localStorage.getItem('pro_type')   
function setup(){
    console.log(ml5.version);
document.getElementById("version").innerHTML="ML5 Version - "+ml5.version
if(pro_type==1){
    document.getElementById("title_link").innerHTML="My Project" 
    sc="https://teachablemachine.withgoogle.com/models/Bbs671w3O/"
        c = "https://teachablemachine.withgoogle.com/models/Bbs671w3O/model.json"
        document.getElementById("title_link").href=sc
}
    else{
    c=localStorage.getItem("link")
    document.getElementById("title_link").href=c

    c=c+"model.json"
    document.getElementById("title_link").innerHTML="Your Project" 
        

    document.getElementById("title_link").href=c


    }
}
cs=0
z=0
x=0
y=0
function cam_on(){
    z=0
    Webcam.reset("#cam_div")
    x=1
        Webcam.set({
            width:550,
            height:400,
            
            image_format:"png",
            image_quality:90
        })
        document.getElementById("cam_div").style.animationPlayState="running"
        setTimeout(
    function(){
        document.getElementById("cam_div").style.animationPlayState="paused"
        document.getElementById("cam_div").style.opacity=1
        Webcam.attach("#cam_div")
        setTimeout(function(){document.getElementById("selfie").style.cursor="pointer"
        z=1},1000)
        
    },700
    
        )
}
function take_pic(){
    if(z==1){
       
    Webcam.set({
        width:550,
        height:400,        
        image_format:"png",
        image_quality:90
    })
    
     
        document.getElementById("pic_div").style.animationPlayState="running"
        setTimeout(
    function takeSnapshot(){

        Webcam.snap(function snap(data_uri){
            document.getElementById("pic_div").style.height = "400px";
            document.getElementById("pic_div").style.width = "565px";
        document.getElementById("pic_div").innerHTML="<img id='img_pic' src='"+data_uri+"'>"
        
        })
    },700

    
        )
        if(x==1){
        y = 1
    x=0}
console.log(y)
setTimeout(
    function(){
        if(y == 1){

            console.log("hhh");
            document.getElementById("select").style.visibility="visible"
            cs=1
            document.getElementById("select").style.animationPlayState="running"
            y=0
        }},1000
)
    }
}
var c =0
var b=localStorage.getItem("pro_type")


function send(){

    if(cs==1){
        move()
        classifier=ml5.imageClassifier(c,check)


        }
        else if(load==1){
          load123()  
        }
}
function check() {

var img_src= document.getElementById("img_pic")

   classifier.classify(img_src,got_results)
    
}
function got_results(result, error){
    if(error){
    console.log(error)
    var length=error.length
    var len=0
   
    document.getElementById('tc').innerHTML="Results("+length+")-"
    while(len<length){
    document.getElementById("classess").innerHTML=document.getElementById("classess").innerHTML+"<br><div id='out_class'><div id='in_class' style='background-color: white;height: 70px;width: "+error[len].confidence*97.8+"%;'><h3 style='position:absolute;word-break: normal;margin-left:5px;font-weight:100'>       "+error[len].label+" - "+error[len].confidence.toFixed(5)+"%"+"</h3></div></div>"
    len++
    }
    done()
    
}
else{

    
    console.log(result)
    
    
}
}
var mar=160
function move(){
   cs=0 
    if(mar > -560){
        document.getElementById("cam_div").style.marginRight="100px"    
    document.getElementById("cam_div").style.marginLeft=mar
    document.getElementById("pic_div").style.float="left"
    document.getElementById("pic_div").style.Left="200px"
    document.getElementById("selfie").style.right=mar
    document.getElementById("camera").style.marginLeft=mar-20
    

    
    mar=mar-10
    setTimeout(move,0.01)


}
else{
    document.getElementById("cam_div").style.visibility="hidden"
    document.getElementById("select").style.borderColor="#50C878"
    document.getElementById("select").style.background="transparent"
    document.getElementById("select").src="load.gif"

}
}
var load=0
op=0
function done(){
    
    document.getElementById("select").style.borderColor="white"
    document.getElementById("select").style.background="#50C878"
    document.getElementById("select").src="load.png"
    load=1
    

    if(op<1){
    document.getElementById("classes").style.opacity=op
    document.getElementById("classes").style.display="block"
    op=op+0.1
    setTimeout(done,10)
    }
}
function load123(){
    document. location. reload()
}
//97.8

