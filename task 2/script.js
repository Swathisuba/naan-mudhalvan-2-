const sub= document.getElementById('submit');
sub.addEventListener('click',() => {
    event.preventDefault();
    const username = document.getElementById('username').ariaValueMax;
    console.log(username);
})