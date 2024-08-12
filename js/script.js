window.addEventListener("load",function(){
    // 메뉴기능
    const nav = this.document.querySelector(".nav")
    const btMenu = this.document.querySelector(".bt-menu")
    const navClose =this.document.querySelector(".nav-close")
    btMenu.addEventListener("click",function(){
        nav.classList.add("nav-active")
    })
    navClose.addEventListener("click",function(){
        nav.classList.remove("nav-active")
    })
    nav.addEventListener("mouseleave",function(){
        nav.classList.remove("nav-active")
    })
    // 언어 리스트 펼치기
    const languageLi = this.document.querySelector(".language li")
    const language = this.document.querySelector(".language")
    const languageBox = this.document.querySelector(".language-box")
    languageBox.addEventListener("click", function(){
        languageBox.classList.toggle("language-box-active")
    })
    // 트렌지션기능
    setTimeout(function(){
        languageLi.style.transition = "all 0.2s"
    }, 500)
})