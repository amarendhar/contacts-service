import logger from "../../../common/utils/logger";
import ContactsModel from "./ContactsModel";
import * as GlobalTypes from "../../../common/globalTypes";
import * as ContactTypes from "../contactTypes";
import getPicture from "../utils/getPicture";

const addContactMutation = async (contactInput: ContactTypes.Contact) => {
  logger.debug({
    message: `addContactMutation: Searching contact in DB `,
    data: {
      contactInput,
    },
  });

  const contactFromDB = await ContactsModel.findOne({
    "name.title": contactInput.name.title,
    "name.first": contactInput.name.first,
    "name.last": contactInput.name.last,
  });

  if (contactFromDB) {
    // if contact already exist, handle this case
    const message = "Contact already existed in DB";
    logger.debug({
      message: `addContactMutation: ${message}`,
      data: {
        contactInput,
        contactFromDB,
      },
    });

    return {
      status: GlobalTypes.STATUS.FAILED,
      message,
      result: contactFromDB,
    };
  }

  // if contact not found then insert new one
  logger.debug({
    message: `addContactMutation: Creating new contact as contact not found in DB...`,
    data: {
      contactInput,
      contactFromDB,
    },
  });

  const contactModel = new ContactsModel({
    ...contactInput,
    picture: getPicture(contactInput.gender),
  });

  const contact = await contactModel.save();

  const message = "Created contact and inserted in DB";
  logger.debug({
    message: `addContactMutation: ${message}`,
    data: {
      contactInput,
      contactFromDB,
      contact,
    },
  });

  return {
    status: GlobalTypes.STATUS.SUCCESS,
    message,
    result: contact,
  };
};

export default addContactMutation;
