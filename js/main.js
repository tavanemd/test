'use strict';

void function (){

    const leadBtn = document.querySelector('.lead_btn_wrapper');
    const leadString = ()=> {
        fbq('track', 'Lead')
       return undefined
    } ;

    const clickHandler = (e) =>{
        e.stopPropagation()
        console.log('click')

         leadString()

    }

    leadBtn.addEventListener('click',clickHandler)

}();
