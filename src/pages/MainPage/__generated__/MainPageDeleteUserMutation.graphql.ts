/**
 * @generated SignedSource<<8e4f79bd226f0dd8c28976c2c93af730>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MainPageDeleteUserMutation$variables = {
  id: string;
};
export type MainPageDeleteUserMutation$data = {
  readonly deleteUser: {
    readonly email: string;
    readonly name: string;
  };
};
export type MainPageDeleteUserMutation = {
  response: MainPageDeleteUserMutation$data;
  variables: MainPageDeleteUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "UserSchema",
    "kind": "LinkedField",
    "name": "deleteUser",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPageDeleteUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainPageDeleteUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b746316db12eccb485db69e8d2e26d78",
    "id": null,
    "metadata": {},
    "name": "MainPageDeleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation MainPageDeleteUserMutation(\n  $id: String!\n) {\n  deleteUser(id: $id) {\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ba90fa95ac87c875add98f4de750b7a";

export default node;
