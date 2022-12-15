window.onload = function() {
    var bannerLeft=0;
    var first=1;
    var last;
    var textCnt=0;
    var $text = $(".text-banner span");
    var $first;
    var $last;

    $text.each(function(){
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+15;
        $(this).attr("id", "banner"+(++textCnt));
    });

    
    if( textCnt > 7){

        last = textCnt;

        setInterval(function() {
            $text.each(function(){
                $(this).css("left", $(this).position().left-1);
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -200) {
                $first.css("left", $last.position().left + $last.width()+5 );
                first++;
                last++;
                if(last > textCnt) { last=1; }   
                if(first > textCnt) { first=1; }
            }
        }, 50);        

}

var oOT = new Audio("./assets/out_of_time.mp3");
var outOf = document.querySelector("#btnPlay");
    oOT.volume = .4;
    oOT.loop = true;

    outOf.onclick = function () {
        if(oOT.paused) {
            oOT.play();
        } else {
            oOT.pause(); 
        }
    }

};