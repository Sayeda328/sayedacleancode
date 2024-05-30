const paragraph = document.querySelector('p');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    if (!input.value) alert('Input is empty')
    else {
        const inputVal = input.value.toLowerCase();
        const reversedVal = input.value.split('').reverse().join('').toLowerCase();
        if (reversedVal == inputVal) {
            const paragraph = document.querySelector('p');
            const button = document.querySelector('button');
            const input = document.querySelector('input');
            
            button.addEventListener('click', () => {
                if (!input.value) alert('Input is empty')
                else {
                    const inputVal = input.value.toLowerCase();
                    const reversedVal = input.value.split('').reverse().join('').toLowerCase();
                    if (reversedVal == inputVal) {
                        paragraph.innerHTML = `<p><span>${inputVal}</span> is a Palindrome</p>`
                    } else {
                        paragraph.innerHTML = `<p><span>${inputVal}</span> is not a Palindrome</p>`
                    }
                }
            })        } else {
            paragraph.innerHTML = `<p><span>${inputVal}</span> is not a Palindrome</p>`
        }
    }
})