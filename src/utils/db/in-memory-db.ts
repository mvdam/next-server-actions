type ContactForm = {
  name: string
  email: string
  message: string
}

type DummyDb = {
  contactForms: ContactForm[]
}

let dummyDb: DummyDb = { contactForms: [] }

// fake Promise to simulate async call
export const saveContactFormToDb = async (
  contactForm: ContactForm
): Promise<DummyDb> => {
  dummyDb.contactForms.push(contactForm)
  return Promise.resolve(dummyDb)
}

export const getContactFormsFromDb = () => {
  return Promise.resolve(dummyDb.contactForms)
}
