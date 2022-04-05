const acc_btns = document.querySelectorAll('.accord-btn');
const acc_text = document.querySelectorAll('.accord-text');

acc_btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        acc_text.forEach((acc)=> {
            if(e.target.nextElementSibling !== acc && acc.classList.contains('active')){
                acc.classList.remove('active');
                acc_btns.forEach(btn => btn.classList.remove('active'));
            }
        });
        const panel = btn.nextElementSibling;
        panel.classList.toggle('active');
        btn.classList.toggle('active');
    });
});
