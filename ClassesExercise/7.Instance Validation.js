class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(id) {
        const validation = /^\d{6}$/g;
        console.log(id.match(validation));
        if(!id.match(validation))
        {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = id;
    }

    set email(email) {
        const validation = /[A-Za-z0-9]+\@[A-Za-z0-9]+/g;
        if(!email.match(validation))
        {
            throw new TypeError("Invalid e-mail");
        }
        this._email = email;
    }

    set firstName(firstName) {
        const validation = /^[A-Za-z]+$/g;;
        if(firstName.length < 3 || firstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        if(!firstName.match(validation))
        {
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = firstName;
    }

    set lastName(lastName) {
        const validation = /^[A-Za-z]+$/g;;
        if(lastName.length < 3 || lastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        if(!lastName.match(validation))
        {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = lastName;
    }
}

//let acc = new CheckingAccount('13141', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');