
function login(e) {
    e.preventDefault();
    let myForm = document.getElementById("loginForm");
    let obj = {
        password: myForm.password.value,
        username: myForm.user.value,
    }
    fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            fetchUser(obj.username, res.token);
        })
        .catch((err) => {
            console.log(err);
        })
}
function fetchUser(user, token) {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${user}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            alert('login success.')
        })
        .catch((err) => {
            console.log(err);
            alert('login failed.')
        })
}
