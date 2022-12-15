$(document).ready(function(){

    let card1 = $('.tracks-card').children('div:eq(4)');
    let card2 = $('.tracks-card').children('div:eq(3)');
    let card3 = $('.tracks-card').children('div:eq(2)');
    let card4 = $('.tracks-card').children('div:eq(1)');
    let card5 = $('.tracks-card').children('div:eq(0)');

    $(card1).click(function(){
        $(card2).removeClass('active');
        $(card3).removeClass('active');
        $(card4).removeClass('active');
        $(card5).removeClass('active');
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $('.lyric').addClass('active')
            $('.lyric').append("<p>[Verse 1]<br>It's 5 AM my time again<br>I've soakin' up the moon, can't sleep<br>It's 5 AM my time again<br>I'm calling and you know it's me<br>I'm pushin' myself further<br>I'm just tryin' to feel my heartbeat beat (Beat)<br>I wrap my hands around your neck<br>You love it when I always squeeze<br>It's 5 AM, I'm high again<br>And you can see that I'm in pain (Ooh, ooh)<br>I've fallen into emptiness<br>I want you 'cause we're both insane<br>I'm staring into the abyss<br>I'm lookin' at myself again<br>I'm dozing off to R.E.M.<br>I'm trying not to lose my faith<br><br>[Chorus]<br>And I love it when you watch me sleep<br>You spin me 'round so I can breathe<br>It's only safe for you and me<br>I know you won't let me OD<br>And if I finally die in peace<br>Just wrap my body in these sheets (Sheets)<br>And pour out the gasolinе<br>It don't mean much to me<br><br>[Verse 2]<br>It's 5 AM, I'm nihilistI know therе's nothing after this (After this)Obsessing over aftermathsApocalypse and hopelessness (Hopelessness)The only thing I understandIs zero sum of tenderness (Tenderness)Oh, baby, please, just hold me closeMake me believe there's more to live<br><br>[Bridge]<br>Around, around, around, around we go<br>In this game called life, we are not free<br><br>[Chorus]<br>And I love it when you watch me sleep<br>You spin me 'round so I can breathe<br>It's only safe for you and me (Don't let me go)<br>I know you won't let me OD (Don't you let me go)<br>And if I finally die in peace (Oh yeah)<br>Just wrap my body in these sheets<br>And pour out the gasoline<br>It don't mean much to me</p>")
        } else {
            $('.lyric').removeClass('active')
            $('.lyric').empty()
        }
    })

    $(card1).hover(function(){
        if ($('.img-wrap').hasClass('active') == true) {

        } else {
            $('.gasoline').addClass('active');
        }
    }, function() {
        if($(card1).hasClass('active')){
            
        } else {
            $('.gasoline').removeClass('active')
        }
    })

    $(card2).click(function(){
        $(card1).removeClass('active');
        $(card3).removeClass('active');
        $(card4).removeClass('active');
        $(card5).removeClass('active');
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $('.lyric').addClass('active')
            $('.lyric').append("<p>[Intro]<br>Yeah, yeah<br><br>[Verse 1]<br>The last few months, I've been workin' on me, baby<br>There's so much trauma in my life<br>I've been so cold to the ones who loved me, baby<br>I look back now and I realize<br><br>[Pre-Chorus]<br>And I remember when I held you<br>You begged me with your drowning eyes to stay<br>And I regret I didn't tell you<br>Now I can't keep you from loving him<br>You made up your mind<br><br>[Chorus]<br>Say I love you, girl, but I'm out of time<br>Say I'm there for you, but I'm out of time<br>Say that I'll care for you, but I'm out of time<br>Said I'm too late to make you mine, out of time (Ah)<br><br>[Verse 2]<br>If he mess up just a little<br>Baby, you know my line<br>If you don't trust him a little<br>Then come right back, girl, come right back<br>Give me one chance, just a little<br>Baby, I'll treat you right<br>And I'll love you like I shoulda loved you all the time<br><br>[Pre-Chorus]<br>And I remember when I held you (Held you, baby)<br>You begged me with your drowning eyes to stay (Never again, baby)<br>And I regret I didn't tell you (Hey)<br>Now I can't keep you from loving him<br>You made up your mind (Uh)<br><br>[Chorus]<br>Say I love you, girl, but I'm out of time<br>Say I'm there for you, but I'm out of time (No)<br>Say that I'll care for you, but I'm out of time (Hey)<br>Said I'm too late to make you mine, out of time (Ah)<br>You might also like<br>Glimpse of Us<br><br>[Outro: The Weeknd]<br>Ooh, singin', out of time<br>Said I had you to myself, but I'm out of time<br>Say that I'll care for you, but I'm out of time<br>But I'm too late to make you mine, out of time (Uh)<br>Out of time<br>Out of time<br><br>[Spoken Outro: Jim Carrey]<br>Don't you dare touch that dial<br>Because like the song says, you are out of time<br>You're almost there, but don't panic<br>There's still more music to come<br>Before you're completely engulfed in the blissful embrace of that little light you see in the distance<br>Soon you'll be healed, forgiven, and refreshed<br>Free from all trauma, pain, guilt, and shame<br>You may even forget your own name<br>But before you dwell in that house forever<br>Here's thirty minutes of easy listening to some slow tracks<br>On 103.5 Dawn FM</p>")
        } else {
            $('.lyric').removeClass('active')
            $('.lyric').empty()
        }
    })

    $(card2).hover(function(){
        if ($('.img-wrap').hasClass('active') == true) {
            
        } else {
            $('.outoftime').addClass('active');
        }
    }, function() {
        if($(card2).hasClass('active')){

        } else {
            $('.outoftime').removeClass('active')
        }
    })

    $(card3).click(function(){
        $(card1).removeClass('active');
        $(card2).removeClass('active');
        $(card4).removeClass('active');
        $(card5).removeClass('active');
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $('.lyric').addClass('active')
            $('.lyric').append("<p>[Verse 1: The Weeknd]<br>Strike a pose with my kinfolk<br>Front page of the billboards<br>Suit and tie and cigar smokes<br>Macallan shots 'til it burn throats<br>We still celebratin' Super Bowl<br>Catalog lookin' legendary<br>Ring froze like it's February<br>XO, that's a mercenary<br>A quarter bill on an off-year<br>Used to sing on lofts<br>But now we cruisin' on a yacht, we clear, yeah<br>Said you wanted your boyfriend jealous with a couple pics<br>And you didn't expect to fall for me once you got this dick<br>The city dark, city dangerous<br>Your girlfriend's tryna pair you with somebody more famous<br>But instead you ended up with someone so basic, faceless<br>Someone to take your pictures and frame it<br>And my new girl, she a movie star<br>My new girl, she a movie star<br>I loved her right, make her scream like Neve Campbell<br>But when I make her laugh, swear it cures my depressin' thoughts<br>'Cause baby girl, she a movie star<br>Baby girl, she a movie star<br>I told myself that I'd never fall<br>But here we go again<br><br>[Chorus: The Weeknd]<br>Ooh<br>Here we go again<br>Life's a dream<br>'Cause it's never what it seems<br>But you'd rather love and lost with tears<br>Than never love at all<br>So here we go again<br><br>[Verse 2: Tyler, The Creator]<br>Although this love is strong to me<br>Some things can change, go wrong with me<br>We don't know how it's gonna be<br>Forever is too long to me<br>We don't need the government involved because we like to touch<br>We don't need no damn religion tellin' us that we in love<br>But if we did crush down the road, spendin' lawyer fees up<br>Pen and pad gon' save my ass if these feelings freeze up<br>You gon' sign this prenup, you gon' sign this prenup<br>You gon' sign this prenup, you gon' sign this prenup<br><br>[Chorus: The Weeknd]<br>Ooh<br>Here we go again<br>Life's a dream<br>'Cause it's never what it seems<br>But you'd rather love and lost with tears<br>Than never love at all<br>So here we go again<br><br>[Outro: The Weeknd]<br>The number one station to free your soul (Free your soul)<br>Dawn 103.5</p>")
        } else {
            $('.lyric').removeClass('active')
            $('.lyric').empty()
        }
    })

    $(card3).hover(function(){
        if ($('.img-wrap').hasClass('active') == true) {
            
        } else {
            $('.herewego').addClass('active');
        }
    }, function() {
        if($(card3).hasClass('active')){

        } else {
            $('.herewego').removeClass('active')
        }
    })

    $(card4).click(function(){
        $(card1).removeClass('active');
        $(card2).removeClass('active');
        $(card3).removeClass('active');
        $(card5).removeClass('active');
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $('.lyric').addClass('active')
            $('.lyric').append("<p>[Intro]<br>Take my breath<br>Take my breath<br>Take my breath<br>Take my breath<br><br>[Verse 1]<br>I saw the fire in your eyes<br>I saw the fire when I look into your eyes<br>You tell me things you wanna try (Uh)<br>I know temptation is the devil in disguise<br>You risk it all to feel alive, oh yeah<br>You're offering yourself to me like sacrifice<br>You said you do this all the time<br>Tell me you love me if I bring you to the light<br><br>[Pre-Chorus]<br>It’s like a dream what she feels with me<br>Shе loves to be on the еdge<br>Her fantasy is okay with me<br>Then suddenly, baby says<br><br>[Chorus]<br>Take my breath away<br>And make it last forever, babe<br>Do it now or never, babe (Ah)<br>Take my breath away<br>Nobody does it better, babe<br>Bring me close to—<br><br>[Verse 2]<br>Want me to hold on to you tight<br>You pull me closer, feel the heat between your thighs (Uh, say)<br>You're way too young to end your life (Huh)<br>Girl, I don't wanna be the one who pays the price<br><br>[Pre-Chorus]<br>Ooh, it’s like a dream what she feels with me<br>She loves to be on the edge<br>Her fantasy is okay with me<br>Then suddenly, baby says<br><br>[Chorus]<br>Take my breath away<br>And make it last forever, babe<br>Do it now or never, babe (Ah)<br>Take my breath away<br>Nobody does it better, babe<br>Bring me close to heaven, babe (Uh)<br>Take my breath<br><br>[Bridge]<br>Oh, oh-ooh<br>And they'll see me<br>Oh-ooh, ooh (Yeah, say)<br>Oh-oh, oh-oh<br>Oh-oh, oh-oh<br>Oh-oh, oh-oh<br>Oh-oh<br><br>[Chorus]<br>Take my breath away (Take my breath away)<br>And make it last forever, babe<br>Do it now or never, babe (Ah)<br>Take my breath away (Take my breath away)<br>Nobody does it better, babe<br>Bring me close to heaven, babe (Take my breath)<br>Take my breath (Take my breath a—, breath away)<br>(Nobody)<br>Take my breath (Take my breath a—, breath away)<br>Nobody does it better, babe<br>Bring me close to heaven, babe (Uh)<br>Take my breath</p>")
        } else {
            $('.lyric').removeClass('active')
            $('.lyric').empty()
        }
    })

    $(card4).hover(function(){
        if ($('.img-wrap').hasClass('active') == true) {
            
        } else {
            $('.takemy').addClass('active');
        }
    }, function() {
        if($(card4).hasClass('active')){

        } else {
            $('.takemy').removeClass('active')
        }
    })

    $(card5).click(function(){
        $(card1).removeClass('active');
        $(card2).removeClass('active');
        $(card3).removeClass('active');
        $(card4).removeClass('active');
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $('.lyric').addClass('active')
            $('.lyric').append("<p>[Intro]<br>Yeah, yeah, yeah<br>Yeah, yeah, yeah, yeah<br>Oh, oh, oh<br>Hey<br>Yeah, yeah, yeah, uh<br>Yeah, yeah, yeah, yeah<br><br>[Chorus]<br>Oh, what we got<br>Baby, what we got is secure<br>Been a part of toxic love<br>It tore us apart<br>Things you want, I'm not lookin' for<br>You're my best friend now<br>You're my best friend now<br>Oh, I don't want to be responsible<br>For your heart if we fall<br>'Cause I'll get clumsy and tear it apart<br>I love you so, but we can't get close<br>You're my best friend now<br>You're my best friend now<br><br>[Verse]<br>Oh, I love it when we climax (Climax)<br>And I would never burn you<br>I could never hurt you<br>If we do it like that<br>Don't try to take it further<br>Focus on the friendship<br>Get a little sidetracked<br>Catchin' little feelings<br>Thought we had arrangements<br>Thought you weren't like that<br>Yeah (Uh-uh), I thought you weren't like that<br><br>[Pre-Chorus]<br>Oh, friends no more<br>Sex as friends no more<br>You don't wanna have sex as friends no more<br>Friends no more<br>Ooh, friends no more, uh<br>Sex as friends no more<br>You don't wanna have sex as friends no more<br>Oh<br><br>[Chorus]<br>Oh, what we got (Oh yeah)<br>Baby, what we got is secure<br>Been a part of toxic love<br>It tore us apart (Oh yeah)<br>Things you want, I'm not lookin' for (I'm not searchin')<br>You're my best friend now (Oh, baby)<br>You're my best friend now<br>Oh, I don't want to be responsible<br>For your heart if we fall (Oh no)<br>'Cause I'll get clumsy and tear it apart<br>I love you so (Oh yeah), but we can't get close<br>You're my best friend now (Best friend now)<br>You're my best friend now (Best friend now)<br><br>[Outro]<br>Dawn FM (Radio)</p>")
        } else {
            $('.lyric').removeClass('active')
            $('.lyric').empty()
        }
    })
    
    $(card5).hover(function(){
        if ($('.img-wrap').hasClass('active') == true) {
            
        } else {
            $('.bestfriends').addClass('active');
        }
    }, function() {
        if($(card5).hasClass('active')){

        } else {
            $('.bestfriends').removeClass('active')
        }
    })


})