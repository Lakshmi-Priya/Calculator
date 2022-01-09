let results = document.getElementById('results');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                results.innerText = '';
                break;
            case '=':
                try{
                    results.innerText = eval(results.innerText);
                } catch {
                    results.innerText = "Error"
                }
                break;
            case '<-':
                if (results.innerText){
                   results.innerText = results.innerText.slice(0, -1);
                }
                break;
            default:
                results.innerText += e.target.innerText;
        }
    });
});