$(()=>{
    //intro typing 효과
    function typingIntro(){
        const content="WELCOME TO MY PORTOFOLIO \n JANG HA NA"
        const text=document.querySelector(".text");
        let i=0;

        function typing(){
            let txt=content[i++];
            text.innerHTML += txt == "\n" ? "<br/>" : txt;
            if(i>content.length){
                text.textContent="";
                i=0;
            }
        }
        setInterval(typing, 150);
    }
    typingIntro();


    //contact 이메일 복사하기
    let copyText=(text)=>{
        navigator.clipboard.writeText(text);
        copyText.textContent=text;
        alert("복사되었습니다.");
    }

    let emailClick=document.querySelector(".emailSrc");
    emailClick.addEventListener("click",()=>{
        copyText("frontweb99@gmail.com");
    })


    // 스킬 박스 위에 호버하면 글씨들 보였다 안 보였다
    $(".skill-text").hide();
    $(".skill-wrap>div").hover(function(){
        $(this).find("div").stop().fadeIn();
    },function(){
        $(this).find("div").stop().fadeOut();
    });


    // scroll 이벤트
    $(window).scroll(()=>{
        let scroll=$(window).scrollTop();
        console.log(scroll);

        //skill
        if(scroll<950){
            $("#skill h1").css({"transform":"translateX(-150%)","opacity":"0"})
        }
        if(scroll>1400){
            $("#skill h1").css({"transform":"translateX(8%)","opacity":"1"});
            
        }
        if(scroll>2050){
            $("#skill h1").css({"transform":"translateX(-150%)","opacity":"0"})
        }

        // project
        if(scroll<1775){
            $("#project>h1").css({"transform":"translateX(-150%)","opacity":"0"})
        }
        if(scroll>2000){
            $("#project>h1").css({"transform":"translateX(5%)","opacity":"1"})
        }
        if(scroll>2870){
            $("#project>h1").css({"transform":"translateX(-150%)","opacity":"0"})
        }
        
        // design
        if(scroll<2790){
            $("#design>h1").css({"transform":"translateX(-120%)","opacity":"0"});
        }
        if(scroll>3170){
            $("#design>h1").css({"transform":"translateX(6%)","opacity":"1"});
        }
        if(scroll>3900){
            $("#design>h1").css({"transform":"translate(-120%)","opacity":"0"});
        }
        
        //mouse
        if(scroll<3999){
            $(".mouse").fadeIn();
        }
        if(scroll>4000){
            $(".mouse").fadeOut();
        }

        // topbtn
        if(scroll>100){
            $(".topbtn").fadeIn();
        }
        if(scroll<99){
            $(".topbtn").fadeOut();
        }
    });
    $(".topbtn").click(function(){
        $('html').animate({scrollTop:0},400);
    });

    // 모달팝업창
    $(".modal").hide();

    $(".renewal .more-box>p").click(function(){
        $(".renewal-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    })
    $(".last .more-box>p").click(function(){
        $(".last-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    });
    $(".react .more-box>p").click(function(){
        $(".react-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    });
    $(".monami .more-box>p").click(function(){
        $(".monami-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    })
    $(".millie .more-box>p").click(function(){
        $(".millie-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    })
    $(".outback .more-box>p").click(function(){
        $(".outback-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    })
    $(".romi .more-box>p").click(function(){
        $(".romi-more").fadeIn("fast");
        // 모달팝업창 뜨면 전체 스크롤 막기
        $("body").css("overflow","hidden");
    })

    // 모달팝업창 x 버튼 누르면 모달창 닫기 + 이미지 스크롤 된거 초기화하기 + 팝업창 뜨면 전체 스크롤 안되게 하는거 다시 원래대로 돌리기
    $(".closebtn").click(function(){
        $(".modal").fadeOut("fast");
        $(".modal-img-wrap").scrollTop(0);
        $("body").css("overflow","auto");
    });

    $(".modal-img").click(function(){
        $(".modal").fadeOut("fast");
        $("body").css("overflow","auto");
        $(".modal-img-wrap").scrollTop(0);
    })

    // a 태그 클릭 시 부드럽게 섹션 이동하기
    $(".nav li:nth-of-type(1)>a").click(function(){
        let intro=$("#intro");
        let offset=intro.offset().top

        $("html").animate({scrollTop:offset},500)
    });
    $(".nav li:nth-of-type(2)>a").click(function(){
        let profile=$("#profile");
        let offset=profile.offset().top-25;
        
        $("html").animate({scrollTop:offset},500)
    });
    $(".nav li:nth-of-type(3)>a").click(function(){
        let skill=$("#skill");
        let offset=skill.offset().top-55;

        $("html").animate({scrollTop:offset},500);
    })
    $(".nav li:nth-of-type(4)>a").click(function(){
        let project=$("#project");
        let offset=project.offset().top-60;

        $("html").animate({scrollTop:offset},500);
    });
    $(".nav li:nth-of-type(5)>a").click(function(){
        let design=$("#design");
        let offset=design.offset().top-70;

        $("html").animate({scrollTop:offset},500);
    });

    // 디자인 섹션 배너디자인 슬라이드 이동
    
    $(".pre").click(function(){
        $(".banner-wrap img:last").prependTo(".banner-wrap");
        $(".banner-wrap").css("margin-left","-100%");
        $(".banner-wrap").stop().animate({marginLeft:0},700);
    });
    $(".next").click(function(){
        $(".banner-wrap").stop().animate({marginLeft:"-100%"},700, function(){
            $(".banner-wrap img:first").appendTo(".banner-wrap");
            $(".banner-wrap").css("margin-left",0);
        });
    });
});