
function _(id){
    return document.querySelector(id)
}

window.addEventListener("resize", ()=>{
    _('.popup').style.display = 'none'
    _('.popup_tip').style.display = 'none'
    _('.popup2').style.display = 'none'
});

function toggle_display_none_flex(selector){
    if(_(selector).style.display === 'none' || _(selector).style.display ==='')
        _(selector).style.display = 'flex' // show
    else 
        _(selector).style.display = 'none' // hide
}

_('#share_btn').addEventListener('click',(e)=>{

    if(document.body.clientWidth < 376) // mobile biew
    {
        toggle_display_none_flex('.popup2')
    }
    else{ // desktop view
        toggle_display_none_flex('.popup')
        toggle_display_none_flex('.popup_tip')
    }
})

_('button.close').addEventListener('click', (e)=>{
    _('.popup2').style.display = 'none';
})

