/**
 * @generated SignedSource<<daf404b631023b622ef6773c6e6b6383>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPageQuery$variables = {};
export type MainPageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MainPage_query">;
};
export type MainPageQuery = {
  response: MainPageQuery$data;
  variables: MainPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainPage_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainPageQuery",
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
    ]
  },
  "params": {
    "cacheID": "ee0618a641fa1542cd54d9459b57a9b9",
    "id": null,
    "metadata": {},
    "name": "MainPageQuery",
    "operationKind": "query",
    "text": "query MainPageQuery {\n  ...MainPage_query\n}\n\nfragment MainPage_query on Query {\n  getUsers {\n    id\n    name\n    email\n  }\n}\n"
  }
};

(node as any).hash = "2a5cafc42e49dad04e7e576065a97c18";

export default node;
