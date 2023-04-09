// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Charity, Transaction } = initSchema(schema);

export {
  User,
  Charity,
  Transaction
};