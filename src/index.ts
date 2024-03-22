class Contact {

    constructor(public name: string, public email: string, public phone: string, public group: string = 'no group') {

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
            console.log(`****************`);
        }
    }
}
const addressBook = new AddressBook();

const contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890", 'group1');
const contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123"); // Invalid email
const contact3 = new Contact("", "valid@email.com", "789-012-3456"); // Empty name
const contact4 = new Contact("luqman Ali", "Luqman@example.com", "111-222-3333", 'group1');
const contact5 = new Contact("Ahmad ahmad", "Ali@example.com", "444-555-6666", 'group2');
const contact6 = new Contact("Zain Zain", "Zain@example.com", "777-888-9999", 'group2');


addressBook.addContact(contact1);
addressBook.addContact(contact4);
addressBook.addContact(contact5);
addressBook.addContact(contact6);

try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
    addressBook.addContact(contact3); // This will throw an error (empty name)
} catch (error) {
    console.error("Error adding contact:", (error as Error).message);
}

console.log("Contacts:");
addressBook.printContacts();

// Example usage of new search functionality
const searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach((contact) => console.log(`  - ${contact.name}`));

// implement method filterByGroup
console.log('Filter By Group1');
console.log(addressBook.filterByGroup('group1'));

// implement method sortByName
addressBook.sortByName();
console.log('Sort By Name :');
addressBook.printContacts();

