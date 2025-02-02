const yesbtn = document.getElementById("yes")
    const heading = document.getElementById("head")
    const heading2 = document.getElementById("h")
    
    function fn(){
        heading.innerHTML = " Yey set date:) "
        const btn1 = document.getElementById('yes') 
        const btn2 = document.getElementById('no') 
        const btn3 = document.getElementById('h')
        btn1.remove();
        btn2.remove();
        btn3.remove();
    }
    function move() {
    const btn = document.getElementById('no');
    heading2.innerHTML = " !!! Wala lilibre mo ako !!! "
    const container = btn.parentElement; // Assumes the button is inside a relatively positioned container
    const maxX = container.clientWidth - btn.clientWidth;
    const maxY = container.clientHeight - btn.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "absolute";
    btn.style.top = `${y}px`;
    btn.style.left = `${x}px`;
}