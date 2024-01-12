document.addEventListener('DOMContentLoaded' , () => {
    const faqcontainer = document.querySelector('.faq-content');

    faqcontainer.addEventListener('click', (e) =>{
        const groupHeader =  e.target.closest('.faq-group-header');
        if(!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');


        // taggole

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus')
        
        groupBody.classList.toggle('open');

        // Close the toggle
           const otherGroup = faqcontainer.querySelectorAll('faq-group');
           
           otherGroup.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i')

                otherGroupBody.classList.romove('open');
                otherIcon.classList.romove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
                                                 
           });



    })
})

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton =document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => 
    mobileMenu.classList.toggle('active'))
})