var phoneBook = [];

// bonus
function showContacts(phoneBook) {
    const myNodeList = document.querySelectorAll("p");
    for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].remove(); //reset to blank slate
    }

    for (let ctr = 0; ctr < phoneBook.length; ctr++) {
        const para = document.createElement("p");
        const node = document.createTextNode(`${phoneBook[ctr].contactName}: ${phoneBook[ctr].contactNumber}`);
        para.appendChild(node);

        const element = document.getElementById("contactDiv");
        element.appendChild(para);
    }
}

function viewContacts() {
    showContacts(phoneBook);
}

function addContact(name, number) {
    var contactObject = {
        contactName: name,
        contactNumber: number,
    };
    phoneBook.push(contactObject);
    alert('Contact added, phonebook updated');
}

function submitContact() {
    var name = document.getElementById('userName').value;
    var number = document.getElementById('userNumber').value;
    if (name == "" || number == ""){
        alert('Both fields are required.');
    } else {
        addContact(name, number);
        document.getElementById('userName').value = '';
        document.getElementById('userNumber').value = '';
    }
}

