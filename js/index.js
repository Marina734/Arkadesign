(()=>
{
    let DontShowOpacity = true;
    let DontShowSlide = true;
    let DontShowSlide1 = true;
    let DontShowSlide2 = true;

    $(window).on('scroll' , function()
    {
        let scroll_y = $(window).scrollTop();  

         if(scroll_y > 500 && DontShowOpacity)
        {
            DontShowOpacity = false;
            $('.opacity-center').fadeIn(1300);
        }

        if(scroll_y > 4300 && DontShowSlide)
        {
            DontShowSlide = false;
            $('.first_image').slideDown(1400);
            $('.one_people').slideDown(1400);
        }
        if(scroll_y > 4600 && DontShowSlide1)
        {
            DontShowSlide1 = false;
            $('.next_image').slideDown(1400);
            $('.two_people').slideDown(1400);
        }
        if(scroll_y > 4900 && DontShowSlide2)
        {
            DontShowSlide2 = false;
            $('.last_image').slideDown(1400);
            $('.tree_people').slideDown(1400);
        }

    })
})();

const link = $("#theme-link");
const lightTheme = "styles/style-light.css";
const darkTheme = "styles/dark-light.css";

$(function() {
    const Theme = localStorage.getItem('theme');
    
    if(Theme == "light")
        link.attr("href", lightTheme);
    else link.attr("href", darkTheme);
});
const DarkTheme = () =>
{
    let currTheme = link.attr("href");
    let theme = "";
    if(currTheme == lightTheme)
    {
   	    currTheme = darkTheme;
   	    theme = "dark";
    }
    else
    {    
        currTheme = lightTheme;
   	    theme = "light";
    }

    link.attr("href", currTheme);
    localStorage.setItem('theme' , theme);
}
$('.btn_subject').on("click", DarkTheme );

const arrow_top = document.querySelector('#arrow_top');
arrow_top.onclick = () => window.scrollTo(scrollX, 0);
window.addEventListener('scroll', () => arrow_top.hidden = (scrollY < innerHeight));