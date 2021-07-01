class Person {
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phone;
    email;
    constructor(firstName, lastName, address, city, state, zipCode, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phone = phone;
        this.email = email;
    }

    set firstName(firstName) {
        let regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
    }
    get firstName() {
        return this.firstName;
    }

    set lastName(lastName) {
        let regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (regex.test(this.firstName)) {
            this.lastName = lastName;
        }
    }
    get lastName() {
        return this.lastName;
    }
    set address(address) {
        let regex = RegExp("^[A-Za-z]{5,}$");
        if (regex.test(address)) {
            this.address = address;
        }
    }

    get address() {
        return this.address;
    }

    set city(city) {
        let regex = RegExp("^[A-Za-z]{3,}$");
        if (regex.test(city)) {
            this.city = city;
        }
    }
    get city() {
        return this.city;
    }

    set state(state) {
        let regex = RegExp("^[A-Za-z]{3,}$");
        if (regex.test(state)) {
            this.state = state;
        }
    }
    get state() {
        return this.state;
    }

    set zipCode(zipCode) {
        let regex = RegExp("[0-9]{6}");
        if (regex.test(zipCode)) {
            this.zipCode = zipCode;
        }
    }
    get zipCode() {
        return this.zipCode;
    }

    set phone(phone) {
        let regex = RegExp("^\s(?:\+?(\d{1,3}))?[-.(]*(\d{3})[-.)]*(\d{3})[-.]*(\d{4})(?:*x(\d+))?\s*");
        if (regex.test(phone)) {
            this.phone = phone;
        }
    }
    get phone() {
        return this.phone;
    }

    set email(email) {
        let regex = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (regex.test(email)) {
            this.email = email;
        }
    }
    get email() {
        return this.email;
    }
}

class AddressBook {
    addressBookArray = [];

    addContact(person) {
        this.addressBookArray.push(person);
    }

    showContacts() {
        addressBook.addressBookArray.forEach(person => {
            console.log(" \nFirstName : " + person.firstName + "\nLastName : " + person.lastName + "\n Address: " + person.address +
                "\nCity : " + person.city + "\nState : " + person.state + "\nZipCode : " + person.zipCode + "\nPhone : " + 
                person.phone + "\nemail : " + person.email);
        });
    }
}

let addressBook = new AddressBook();
var person = new Person("Abhi", "Kapoor", "VedViyas", "Meerut", "UP", "250005","9876543210","abhi.kapoor@example.com");
addressBook.addContact(person);
addressBook.showContacts();