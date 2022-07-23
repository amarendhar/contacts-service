import logger from "../../../common/utils/logger";
import ContactsModel from "./ContactsModel";

const getContactsQuery = async () => {
  logger.debug({
    message: `getContactsQuery: Fetching contacts from DB `,
    data: {},
  });

  const contacts = await ContactsModel.find({});

  logger.debug({
    message: `getContactsQuery: Fetched contacts from DB `,
    data: {
      contacts,
    },
  });

  return contacts;
};

export default getContactsQuery;
