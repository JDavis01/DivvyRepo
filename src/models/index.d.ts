import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly transactions?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly transactions: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCharity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Charity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly transactions?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Charity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly transactions: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Charity = LazyLoading extends LazyLoadingDisabled ? EagerCharity : LazyCharity

export declare const Charity: (new (init: ModelInit<Charity>) => Charity) & {
  copyOf(source: Charity, mutator: (draft: MutableModel<Charity>) => MutableModel<Charity> | void): Charity;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly charity?: Charity | null;
  readonly calculatedDonation: number;
  readonly inputDonation?: number | null;
  readonly charityID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTransactionsId?: string | null;
  readonly charityTransactionsId?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly charity: AsyncItem<Charity | undefined>;
  readonly calculatedDonation: number;
  readonly inputDonation?: number | null;
  readonly charityID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTransactionsId?: string | null;
  readonly charityTransactionsId?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}