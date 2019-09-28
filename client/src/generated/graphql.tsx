import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  revokeRefreshTokensForUsers: Scalars['Boolean'],
  register: Scalars['Boolean'],
  login: LoginResponse,
};


export type MutationRevokeRefreshTokensForUsersArgs = {
  userId: Scalars['Int']
};


export type MutationRegisterArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  bye: Scalars['String'],
  users: Array<User>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  email: Scalars['String'],
  tokenVersion: Scalars['Float'],
};
export type HelloQueryVariables = {};


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type RegisterMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

    export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
      return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
    }
      export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
      
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

    export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
      return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
    }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
  }
}
    `;

    export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
      return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
    }
      export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
      
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;