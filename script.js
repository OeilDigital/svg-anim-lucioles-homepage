const logo = document.querySelectorAll('#logo > path');
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const events = document.querySelector('.events');

setTimeout(() => {
    events.style.display = "block";
}, "5000");