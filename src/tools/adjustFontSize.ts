export default function adjustFontSize(multiply:number = 1) {
    document
        .querySelectorAll("html")
        .forEach((el: HTMLElement) => {
            if(!el.classList.contains('material-icons') && !el.classList.contains('fa')) {
                el.style['zoom'] = multiply;
            }
        });
    
    let $amount: HTMLDivElement = document.querySelector(".asw-amount");

    if($amount) {
        $amount.innerText = `${ (multiply * 100).toFixed(0) }%`
    }
}