'use strict';

const key2 = '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';
const key3 = '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';
const input = document.querySelector('input');
const btn = document.querySelector('.generate');
const img = document.querySelector('img');


const getImage = async () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${key3}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                prompt: input.value,
                n: 1,
                size: "1024x1024",
            })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        const url = data.data[0].url;
        console.log(url);
        img.setAttribute('src', url);
        img.classList.remove('none');
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click', getImage);
