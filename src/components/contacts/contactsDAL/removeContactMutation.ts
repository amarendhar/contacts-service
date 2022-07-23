import logger from "../../../common/utils/logger";
import ContactsModel from "./ContactsModel";
import * as GlobalTypes from "../../../common/globalTypes";

const removeContactMutation = async (contactId: String) => {
  logger.debug({
    message: `removeContactMutation: Searching contact in DB `,
    data: {
      contactId,
    },
  });

  const contactFromDB = await ContactsModel.findById(contactId);

  if (!contactFromDB) {
    // if contact not found to remove, handle this case
    const message = "Contact not found in DB";
    logger.debug({
      message: `removeContactMutation: ${message}`,
      data: {
        contactId,
      },
    });

    return {
      status: GlobalTypes.STATUS.FAILED,
      message,
      result: contactFromDB,
    };
  }

  // if contact found then remove from DB
  logger.debug({
    message: `removeContactMutation: Contact found in DB, removing the contact...`,
    data: {
      contactId,
      contactFromDB,
    },
  });

  const contactDeleted = await ContactsModel.findByIdAndDelete(contactId);

  const message = 'Contact removed from the DB'
  logger.debug({
    message: `removeContactMutation: ${message}`,
    data: {
      contactId,
      contactFromDB,
      contactDeleted,
    },
  });

  return {
    status: GlobalTypes.STATUS.SUCCESS,
    message,
    result: contactDeleted
  };
};

export default removeContactMutation;
