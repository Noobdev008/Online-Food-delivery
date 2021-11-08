let data = JSON.parse(localStorage.getItem('mealDbCart'));
    function showCartItems(){
        let parrent = document.getElementById('cartMeal');
        parrent.innerHTML = null;
        if(localStorage.getItem('mealDbCart') === null || data.length === 0){
            let st = document.createElement('p');
            st.textContent = 'No Item in   the cart.';
            parrent.append(st);
            return;
        }
        data.forEach(({image, price, disc}) => {
            let img = document.createElement('img');
            img.src = image;

            let pri = document.createElement('p');
            pri.textContent = price + ' INR';

            let description = document.createElement('p');
            description.textContent = disc;

            parrent.append(img, pri, description);
        });
    }
    showCartItems();

    function placeOrder(){
        if(data.length === 0){
            alert('No intem in the cart.')
            return;
        }
        alert('Your order is accepted');
        setTimeout(() => {
            alert('Your order is being cooked');
        }, 3000)
        setTimeout(() => {
            alert('Your order is ready');
        }, 8000)
        setTimeout(() => {
            alert('Order out for delivery');
        }, 10000)
        setTimeout(() => {
            alert('Order delivered');
            localStorage.setItem('mealDbCart', JSON.stringify([]));
            window.location.reload();
        }, 12000)
    }