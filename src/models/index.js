// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Charity, Donation } = initSchema(schema);

export {
  User,
  Charity,
  Donation
};