const content1_1 = document.getElementById('content1_1');
const content1_2 = document.getElementById('content1_2');
const content1_3 = document.getElementById('content1_3');
const content1_4 = document.getElementById('content1_4');

const content2_1 = document.getElementById('content2_1');
const content2_2 = document.getElementById('content2_2');
const content2_3 = document.getElementById('content2_3');
const content2_4 = document.getElementById('content2_4');

const content3_1 = document.getElementById('content3_1');
const content3_2 = document.getElementById('content3_2');
const content3_3 = document.getElementById('content3_3');
const content3_4 = document.getElementById('content3_4');

const content4_1 = document.getElementById('content4_1');
const content4_2 = document.getElementById('content4_2');
const content4_3 = document.getElementById('content4_3');
const content4_4 = document.getElementById('content4_4');

const content5 = document.getElementById('content5');


var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// category 1

function hideContent1_1(){
    content1_1.style.visibility = "hidden";
    content1_1.style.height = "0"
    content1_1.style.padding = "0";
    content1_1.style.margin = "0 20px 0 0";
    content1_1.innerHTML = " ";
}

function showContent1_1(){
    content1_1.style.visibility = "visible";
    content1_1.style.height = "fit-content";
    content1_1.style.padding = "20px 10px";
    content1_1.style.margin = "0 20px 20px 0";
}


function hideContent1_2(){
    content1_2.style.visibility = "hidden";
    content1_2.style.height = "0"
    content1_2.style.padding = "0";
    content1_2.style.margin = "0 20px 0 0";
    content1_2.innerHTML = " ";
}

function showContent1_2(){
    content1_2.style.visibility = "visible";
    content1_2.style.height = "fit-content";
    content1_2.style.padding = "20px 10px";
    content1_2.style.margin = "0 20px 20px 0";
}

function hideContent1_3(){
    content1_3.style.visibility = "hidden";
    content1_3.style.height = "0"
    content1_3.style.padding = "0";
    content1_3.style.margin = "0 20px 0 0";
    content1_3.innerHTML = " ";
}

function showContent1_3(){
    content1_3.style.visibility = "visible";
    content1_3.style.height = "fit-content";
    content1_3.style.padding = "20px 10px";
    content1_3.style.margin = "0 20px 20px 0";
}

function hideContent1_4(){
    content1_4.style.visibility = "hidden";
    content1_4.style.height = "0"
    content1_4.style.padding = "0";
    content1_4.style.margin = "0 20px 0 0";
    content1_4.innerHTML = " ";
}

function showContent1_4(){
    content1_4.style.visibility = "visible";
    content1_4.style.height = "fit-content";
    content1_4.style.padding = "20px 10px";
    content1_4.style.margin = "0 20px 20px 0";
}



function clicks1(i){
    var index = parseInt(i);
    if(arr[index-1] == 1 && index == 1){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 2){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 3){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 4){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_4();
        arr[index-1] = 0;
    }else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
        
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        hideContent5();
        
        switch(index){
            case 1:  hideContent1_1();
            break;
            case 2: 
            content1_2.innerHTML = 
             '<ul>'+
                 '<li><a href="http://asiaelectro.kz/?page_id=2441">????????????</a></li>'+
                 '<li><a href="http://asiaelectro.kz/?page_id=2426">????????????????</a></li>'+
                 '<li><a href="http://asiaelectro.kz/?page_id=11608">??????</a></li>'+
             '</ul>';
            showContent1_2();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 3: content1_3.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2448">????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2454">??????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2458">??????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2462">????????????</a></li>'+
            '</ul>';
            showContent1_3();
            hideContent1_1();
            hideContent1_2();
         
            hideContent1_4();
     
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 4: content1_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=19483">???????????????? ?????? ??????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=19752">???????????????????????????????????? ?????? ??????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=20279">??????????????????</a></li>'+
            '</ul>';
            showContent1_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
         
     
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
        }
        
        arr[index-1] = 1;
    }
}

// category 2

function hideContent2_1(){
    content2_1.style.visibility = "hidden";
    content2_1.style.height = "0"
    content2_1.style.padding = "0";
    content2_1.style.margin = "0 20px 0 0";
    content2_1.innerHTML = " ";
}

function showContent2_1(){
    content2_1.style.visibility = "visible";
    content2_1.style.height = "fit-content";
    content2_1.style.padding = "20px 10px";
    content2_1.style.margin = "0 20px 20px 0";
}


function hideContent2_2(){
    content1_2.style.visibility = "hidden";
    content2_2.style.height = "0"
    content2_2.style.padding = "0";
    content2_2.style.margin = "0 20px 0 0";
    content2_2.innerHTML = " ";
}

function showContent2_2(){
    content2_2.style.visibility = "visible";
    content2_2.style.height = "fit-content";
    content2_2.style.padding = "20px 10px";
    content2_2.style.margin = "0 20px 20px 0";
}

function hideContent2_3(){
    content2_3.style.visibility = "hidden";
    content2_3.style.height = "0"
    content2_3.style.padding = "0";
    content2_3.style.margin = "0 20px 0 0";
    content2_3.innerHTML = " ";
}

function showContent2_3(){
    content2_3.style.visibility = "visible";
    content2_3.style.height = "fit-content";
    content2_3.style.padding = "20px 10px";
    content2_3.style.margin = "0 20px 20px 0";
}

function hideContent2_4(){
    content2_4.style.visibility = "hidden";
    content2_4.style.height = "0"
    content2_4.style.padding = "0";
    content2_4.style.margin = "0 20px 0 0";
    content2_4.innerHTML = " ";
}

function showContent2_4(){
    content2_4.style.visibility = "visible";
    content2_4.style.height = "fit-content";
    content2_4.style.padding = "20px 10px";
    content2_4.style.margin = "0 20px 20px 0";
}



function clicks2(i){
    var index = parseInt(i);
    if(arr[index-1] == 1 && index == 5){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 6){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 7){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 8){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_4();
        arr[index-1] = 0;
    }else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
       
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        hideContent5();

        switch(index){
            case 5: content2_1.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2492">????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2496">????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2498">????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2500">????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2502">????????????</a></li>'+
            '</ul>';
            showContent2_1();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
         
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 6: content2_2.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2538">??????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2540">????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2542">??????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2544">????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2546">??????????????</a></li>'+
            '</ul>';
            showContent2_2();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_1();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 7: content2_3.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40734">?????????????????????????????? ????????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40736">??????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40738">?????????????? ?????? ?????????????????? ??????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40740">?????????????????????? ?????????????????????????????????? ????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40743">?????????????????? ?????????????? ????????????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40743">?????????????????????????? ?????????????? ?????? ??????(??????)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40747">???????????????????????? ???????????????????????????? ?????? ???????????????????? ????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40749">???????????????????????? ???????????????????????????? ????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40825">???????????????? ?????????????? 110-750 ???? (??????1)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40751">????????????????????????????????????????????????????????? ???????????????????? ????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40753">?????????????? ?????? ???????????????????????? ?????????????????????????????? ?? ??????????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40755">????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40757">???????????????????? ????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40759">?????????????????????????? ???????????????????? ??????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40761">?????????????????????????? ???????????????? ?????????????????? ???? 10 ????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40763">?????????????????????????? ???????????????? ?????????????????? ???????????????????? ????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40765">?????????????????????????? ???????????????? ?????????????????? ?????????? ????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40767">?????????????????????????? ???????????????? ?????????????????? ?????????? ??????-3,3 ???? ?????? ???????????????????? ???????? </a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40769">?????????????????????????? ???????????????? ?????????????????? ?????????? ??????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40771">?????????????????????????? ?????????????????????????? ?????????????????????????? ???????? 110-500 ????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40773">?????????????????????????? ?????????????????????? ??????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40775">???????????? ??????????</a></li>'+
            '</ul>';
            showContent2_3();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
            
            hideContent2_1();
            hideContent2_2();
      
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 8: 
            content2_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40928">???????????????????????????????? ????????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40930">???????????????????????????? ???????????????????? (??????????????????????????)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40932">???????????????????????????? ???????? (??????????????????????????) ?? ?????????????? ??????????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40935">???????????????????????????? ???????? (??????????????????????????) ????????????????????</a></li>'+
            '</ul>';
            showContent2_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
           
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            
            break;
        }
        arr[index-1] = 1;
    }
}

// category 3
function hideContent3_1(){
    content3_1.style.visibility = "hidden";
    content3_1.style.height = "0"
    content3_1.style.padding = "0";
    content3_1.style.margin = "0 20px 0 0";
    content3_1.innerHTML = " ";
}

function showContent3_1(){
    content3_1.style.visibility = "visible";
    content3_1.style.height = "fit-content";
    content3_1.style.padding = "20px 10px";
    content3_1.style.margin = "0 20px 20px 0";
}


function hideContent3_2(){
    content3_2.style.visibility = "hidden";
    content3_2.style.height = "0"
    content3_2.style.padding = "0";
    content3_2.style.margin = "0 20px 0 0";
    content3_2.innerHTML = " ";
}

function showContent3_2(){
    content3_2.style.visibility = "visible";
    content3_2.style.height = "fit-content";
    content3_2.style.padding = "20px 10px";
    content3_2.style.margin = "0 20px 20px 0";
}

function hideContent3_3(){
    content3_3.style.visibility = "hidden";
    content3_3.style.height = "0"
    content3_3.style.padding = "0";
    content3_3.style.margin = "0 20px 0 0";
    content3_3.innerHTML = " ";
}

function showContent3_3(){
    content3_3.style.visibility = "visible";
    content3_3.style.height = "fit-content";
    content3_3.style.padding = "20px 10px";
    content3_3.style.margin = "0 20px 20px 0";
}

function hideContent3_4(){
    content3_4.style.visibility = "hidden";
    content3_4.style.height = "0"
    content3_4.style.padding = "0";
    content3_4.style.margin = "0 20px 0 0";
    content3_4.innerHTML = " ";
}

function showContent3_4(){
    content3_4.style.visibility = "visible";
    content3_4.style.height = "fit-content";
    content3_4.style.padding = "20px 10px";
    content3_4.style.margin = "0 20px 20px 0";
}



function clicks3(i){
    var index = parseInt(i);
    if(arr[index-1] == 1 && index == 9){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 10){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 11){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 12){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_4();
        arr[index-1] = 0;
    
    }else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
  
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        hideContent5();

        switch(index){
            case 9: content3_1.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=29012">????????????</a></li>'+
            '</ul>';
            showContent3_1();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
     
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 10: content3_2.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40969">VIKO</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40975">????????????</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40977">TDM</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40979">NILSON</a></li>'+
            '</ul>';
            showContent3_2();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
           
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
         
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 11: 
            hideContent3_3();
            break;
            case 12: content3_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40967">???????????????????????????? ?????????? ?? ????????????????????</a></li>'+
            '</ul>';
            showContent3_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
     
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            
            break;
        }
        arr[index-1] = 1;
    }
}

// category 4

function hideContent4_1(){
    content4_1.style.visibility = "hidden";
    content4_1.style.height = "0"
    content4_1.style.padding = "0";
    content4_1.style.margin = "0 20px 0 0";
    content4_1.innerHTML = " ";
}

function showContent4_1(){
    content4_1.style.visibility = "visible";
    content4_1.style.height = "fit-content";
    content4_1.style.padding = "20px 10px";
    content4_1.style.margin = "0 20px 20px 0";
}


function hideContent4_2(){
    content4_2.style.visibility = "hidden";
    content4_2.style.height = "0"
    content4_2.style.padding = "0";
    content4_2.style.margin = "0 20px 0 0";
    content4_2.innerHTML = " ";
}

function showContent4_2(){
    content4_2.style.visibility = "visible";
    content4_2.style.height = "fit-content";
    content4_2.style.padding = "20px 10px";
    content4_2.style.margin = "0 20px 20px 0";
}

function hideContent4_3(){
    content4_3.style.visibility = "hidden";
    content4_3.style.height = "0"
    content4_3.style.padding = "0";
    content4_3.style.margin = "0 20px 0 0";
    content4_3.innerHTML = " ";
}

function showContent4_3(){
    content4_3.style.visibility = "visible";
    content4_3.style.height = "fit-content";
    content4_3.style.padding = "20px 10px";
    content4_3.style.margin = "0 20px 20px 0";
}

function hideContent4_4(){
    content4_4.style.visibility = "hidden";
    content4_4.style.height = "0"
    content4_4.style.padding = "0";
    content4_4.style.margin = "0 20px 0 0";
    content4_4.innerHTML = " ";
}

function showContent4_4(){
    content4_4.style.visibility = "visible";
    content4_4.style.height = "fit-content";
    content4_4.style.padding = "20px 10px";
    content4_4.style.margin = "0 20px 20px 0";
}



function clicks4(i){
    var index = parseInt(i);
    if(arr[index-1] == 1 && index == 13){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 14){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 15){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 16){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_4();
        arr[index-1] = 0;
    }
    else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
    
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        hideContent5();
        switch(index){
            case 13: content4_1.innerHTML = 
            '<ul>'+
                '<li><a href="# ">?????????????????????????????????? ?????????????????????? ????????????????</a></li>'+
                '<li><a href="# ">?????????????????????????????????? ?????????????????????? ??????????</a></li>'+
                '<li><a href="# ">?????????????????????? ?????????????????? ??????????</a></li>'+
            '</ul>';
            showContent4_1();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
           
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
           
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 14: 
            hideContent4_2();
            break;
            case 15: 
            hideContent4_3();
            break;
            case 16: 
            hideContent4_4();
            break;
        }
        arr[index-1] = 1;
    }
}


// Category 5


function hideContent5(){
    content5.style.visibility = "hidden";
    content5.style.height = "0"
    content5.style.padding = "0";
    content5.style.margin = "0 20px 0 0";
    content5.innerHTML = " ";
    content5.style.transition = "0.8s";
}

function showContent5(){
    content5.style.visibility = "visible";
    content5.style.height = "fit-content";
    content5.style.padding = "20px 10px";
    content5.style.margin = "0 20px 20px 0";
    content5.style.transition = "0.8s";
}

function clicks5(i){
    var index = parseInt(i);
    if(arr[index-1] == 1){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent5();
        arr[index-1] = 0;
    }else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        arr[index-1] = 1;
    }
}
