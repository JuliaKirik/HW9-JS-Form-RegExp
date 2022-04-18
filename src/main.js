document.querySelector('ul').addEventListener('click', function(event) {
    let item = event.target.closest('li');
    if (item){
        item.classList.toggle('done')
    }
    if (event.target.closest('.remove')) {
        item.remove()
    }
})

document.querySelector('.addItem').addEventListener('click', function() {
    const input = document.querySelector('#input');
    const list = document.querySelector('.list');

    let li = document.createElement('li');
    let valueInput = input.value;
    li.innerText = valueInput;

    let regExp = /^[A-Za-z0-9]{2,25}$/;
    let resultReg = regExp.test(valueInput);

    if (resultReg) {
        let errorRemove = document.querySelector('.error');
        if (errorRemove){
            errorRemove.remove();
        }

        li.style.background = 'yellow';
        let buttonRemove = document.createElement('button');
        buttonRemove.setAttribute('class', 'remove')
        buttonRemove.innerHTML = "Remove"

        li.append(buttonRemove)
        list.append(li);
        input.value = '';
    } else {
        input.classList.add('invalidInput');
        let error = document.createElement('div');
        error.className = 'error'
        error.innerText = 'Error. The invalid value';
        input.after(error);
    }
});

document.querySelector('#input').addEventListener('change', function() {
    input.classList.remove('invalidInput');
})