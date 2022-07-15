function main(){
    const button = document.createElement("button")
    button.textContent = "reset";

    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const resetButton = document.querySelector('#reset-button');
    const url = "http://localhost:9001/counter";
    const counterRes = await fetch(url);
    const {value} = await counterRes.json();
    countValue = value;
    console.log({countValue});
    
    // let countValue = 0;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }
    function reset() {
        main();
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    countContainer.textContent = countValue;
}
main()