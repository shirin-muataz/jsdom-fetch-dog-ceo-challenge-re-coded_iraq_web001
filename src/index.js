window.onload = function () {
    //Challenge 1
    let sh = fetch('https://dog.ceo/api/breeds/image/random/4').then(Response => Response.json())

    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    let image3 = document.createElement('img');
    let image4 = document.createElement('img');
    let body = document.querySelector('body');
    body.style.display = 'block';
    sh.then(resp => {
        image1.src = resp.message[0];
        body.appendChild(image1);

        image2.src = resp.message[1];
        body.appendChild(image2);

        image3.src = resp.message[2];
        body.appendChild(image3);

        image4.src = resp.message[3];
        body.appendChild(image4);
    })

    //Challenge 2

    let ul = document.getElementById('dog-breeds');
    const breedUrl = fetch('https://dog.ceo/api/breeds/list/all')
        .then(rep => rep.json())
        .then(dogs => {
            console.log(dogs);
            const breedMessage = dogs.message;
            for (const breed in breedMessage) {
                const li = document.createElement('li');
                li.innerText = breed;
                ul.appendChild(li);
                li.className = 'item';
            }
        })


    //Challenge 3
    ul.addEventListener("click", function (e) {
        if (e.target && e.target.matches("li.item")) {
            e.target.className = "selected";
        }
    });


    //Challenge 4
    const select = document.getElementById('breed-dropdown');
    select.addEventListener('change', function () {
        const opt = select.options[select.selectedIndex];
        const charc = opt.value;

        fetch('https://dog.ceo/api/breeds/list/all')
            .then(rep => rep.json())
            .then(dog => {
                while (ul.firstChild) { /// this one to clear the list
                    ul.removeChild(ul.firstChild);
                }
                console.log(ul);
                for (const dogBreed in dog.message) {
                    if (charc == dogBreed.charAt(0)) {
                        console.log(dogBreed);
                        const li = document.createElement('li');
                        li.innerText = dogBreed;
                        ul.appendChild(li);
                    }

                }
            })
        console.log(`ul is showing here ${ul}`);

    })





}

