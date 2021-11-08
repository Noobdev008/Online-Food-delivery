 function signup(e){
        e.preventDefault();
        let myForm = document.getElementById("signupForm");
        let obj = {
            name: myForm.name.value,
            email: myForm.email.value,
            password: myForm.password.value,
            username: myForm.user.value,
            mobile: myForm.mobile.value,
            description: myForm.disc.value
        }
        console.log(obj);
        fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            alert(res.message);
        })
        .catch((err) => {
           alert(err.message);
        })

    }