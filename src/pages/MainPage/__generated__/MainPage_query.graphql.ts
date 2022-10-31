/**
 * @generated SignedSource<<cc058a25d1332b231c8f3aed5f81e8bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPage_query$data = {
  readonly getUsers: ReadonlyArray<{
    readonly email: string;
    readonly id: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "MainPage_query";
};
export type MainPage_query$key = {
  readonly " $data"?: MainPage_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainPage_query">;
};

import MainPageQuery_graphql from './MainPageQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": MainPageQuery_graphql
    }
  },
  "name": "MainPage_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserSchema",
      "kind": "LinkedField",
      "name": "getUsers",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "2a5cafc42e49dad04e7e576065a97c18";

export default node;
