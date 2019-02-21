function get_user_data() {
    let userObj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#text').value,
        nPeople: document.querySelector('#number').value,
        date: document.querySelector('#Date').value,
        remarks: document.querySelector('#Remarks').value
    };
    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200)
            alert('sent');
    }
    
    xhttp.open("POST", "/send?data=" + JSON.stringify(userObj))
}