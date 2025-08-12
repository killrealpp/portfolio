document.getElementById('email').addEventListener('click', ()=>{
    const email = this.textContent
    navigator.clipboard.writeText(email)
        .then(()=>{
            alert('Email скопирован: ' + email);
        })
})