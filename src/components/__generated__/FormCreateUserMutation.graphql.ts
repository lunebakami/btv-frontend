/**
 * @generated SignedSource<<40da66f84bc3ec0c03b05a5755f73f6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FormCreateUserMutation$variables = {
  email: string;
  name: string;
};
export type FormCreateUserMutation$data = {
  readonly createUser: {
    readonly email: string;
    readonly name: string;
  };
};
export type FormCreateUserMutation = {
  response: FormCreateUserMutation$data;
  variables: FormCreateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UserSchema",
    "kind": "LinkedField",
    "name": "createUser",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FormCreateUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FormCreateUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b24eceaee5f3597745a130de95fb0611",
    "id": null,
    "metadata": {},
    "name": "FormCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation FormCreateUserMutation(\n  $name: String!\n  $email: String!\n) {\n  createUser(input: {name: $name, email: $email}) {\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "50337a3ee6d7b24b2df8c9dc42f13ce3";

export default node;
