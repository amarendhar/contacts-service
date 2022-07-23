import logger from "../../common/utils/logger";
import {
  getContactsQuery,
  addContactMutation,
  removeContactMutation,
} from "./contactsDAL";
import * as ContactTypes from "./contactTypes";

const contactsResolver = {
  Query: {
    contacts: async (): Promise<ContactTypes.Contact[]> => {
      try {
        logger.debug({
          message:
            "contactsResolver.Query.contacts: Fetching contacts from Database",
          data: {},
        });

        const contacts = await getContactsQuery();

        logger.debug({
          message:
            "contactsResolver.Query.contacts: Fetched contacts from Database",
          data: {
            contacts,
          },
        });

        return contacts;
      } catch (error) {
        const message = "contactsResolver.Query.contacts: Failed";

        logger.error({
          message,
          data: {},
          stacktrace: error,
        });

        throw new Error(message);
      }
    },
  },
  Mutation: {
    addContact: async (
      _: undefined,
      { contactInput }: { contactInput: ContactTypes.Contact }
    ): Promise<ContactTypes.AddContact> => {
      try {
        const result = await addContactMutation(contactInput);

        return result
      } catch (error) {
        const message = "contactsResolver.Mutation.addContact: Failed";

        logger.error({
          message,
          data: {
            contactInput,
          },
          stacktrace: error,
        });

        throw new Error(message);
      }
    },
    removeContact: async (
      _: undefined,
      { contactId }: { contactId: String }
    ): Promise<ContactTypes.RemoveContact> => {
      try {
        const result = await removeContactMutation(contactId);

        return result;
      } catch (error) {
        const message = "contactsResolver.Mutation.addContact: Failed";

        logger.error({
          message,
          data: {
            contactId,
          },
          stacktrace: error,
        });

        throw new Error(message);
      }
    },
  },
};

export default contactsResolver;
