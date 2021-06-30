class Person{
    constructor(firstName,lastName,address,city,state,zipCode,phone,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phone = phone;
        this.email = email;
    }

    set firstName(firstName){
        this.firstName = firstName;
    }
    get firstName(){
        return this.firstName;
    }
    
    set lastName(lastName){
        this.lastName = lastName;
    }
    get lastName(){
        return this.lastName;
    }
    set address(address){
        this.address = address;
    }

    get address(){
        return this.address;
    }

    set city(city){
        this.city = city;
    }
    get city(){
        return this.city;
    }

    set state(state){
        this.state = state;
    }
    get state(){
        return this.state;
    }

    set zipCode(zipCode){
        this.zipCode = zipCode;
    }
    get zipCode(){
        return this.zipCode;
    }

    set phone(phone){
        this.phone = phone;
    }
    get phone(){
        return this.phone;
    }

    set email(email){
        this.email = email;
    }
    get email(){
        return this.email;
    }
}