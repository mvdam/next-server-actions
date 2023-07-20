type DummyDb = {
  contactForms: any[];
};

export const dummyDb: DummyDb = { contactForms: [] };

// fake Promise to simulate async call
export const saveContactFormToDb = async (
  contactForm: PushSubscription
): Promise<DummyDb> => {
  dummyDb.contactForms.push(contactForm);
  return Promise.resolve(dummyDb);
};

export const getContactFormsFromDb = () => {
  return Promise.resolve(dummyDb.contactForms);
};
