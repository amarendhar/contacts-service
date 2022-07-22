import { Contact } from "../contactTypes";
import { mockContact } from "../mocks/mockContact";

const addContactMutation = (input: Contact) => {
  return mockContact;
};

export default addContactMutation;
