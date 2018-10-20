class AddressBook{
    
    constructor(){
        this.contacts = [];
        this.initialComplete = false;
    }

    getInitialContacts(cb){
        var self = this;
        setTimeout(function(){
            self.initialComplete = true;
            if(cb){
                return cb();
            }
        }, 3);
    }

    addContact(contact) {
        this.contacts.push(contact);
    }
    getContact(index){
       return this.contacts[index];
    }
    deleteContact(index){
        this.contacts.splice(index,1);
    }

}