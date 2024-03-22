class Contact {

    constructor(public name: string, public email: string, public phone: string, public group: string = "no group") {

    }
}

class AddressBook {
    contacts: Contact[] = [];

    addContact(contact: Contact): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }

        // Name validation (example - check for empty name)
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }

        // You can add further validations for phone number format, etc.

        this.contacts.push(contact);
    }

    findContactByName(name: string): Contact | undefined {
        return this.contacts.find((contact) => contact.name === name);
    }

    filterByGroup(group: string): Contact[] {
        return this.contacts.filter((contact) => contact.group === group);
    }

    sortByName(): void {
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }

    // New functionalities:
    // 1. Validate various contact properties on addition (already implemented)
    // 2. Search contacts by name (partial match)

    searchContacts(searchTerm: string): Contact[] {
        const normalizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedSearchTerm)
        );
    }

    printContacts(): void {
        for (const contact of this.contacts) {
            console.log(`Name: ${contact.name}`);
            console.log(`Email: ${contact.email}`);
            console.log(`Phone: ${contact.phone}`);
            console.log(`Group: ${contact.group}`);
        }
    }
}
