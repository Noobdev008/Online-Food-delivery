function fetchMeal(){
        fetch('https://themealdb.com/api/json/v1/1/random.php')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.meals);
            showMeal(res.meals);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    fetchMeal();
    function showMeal(data){
        let parrent = document.getElementById('meal');
        parrent.innerHTML = null;

        data.forEach(({strMealThumb, strInstructions}) => {
            let img = document.createElement('img');
            img.src = strMealThumb;

            let price = document.createElement('p');
            let pr = Math.floor(Math.random()*500)
            price.textContent = pr + ' INR';

            let description = document.createElement('p');
            description.textContent = strInstructions;

            let obj = {
                image: strMealThumb,
                price: pr,
                disc: strInstructions
            }
            let buuton = document.createElement('button')
            buuton.textContent = 'Add to Cart';
            buuton.onclick = () => {
                addToCart(obj)
            }

            parrent.append(img, price, description, buuton);
        });
    }
    function addToCart(e){
        // if(localStorage.getItem('mealDbCart') === null)
            localStorage.setItem('mealDbCart', JSON.stringify([]));
        let data = JSON.parse(localStorage.getItem('mealDbCart'));
        data.push(e);
        localStorage.setItem('mealDbCart', JSON.stringify(data));
        alert('Item added to cart');
    }