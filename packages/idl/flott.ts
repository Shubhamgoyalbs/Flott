/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/flott.json`.
 */
export type Flott = {
  "address": "9vG8CUJ5Szcr7HVgMzsdzvUAauCbmyiCYTuyUAyeDnpq",
  "metadata": {
    "name": "flott",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "activateApiUser",
      "discriminator": [
        30,
        245,
        149,
        30,
        42,
        27,
        174,
        208
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "activateEnrollment",
      "discriminator": [
        253,
        182,
        73,
        21,
        126,
        242,
        56,
        176
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vestingReceiver",
          "signer": true
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "activateSubscription",
      "discriminator": [
        101,
        41,
        57,
        61,
        203,
        67,
        214,
        17
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "recipient",
          "relations": [
            "subscriptionPolicy"
          ]
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "activateSubscriptionToken",
      "discriminator": [
        158,
        177,
        177,
        98,
        255,
        209,
        79,
        168
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "recipientTokenAccount",
          "writable": true
        },
        {
          "name": "recipient",
          "relations": [
            "subscriptionPolicy"
          ]
        },
        {
          "name": "subscriberTokenAccount",
          "writable": true
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorityRefill",
      "discriminator": [
        72,
        87,
        218,
        173,
        175,
        31,
        113,
        67
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "authorizeApiUser",
      "discriminator": [
        109,
        83,
        26,
        160,
        122,
        177,
        233,
        105
      ],
      "accounts": [
        {
          "name": "server",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "cancelEnrollmentToken",
      "discriminator": [
        132,
        232,
        210,
        81,
        249,
        41,
        142,
        6
      ],
      "accounts": [
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "makerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "cancelAuthority",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "isCancelable",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "cancelSubscription",
      "discriminator": [
        60,
        139,
        189,
        242,
        191,
        208,
        143,
        18
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "cancelSubscriptionToken",
      "discriminator": [
        37,
        107,
        111,
        136,
        170,
        25,
        122,
        236
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "mint"
        },
        {
          "name": "subscriberTokenAccount",
          "writable": true
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "cancelVestingEnrollment",
      "discriminator": [
        210,
        192,
        222,
        29,
        42,
        100,
        172,
        115
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "cancelAuthority",
          "signer": true
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "cancelVestingPolicy",
      "discriminator": [
        10,
        109,
        20,
        42,
        45,
        146,
        7,
        26
      ],
      "accounts": [
        {
          "name": "maker",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "claimToken",
      "discriminator": [
        116,
        206,
        27,
        191,
        166,
        19,
        0,
        73
      ],
      "accounts": [
        {
          "name": "server",
          "signer": true
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "makerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "receiverAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "serverTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "server"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "claimVestingTranche",
      "discriminator": [
        94,
        33,
        144,
        6,
        111,
        17,
        33,
        243
      ],
      "accounts": [
        {
          "name": "server",
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "closeApiAccount",
      "discriminator": [
        127,
        73,
        203,
        131,
        194,
        207,
        180,
        157
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "relations": [
            "apiUser"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "createVestingPolicy",
      "docs": [
        "Vesting Instructions"
      ],
      "discriminator": [
        25,
        214,
        51,
        25,
        77,
        15,
        139,
        184
      ],
      "accounts": [
        {
          "name": "maker"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createVestingPolicyParams"
            }
          }
        }
      ]
    },
    {
      "name": "deactivateApiUser",
      "discriminator": [
        172,
        254,
        6,
        29,
        83,
        117,
        89,
        174
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "depositToSubscriptionVault",
      "discriminator": [
        49,
        191,
        193,
        248,
        8,
        187,
        147,
        2
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositToSubscriptionVaultToken",
      "discriminator": [
        179,
        5,
        33,
        157,
        67,
        6,
        187,
        144
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "signer": true,
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "subscriberTokenAccount",
          "writable": true
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositToVault",
      "discriminator": [
        18,
        62,
        110,
        8,
        26,
        106,
        248,
        151
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true,
          "relations": [
            "apiUser"
          ]
        },
        {
          "name": "authority"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "dumpEnrollment",
      "discriminator": [
        125,
        38,
        213,
        131,
        225,
        64,
        253,
        31
      ],
      "accounts": [
        {
          "name": "server",
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "dumpToken",
      "discriminator": [
        233,
        143,
        98,
        211,
        238,
        33,
        227,
        142
      ],
      "accounts": [
        {
          "name": "maker",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "makerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "isCancelable",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "enrollToken",
      "discriminator": [
        5,
        163,
        44,
        115,
        55,
        10,
        99,
        210
      ],
      "accounts": [
        {
          "name": "maker",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "makerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "isCancelable",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "enrollVestingPolicy",
      "discriminator": [
        216,
        123,
        53,
        119,
        82,
        126,
        190,
        212
      ],
      "accounts": [
        {
          "name": "maker",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "vestingReceiver"
        },
        {
          "name": "vestingReceiverPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  101,
                  105,
                  118,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiver"
              },
              {
                "kind": "account",
                "path": "vestingPolicy"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vestingVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vestingReceiverPda"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "isCancelable",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "expireOrder",
      "discriminator": [
        174,
        27,
        85,
        247,
        105,
        245,
        220,
        13
      ],
      "accounts": [
        {
          "name": "server"
        },
        {
          "name": "authority"
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "extendExpiry",
      "discriminator": [
        216,
        39,
        141,
        15,
        230,
        100,
        24,
        26
      ],
      "accounts": [
        {
          "name": "extendAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "maker"
        },
        {
          "name": "authority"
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "owner"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "initializeApiUser",
      "docs": [
        "Api Instructions"
      ],
      "discriminator": [
        102,
        82,
        87,
        15,
        164,
        251,
        96,
        21
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "feePercentage",
          "type": "u32"
        }
      ]
    },
    {
      "name": "initializeOrder",
      "docs": [
        "Order Instructions"
      ],
      "discriminator": [
        133,
        110,
        74,
        175,
        112,
        159,
        245,
        159
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "maker"
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeOrderParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeOrderToken",
      "discriminator": [
        12,
        183,
        199,
        139,
        254,
        188,
        127,
        152
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "maker"
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "token",
          "type": "pubkey"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeOrderParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeSubscriber",
      "discriminator": [
        144,
        144,
        134,
        12,
        63,
        82,
        213,
        73
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber"
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "initializeSubscriberToken",
      "discriminator": [
        161,
        125,
        99,
        40,
        151,
        48,
        233,
        26
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber"
        },
        {
          "name": "mint"
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "initializeSubscriptionPolicy",
      "docs": [
        "Subscription Instructions"
      ],
      "discriminator": [
        5,
        52,
        54,
        155,
        190,
        163,
        242,
        184
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeSubscriptionPolicyParams"
            }
          }
        }
      ]
    },
    {
      "name": "payOrder",
      "discriminator": [
        52,
        142,
        74,
        106,
        147,
        51,
        53,
        17
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "server"
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "apiVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "maker"
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "payOrderToken",
      "discriminator": [
        166,
        64,
        154,
        30,
        130,
        227,
        43,
        127
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "server"
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "apiVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiVaultTokenAccount",
          "writable": true
        },
        {
          "name": "serverTokenAccount",
          "writable": true
        },
        {
          "name": "payerTokenAccount",
          "writable": true
        },
        {
          "name": "maker"
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "paySubscription",
      "discriminator": [
        214,
        139,
        186,
        253,
        169,
        248,
        196,
        11
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "recipient",
          "relations": [
            "subscriptionPolicy"
          ]
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "server"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "paySubscriptionToken",
      "discriminator": [
        69,
        63,
        36,
        85,
        74,
        222,
        194,
        171
      ],
      "accounts": [
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "subscriber",
          "relations": [
            "subscriberPda"
          ]
        },
        {
          "name": "mint"
        },
        {
          "name": "subscriberVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "subscriberPda"
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "recipientTokenAccount",
          "writable": true
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "serverTokenAccount",
          "writable": true
        },
        {
          "name": "subscriberTokenAccount",
          "writable": true
        },
        {
          "name": "subscriptionPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "subscriberPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  98,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "account",
                "path": "subscriber"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "server"
        },
        {
          "name": "recipient",
          "relations": [
            "subscriptionPolicy"
          ]
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        },
        {
          "name": "policyCuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "refundPayout",
      "discriminator": [
        242,
        236,
        189,
        53,
        35,
        131,
        116,
        29
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "refundPayoutToken",
      "discriminator": [
        8,
        56,
        52,
        250,
        138,
        10,
        138,
        4
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "maker"
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "expiry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  112,
                  105,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "split",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  112,
                  108,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "refund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "order"
              }
            ]
          }
        },
        {
          "name": "maker",
          "writable": true
        },
        {
          "name": "owner"
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "refundVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "refund"
              }
            ]
          }
        },
        {
          "name": "makerTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "cuid",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateSubscriptionPolicy",
      "discriminator": [
        207,
        1,
        131,
        174,
        225,
        210,
        86,
        234
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "owner"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "subscriptionPolicy",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "cuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "isActive",
          "type": "bool"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "trialIntervals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateVestingPolicy",
      "discriminator": [
        58,
        149,
        35,
        126,
        10,
        146,
        22,
        145
      ],
      "accounts": [
        {
          "name": "maker",
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "owner"
        },
        {
          "name": "vestingPolicy",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  108,
                  105,
                  99,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              },
              {
                "kind": "arg",
                "path": "policyCuid"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "policyCuid",
          "type": "string"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateVestingPolicyParams"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawFromVault",
      "discriminator": [
        180,
        34,
        37,
        46,
        156,
        0,
        211,
        238
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true,
          "relations": [
            "apiUser"
          ]
        },
        {
          "name": "authority"
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFromVaultToken",
      "discriminator": [
        68,
        18,
        172,
        94,
        161,
        168,
        58,
        243
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true,
          "relations": [
            "apiUser"
          ]
        },
        {
          "name": "authority"
        },
        {
          "name": "mint"
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "apiUser"
              }
            ]
          }
        },
        {
          "name": "ownerTokenAccount",
          "writable": true
        },
        {
          "name": "apiUser",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  105
                ]
              },
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "apiUser",
      "discriminator": [
        114,
        254,
        92,
        27,
        57,
        242,
        120,
        8
      ]
    },
    {
      "name": "expiry",
      "discriminator": [
        7,
        101,
        83,
        210,
        236,
        185,
        37,
        84
      ]
    },
    {
      "name": "order",
      "discriminator": [
        134,
        173,
        223,
        185,
        77,
        86,
        28,
        51
      ]
    },
    {
      "name": "refund",
      "discriminator": [
        15,
        242,
        240,
        148,
        154,
        52,
        94,
        101
      ]
    },
    {
      "name": "split",
      "discriminator": [
        166,
        254,
        141,
        46,
        23,
        221,
        129,
        195
      ]
    },
    {
      "name": "subscriber",
      "discriminator": [
        44,
        244,
        131,
        14,
        146,
        208,
        93,
        64
      ]
    },
    {
      "name": "subscriptionPolicy",
      "discriminator": [
        7,
        35,
        140,
        185,
        63,
        229,
        199,
        6
      ]
    },
    {
      "name": "vestingPolicy",
      "discriminator": [
        38,
        87,
        86,
        240,
        29,
        11,
        42,
        140
      ]
    },
    {
      "name": "vestingReceiver",
      "discriminator": [
        86,
        172,
        187,
        143,
        78,
        15,
        208,
        102
      ]
    }
  ],
  "events": [
    {
      "name": "addRetryScheduler",
      "discriminator": [
        180,
        212,
        146,
        161,
        35,
        226,
        145,
        5
      ]
    },
    {
      "name": "apiAccountClosed",
      "discriminator": [
        40,
        207,
        243,
        255,
        135,
        109,
        2,
        210
      ]
    },
    {
      "name": "apiUserAccountActiveState",
      "discriminator": [
        47,
        41,
        87,
        188,
        66,
        8,
        109,
        242
      ]
    },
    {
      "name": "apiUserAccountGotAuthorized",
      "discriminator": [
        109,
        56,
        154,
        235,
        159,
        123,
        189,
        34
      ]
    },
    {
      "name": "claimedVestingTranche",
      "discriminator": [
        174,
        75,
        35,
        247,
        52,
        2,
        21,
        249
      ]
    },
    {
      "name": "completedVesting",
      "discriminator": [
        91,
        133,
        86,
        57,
        107,
        81,
        114,
        100
      ]
    },
    {
      "name": "enrolledInVestingPolicy",
      "discriminator": [
        130,
        57,
        34,
        162,
        239,
        116,
        221,
        96
      ]
    },
    {
      "name": "enrollmentActivated",
      "discriminator": [
        255,
        27,
        104,
        116,
        6,
        111,
        189,
        59
      ]
    },
    {
      "name": "enrollmentCancelled",
      "discriminator": [
        155,
        169,
        221,
        46,
        176,
        14,
        7,
        52
      ]
    },
    {
      "name": "enrollmentDumped",
      "discriminator": [
        166,
        243,
        128,
        124,
        145,
        211,
        48,
        207
      ]
    },
    {
      "name": "orderCompleted",
      "discriminator": [
        90,
        77,
        52,
        248,
        56,
        233,
        110,
        197
      ]
    },
    {
      "name": "orderExpired",
      "discriminator": [
        241,
        55,
        48,
        196,
        160,
        51,
        40,
        213
      ]
    },
    {
      "name": "orderExpiryExtended",
      "discriminator": [
        154,
        64,
        140,
        85,
        21,
        195,
        62,
        75
      ]
    },
    {
      "name": "orderInitialized",
      "discriminator": [
        180,
        118,
        44,
        249,
        166,
        25,
        40,
        81
      ]
    },
    {
      "name": "orderPaid",
      "discriminator": [
        228,
        254,
        193,
        72,
        11,
        166,
        51,
        231
      ]
    },
    {
      "name": "paymentSuccessfulSubscription",
      "discriminator": [
        113,
        181,
        136,
        159,
        181,
        143,
        191,
        23
      ]
    },
    {
      "name": "refundPaidOut",
      "discriminator": [
        175,
        128,
        191,
        196,
        198,
        36,
        73,
        91
      ]
    },
    {
      "name": "removeSubscriberRetryScheduler",
      "discriminator": [
        14,
        27,
        48,
        70,
        202,
        2,
        16,
        61
      ]
    },
    {
      "name": "subscriberActivated",
      "discriminator": [
        138,
        102,
        174,
        113,
        209,
        228,
        250,
        128
      ]
    },
    {
      "name": "subscriptionCancelled",
      "discriminator": [
        158,
        216,
        233,
        205,
        138,
        62,
        176,
        239
      ]
    },
    {
      "name": "subscriptionPolicyInitialized",
      "discriminator": [
        174,
        97,
        216,
        240,
        155,
        217,
        215,
        62
      ]
    },
    {
      "name": "subscriptionPolicyUpdated",
      "discriminator": [
        8,
        149,
        225,
        167,
        175,
        33,
        110,
        21
      ]
    },
    {
      "name": "transfersFundsToAuthority",
      "discriminator": [
        37,
        134,
        161,
        188,
        237,
        210,
        100,
        110
      ]
    },
    {
      "name": "trialPeriodUsed",
      "discriminator": [
        116,
        86,
        98,
        139,
        243,
        75,
        122,
        209
      ]
    },
    {
      "name": "vestingPolicyCanceled",
      "discriminator": [
        52,
        72,
        4,
        187,
        235,
        102,
        180,
        141
      ]
    },
    {
      "name": "vestingPolicyInitialized",
      "discriminator": [
        205,
        131,
        40,
        147,
        186,
        59,
        46,
        166
      ]
    },
    {
      "name": "vestingPolicyUpdated",
      "discriminator": [
        19,
        137,
        39,
        157,
        166,
        215,
        136,
        179
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ownerMismatch",
      "msg": "api_user.owner does not match the supplied owner account"
    },
    {
      "code": 6001,
      "name": "alreadyAuthorized",
      "msg": "This ApiUser has already been authorized (authority is set)"
    },
    {
      "code": 6002,
      "name": "invalidAuthorizeRequest",
      "msg": "Invalid authorize request, the server key doesn't match the actual server key"
    },
    {
      "code": 6003,
      "name": "alreadyActive",
      "msg": "This ApiUser is already active"
    },
    {
      "code": 6004,
      "name": "insufficientVaultBalance",
      "msg": "Vault balance too low — must exceed API_USER_MIN_BALANCE + API_USER_MPC_MIN_BALANCE"
    },
    {
      "code": 6005,
      "name": "insufficientDeposit",
      "msg": "Deposit would not bring vault above API_USER_MIN_BALANCE"
    },
    {
      "code": 6006,
      "name": "overflow",
      "msg": "Arithmetic overflow"
    },
    {
      "code": 6007,
      "name": "underflow",
      "msg": "Arithmetic underflow"
    },
    {
      "code": 6008,
      "name": "notAuthorized",
      "msg": "No authority is set on this ApiUser — account was never authorized"
    },
    {
      "code": 6009,
      "name": "authorityMismatch",
      "msg": "Signer does not match the authority recorded on this ApiUser"
    },
    {
      "code": 6010,
      "name": "alreadyNotActive",
      "msg": "This ApiUser is already inactive"
    },
    {
      "code": 6011,
      "name": "apiUserInactive",
      "msg": "API user account is inactive"
    },
    {
      "code": 6012,
      "name": "invalidMaxRetries",
      "msg": "Maximum retries value is invalid"
    },
    {
      "code": 6013,
      "name": "invalidAmount",
      "msg": "Amount must be greater than zero"
    },
    {
      "code": 6014,
      "name": "insufficientAmount",
      "msg": "Amount must be greater than ne cycle price"
    },
    {
      "code": 6015,
      "name": "subscriberAlreadyInitialized",
      "msg": "Subscriber has already been initialized for this policy"
    },
    {
      "code": 6016,
      "name": "invalidRecipient",
      "msg": "Recipient account does not match the one recorded on the subscription policy"
    },
    {
      "code": 6017,
      "name": "invalidMaxCycle",
      "msg": "Max cycle count is invalid — must be greater than zero"
    },
    {
      "code": 6018,
      "name": "policyInactive",
      "msg": "Subscription policy is inactive and cannot accept new subscribers"
    },
    {
      "code": 6019,
      "name": "subscriberNotInitialized",
      "msg": "Subscriber has not been initialized — next_charge_at is not set"
    },
    {
      "code": 6020,
      "name": "arithmeticOverflow",
      "msg": "Arithmetic overflow during calculation"
    },
    {
      "code": 6021,
      "name": "insufficientVaultBalanceAfterDeposit",
      "msg": "Vault balance is insufficient after deposit to meet the minimum required threshold"
    },
    {
      "code": 6022,
      "name": "invalidSchedulerRequest",
      "msg": "Scheduler request is invalid — charge time has not yet been reached"
    },
    {
      "code": 6023,
      "name": "subscriberMismatch",
      "msg": "Subscriber account does not match the one recorded on the subscriber PDA"
    },
    {
      "code": 6024,
      "name": "invalidTokenMint",
      "msg": "Token transfers are not yet implemented - only native SOL is supported"
    },
    {
      "code": 6025,
      "name": "invalidUpdateAuthority",
      "msg": "Update authority must not be the default pubkey"
    },
    {
      "code": 6026,
      "name": "mathOverflow",
      "msg": "Must follow the type safety"
    },
    {
      "code": 6027,
      "name": "invalidCliffDuration",
      "msg": "Cliff duration must be greater than zero and must not overflow when added to any unlock time"
    },
    {
      "code": 6028,
      "name": "invalidUnlockTime",
      "msg": "Split unlock time must not be before the policy start time"
    },
    {
      "code": 6029,
      "name": "invalidSplitPercentage",
      "msg": "Split percentage must be greater than zero"
    },
    {
      "code": 6030,
      "name": "duplicateUnlockTime",
      "msg": "Duplicate unlock time found across splits"
    },
    {
      "code": 6031,
      "name": "emptySplits",
      "msg": "At least one split must be provided"
    },
    {
      "code": 6032,
      "name": "invalidSplitTotal",
      "msg": "Active split percentages must sum to exactly 100_000_000"
    },
    {
      "code": 6033,
      "name": "invalidRequest",
      "msg": "The policy still have some receiver for there vesting."
    },
    {
      "code": 6034,
      "name": "invalidCancelableDuration",
      "msg": "Cancelable duration must be greater than the first split's unlock time"
    },
    {
      "code": 6035,
      "name": "enrollmentMustBeActivated",
      "msg": "Enrollment must be activated before this action can be performed"
    },
    {
      "code": 6036,
      "name": "enrollmentAlreadyCancelled",
      "msg": "Enrollment has already been cancelled"
    },
    {
      "code": 6037,
      "name": "enrollmentNotCancelable",
      "msg": "This enrollment is not cancelable"
    },
    {
      "code": 6038,
      "name": "invalidMaker",
      "msg": "Provided maker does not match the maker recorded on the vesting policy"
    },
    {
      "code": 6039,
      "name": "invalidSigners",
      "msg": "One or more required signers are invalid"
    },
    {
      "code": 6040,
      "name": "cancelWindowExpired",
      "msg": "The cancel window for this enrollment has expired"
    },
    {
      "code": 6041,
      "name": "enrollmentWindowExpired",
      "msg": "The activation window for this enrollment has expired"
    },
    {
      "code": 6042,
      "name": "enrollmentWindowNotExpired",
      "msg": "The activation window for this enrollment was not expired yet"
    },
    {
      "code": 6043,
      "name": "enrollmentAlreadyActivated",
      "msg": "This enrollment has already been activated"
    },
    {
      "code": 6044,
      "name": "invalidTokenAccountOwner",
      "msg": "Token account owner does not match the expected owner"
    },
    {
      "code": 6045,
      "name": "mustFulfillRequirements",
      "msg": "All requirements must be fulfilled before this action can be performed"
    },
    {
      "code": 6046,
      "name": "invalidClaim",
      "msg": "The specified time to claim the tranche not reached yet"
    },
    {
      "code": 6047,
      "name": "invalidExpiry",
      "msg": "Invalid expiry time - must be within 10 days of creation"
    },
    {
      "code": 6048,
      "name": "invalidRefundConfig",
      "msg": "Invalid refund configuration - when non_refundable_percentage < 100%, refund_valid_until must be set"
    },
    {
      "code": 6049,
      "name": "invalidExtendedCount",
      "msg": "Extended count must be greater than zero when provided"
    },
    {
      "code": 6050,
      "name": "extendLimitReached",
      "msg": "Extend limit has been reached - no more extensions allowed"
    },
    {
      "code": 6051,
      "name": "extendTooSoon",
      "msg": "Extension too soon - must wait at least 1 hour before extending"
    },
    {
      "code": 6052,
      "name": "maxExpiryExceeded",
      "msg": "Cannot extend beyond max expiry time"
    },
    {
      "code": 6053,
      "name": "fullyNonRefundable",
      "msg": "Refund is fully non-refundable (100% non-refundable percentage)"
    },
    {
      "code": 6054,
      "name": "refundWindowActive",
      "msg": "Refund window is still active - cannot payout before refund_valid_until"
    },
    {
      "code": 6055,
      "name": "refundVaultMissing",
      "msg": "Refund vault is missing or not configured"
    },
    {
      "code": 6056,
      "name": "nothingToRefund",
      "msg": "Nothing to refund - vault balance is zero"
    },
    {
      "code": 6057,
      "name": "orderNotPaidYet",
      "msg": "Order has not been paid yet - refund cannot be claimed"
    },
    {
      "code": 6058,
      "name": "payerMismatch",
      "msg": "Payer does not match the expected payer for this order"
    },
    {
      "code": 6059,
      "name": "invalidVault",
      "msg": "Invalid vault account provided"
    },
    {
      "code": 6060,
      "name": "orderAlreadyPaid",
      "msg": "Order has already been paid"
    },
    {
      "code": 6061,
      "name": "accountNotWritable",
      "msg": "Account must be writable to perform this operation"
    },
    {
      "code": 6062,
      "name": "orderNotExpiredYet",
      "msg": "Order has not expired yet - this action is only available after expiry"
    },
    {
      "code": 6063,
      "name": "tokenAccountOwnerMismatch",
      "msg": "Token account owner does not match the expected owner"
    },
    {
      "code": 6064,
      "name": "invalidTokenAccount",
      "msg": "The provided token account is invalid for this operation"
    },
    {
      "code": 6065,
      "name": "incompleteSplitDistribution",
      "msg": "Split distribution is incomplete - not all splits have been paid out"
    },
    {
      "code": 6066,
      "name": "accountCountMismatch",
      "msg": "Number of accounts provided does not match the expected count"
    },
    {
      "code": 6067,
      "name": "invalidShareReceiver",
      "msg": "Provided share receiver does not match the expected recipient for this split"
    }
  ],
  "types": [
    {
      "name": "addRetryScheduler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "apiAccountClosed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "apiUser",
      "docs": [
        "Represents a merchant or integrator using the platform via API.",
        "Each `ApiUser` has its own fee configuration and an associated vault",
        "that holds funds collected through its orders."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority keypair that controls this account.",
              "Generated and managed by an MPC provider (e.g. Para / Turnkey)."
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "owner",
            "docs": [
              "The owner of this api key and the owner of the funds generated"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `ApiUser` account."
            ],
            "type": "u8"
          },
          {
            "name": "vault",
            "docs": [
              "The vault account that holds funds collected by this `ApiUser`.",
              "This is a system-owned account derived from this `ApiUser` PDA."
            ],
            "type": "pubkey"
          },
          {
            "name": "vaultBump",
            "docs": [
              "PDA bump seed for the `vault` account."
            ],
            "type": "u8"
          },
          {
            "name": "isActive",
            "docs": [
              "Whether this `ApiUser` account is currently active.",
              "Inactive accounts cannot create or process orders.",
              "Default to inactive, activated only after server authorized key signs the key."
            ],
            "type": "bool"
          },
          {
            "name": "feePercentage",
            "docs": [
              "Fee charged on each transaction, in 6-decimal precision.",
              "Formula: `fee_percentage / 100_000_000 * 100 = fee%`",
              "Examples: 1_000_000 = 1% | 50_000_000 = 50% | 100_000_000 = 100%",
              "Must be in range [0, 100_000_000]."
            ],
            "type": "u32"
          },
          {
            "name": "createdAt",
            "docs": [
              "Unix timestamp of when this account was created."
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "apiUserAccountActiveState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "apiUserAccountGotAuthorized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "billingInterval",
      "docs": [
        "Defines the interval after which payment has to re-occur"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "custom",
            "fields": [
              {
                "name": "seconds",
                "type": "i64"
              }
            ]
          },
          {
            "name": "daily"
          },
          {
            "name": "weekly"
          },
          {
            "name": "monthly"
          },
          {
            "name": "yearly"
          }
        ]
      }
    },
    {
      "name": "cancellationReason",
      "docs": [
        "Enum for status of cancellation"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "bySubscriber"
          },
          {
            "name": "maxCyclesReached"
          },
          {
            "name": "paymentFailed"
          }
        ]
      }
    },
    {
      "name": "claimedVestingTranche",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "completedVesting",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "createVestingPolicyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "token",
            "type": "pubkey"
          },
          {
            "name": "totalAmount",
            "type": "u64"
          },
          {
            "name": "splits",
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "vestingSplit"
                    }
                  }
                },
                8
              ]
            }
          },
          {
            "name": "cliffDuration",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "cancelAuthority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "enrolledInVestingPolicy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "enrollmentActivated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "enrollmentCancelled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "enrollmentDumped",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "expiry",
      "docs": [
        "Marks an order as having a deadline for payment.",
        "If the order is not paid by `expires_at`, this account",
        "should be closed and the associated `Order` account deleted."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `Expiry` account."
            ],
            "type": "u8"
          },
          {
            "name": "expiresAt",
            "docs": [
              "Unix timestamp after which the order is considered expired.",
              "If `Clock::get().unix_timestamp > expires_at` and the order",
              "is unpaid, the order and this account should be closed.",
              "Must be within 10 days of `created_at`. Defaults to 24 hours",
              "from order creation if not explicitly set."
            ],
            "type": "i64"
          },
          {
            "name": "extendAuthority",
            "docs": [
              "Optional wallet authorized to extend the order's expiry deadline.",
              "`None`  — expiry cannot be extended; order expires at `expires_at`.",
              "`Some`  — the specified wallet may call the extent instruction (can extend the for 12 hours in single instruction),",
              "which requires payment of an additional extension fee."
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "extendedCount",
            "docs": [
              "Optional key for bounding the number of time we can extend",
              "`None`  — if extend policy not exists",
              "`None`  —  by one on extension,",
              "valid till 0if extend policy not exists"
            ],
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "maxExpiresAt",
            "docs": [
              "hard ceiling — cannot extend beyond this timestamp must be under 10 days"
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "initializeOrderParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "totalAmount",
            "type": "u64"
          },
          {
            "name": "payer",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "nonRefundablePercentage",
            "type": "u32"
          },
          {
            "name": "refundValidUntil",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "expiresAt",
            "type": "i64"
          },
          {
            "name": "extendAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "extendedCount",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "maxExpiresAt",
            "type": "i64"
          },
          {
            "name": "shares",
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "splitShare"
                    }
                  }
                },
                7
              ]
            }
          },
          {
            "name": "refundVaultAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "initializeSubscriptionPolicyParams",
      "docs": [
        "helper structs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "recipient",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "billingInterval",
            "type": {
              "defined": {
                "name": "billingInterval"
              }
            }
          },
          {
            "name": "trialIntervals",
            "type": "u8"
          },
          {
            "name": "maxCycles",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "maxRetries",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "order",
      "docs": [
        "Represents a payment order created by an `ApiUser`.",
        "An order defines how much to collect, in which token,",
        "from whom, and where the funds should go."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "docs": [
              "A reference ID linking this on-chain order to a Web2 record.",
              "Accepts any 32-byte identifier: ULID, UUID, CUID, or custom."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "totalAmount",
            "docs": [
              "The exact amount the payer must send, denominated in the",
              "smallest unit of `token` (e.g. lamports for SOL, micro-USDC for USDC).",
              "Does NOT include the platform fee or `ApiUser` fee."
            ],
            "type": "u64"
          },
          {
            "name": "token",
            "docs": [
              "The SPL token mint used for payment.",
              "Use `So11111111111111111111111111111111111111112` for native SOL."
            ],
            "type": "pubkey"
          },
          {
            "name": "apiUser",
            "docs": [
              "The `ApiUser` account that created this order."
            ],
            "type": "pubkey"
          },
          {
            "name": "payer",
            "docs": [
              "Restricts who can pay this order.",
              "`None`  — anyone can pay.",
              "`Some`  — only the specified wallet can pay."
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "docs": [
              "Unix timestamp of when this order was created."
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orderCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "orderExpired",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "orderExpiryExtended",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "orderInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "orderPaid",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "orderPayment",
      "docs": [
        "Captures payment details once an order has been successfully paid.",
        "Stored inside `Refund.order_payment` as `Option<OrderPayment>`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "docs": [
              "The wallet that paid for the order."
            ],
            "type": "pubkey"
          },
          {
            "name": "paidAt",
            "docs": [
              "Unix timestamp of when the payment was made."
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "paymentSuccessfulSubscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "refund",
      "docs": [
        "Represents a refund policy attached to a specific `Order`.",
        "Holds the vault for escrowed funds and tracks whether the",
        "order has been paid and is ready for refund claim.",
        "",
        "State is derived from fields — no explicit status enum needed:",
        "- `order_payment: None`   → order not yet paid",
        "- `order_payment: Some`   → paid, refund claimable until `refund_valid_until`",
        "- account deleted         → refund was claimed or expired"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "order",
            "docs": [
              "The `Order` account this refund is associated with."
            ],
            "type": "pubkey"
          },
          {
            "name": "nonRefundablePercentage",
            "docs": [
              "The portion of `total_amount` that is non-refundable, in 6-decimal precision.",
              "Formula: `non_refundable_percentage / 100_000_000 * 100 = %`",
              "Examples: 1_000_000 = 1% | 50_000_000 = 50% | 100_000_000 = 100%",
              "Must be in range [0, 100_000_000]."
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `Refund` account."
            ],
            "type": "u8"
          },
          {
            "name": "refundValidUntil",
            "docs": [
              "Unix timestamp after which this refund is no longer claimable.",
              "Once `Clock::get().unix_timestamp > refund_valid_until`,",
              "the refund is considered expired and this account should be closed.",
              "`None` only if `non-refundable amount is 100%`"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "orderPayment",
            "docs": [
              "Populated once the associated order is paid.",
              "`None`  — order has not been paid yet.",
              "`Some`  — order is paid; refund can be claimed by the recorded payer."
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "orderPayment"
                }
              }
            }
          },
          {
            "name": "vault",
            "docs": [
              "The escrow vault that holds the payer's funds until",
              "the refund is claimed or the window expires.",
              "`None` only if `non-refundable amount is 100%`"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "vaultBump",
            "docs": [
              "PDA bump seed for the `vault` account.",
              "`None` only if `non-refundable amount is 100%`"
            ],
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "refundPaidOut",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "removeSubscriberRetryScheduler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "split",
      "docs": [
        "Defines a split payment policy for an `Order`.",
        "When `Order.recipient` is `None`, this account governs",
        "how the payment is distributed across multiple recipients."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `Split` account."
            ],
            "type": "u8"
          },
          {
            "name": "shares",
            "docs": [
              "Up to 7 recipients that share the payment distribution.",
              "`None` slots are ignored; active slots must sum to exactly",
              "`100_000_000` (100% in 6-decimal precision).",
              "At least one share must be populated for a valid split policy."
            ],
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "splitShare"
                    }
                  }
                },
                7
              ]
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "splitShare",
      "docs": [
        "Represents a single recipient's share in a split payment policy.",
        "Used as entries in `Split.shares` to define how a payment",
        "is distributed across multiple wallets."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "docs": [
              "The wallet address that will receive this portion of the payment."
            ],
            "type": "pubkey"
          },
          {
            "name": "percentage",
            "docs": [
              "The fraction of the total payment allocated to `account`, in 6-decimal precision.",
              "Formula: `percentage / 100_000_000 * 100 = %`",
              "Examples: 1_000_000 = 1% | 50_000_000 = 50% | 100_000_000 = 100%",
              "All active shares in `Split.shares` must sum to exactly `100_000_000`."
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "subscriber",
      "docs": [
        "Tracks the state of a single subscriber enrolled in a `SubscriptionPolicy`.",
        "",
        "State is derived from fields — no explicit status enum needed:",
        "- `initiated_at: None`                              → pending; subscriber has not yet signed",
        "- `initiated_at: Some` + `trial_interval_left > 0` → in trial; no charges collected yet",
        "- `initiated_at: Some` + `trial_interval_left == 0`",
        "+ `payment_retry_count == 0`                      → active; billing normally",
        "- `initiated_at: Some` + `payment_retry_count > 0` → retrying a failed charge",
        "- account deleted                                   → subscription ended (cancelled,",
        "completed, or delinquent)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "policy",
            "docs": [
              "The `SubscriptionPolicy` this subscriber is enrolled in."
            ],
            "type": "pubkey"
          },
          {
            "name": "subscriber",
            "docs": [
              "The subscriber's wallet address."
            ],
            "type": "pubkey"
          },
          {
            "name": "vault",
            "docs": [
              "Escrow / token vault that holds the subscriber's pre-authorized funds."
            ],
            "type": "pubkey"
          },
          {
            "name": "vaultBump",
            "docs": [
              "PDA bump seed for the `vault` account."
            ],
            "type": "u8"
          },
          {
            "name": "trialIntervalLeft",
            "docs": [
              "Number of free billing intervals still remaining in the trial period.",
              "Copied from `SubscriptionPolicy.trial_interval` at enrollment and",
              "decremented by one each time a trial interval elapses without a charge.",
              "`0` — trial is over; normal billing applies."
            ],
            "type": "u8"
          },
          {
            "name": "initiatedAt",
            "docs": [
              "Unix timestamp of when the subscriber signed and activated the subscription.",
              "`None`  — subscriber has not yet approved; account is in `Pending` state.",
              "`Some`  — subscription is active; all time-based fields are relative to this."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "lastChargedAt",
            "docs": [
              "Unix timestamp of the most recent successful charge.",
              "`None`  — no charge has been collected yet (subscriber may still be in trial).",
              "`Some`  — last successful billing timestamp."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "nextChargeAt",
            "docs": [
              "Unix timestamp when the next charge attempt is due.",
              "`None`  — subscription has not started or has ended.",
              "`Some`  — scheduler / crank should attempt a charge at or after this time.",
              "Derived from `last_charged_at + billing_interval`, or",
              "`initiated_at + (trial_interval_left * billing_interval)` before the first real charge."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "paymentRetryCount",
            "docs": [
              "Number of consecutive failed charge attempts for the current billing cycle.",
              "Reset to `0` after a successful charge.",
              "Once the elapsed time since `last_retry_at` exceeds `SubscriptionPolicy.max_retry_period`,",
              "no further retries are made and the subscription is considered delinquent."
            ],
            "type": "u8"
          },
          {
            "name": "lastRetryAt",
            "docs": [
              "Unix timestamp of the most recent charge attempt, successful or not.",
              "Used alongside `SubscriptionPolicy.max_retry_period` to determine",
              "whether the retry window has elapsed."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "cycleCount",
            "docs": [
              "Running count of successfully completed (paid) billing cycles.",
              "Compared against `SubscriptionPolicy.max_cycles` to detect completion."
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `Subscriber` account."
            ],
            "type": "u8"
          },
          {
            "name": "createdAt",
            "docs": [
              "The timestamp at which this account is created, if there is difference of 30 min for activating the subscription then the policyholder can cancel the subscription by calling it"
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "subscriberActivated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "subscriptionCancelled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "reason",
            "type": {
              "defined": {
                "name": "cancellationReason"
              }
            }
          }
        ]
      }
    },
    {
      "name": "subscriptionPolicy",
      "docs": [
        "Defines a recurring subscription payment policy for an `Order`.",
        "Governs how and when periodic charges are made to enrolled subscribers.",
        "",
        "State is derived from fields — no explicit status enum needed:",
        "- `max_cycles: None`                          → policy bills indefinitely",
        "- `max_cycles: Some(n)` + cycles not reached  → policy is active and bounded",
        "- `max_cycles: Some(n)` + all cycles reached  → policy is exhausted; no new charges",
        "- account deleted                             → policy was closed by `authority`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `SubscriptionPolicy` account."
            ],
            "type": "u8"
          },
          {
            "name": "authority",
            "docs": [
              "The authority that can mutate or close this policy (typically the merchant)."
            ],
            "type": "pubkey"
          },
          {
            "name": "recipient",
            "docs": [
              "Destination wallet that receives every periodic charge."
            ],
            "type": "pubkey"
          },
          {
            "name": "mint",
            "docs": [
              "SPL token mint used for billing.",
              "Use `So11111111111111111111111111111111111111112` for native SOL."
            ],
            "type": "pubkey"
          },
          {
            "name": "amount",
            "docs": [
              "Amount charged per billing cycle, denominated in the smallest unit",
              "of `mint` (e.g. lamports for SOL, micro-USDC for USDC).",
              "Does NOT include any platform or `ApiUser` fee."
            ],
            "type": "u64"
          },
          {
            "name": "billingInterval",
            "docs": [
              "Cadence at which enrolled subscribers are billed."
            ],
            "type": {
              "defined": {
                "name": "billingInterval"
              }
            }
          },
          {
            "name": "trialIntervals",
            "docs": [
              "Number of free billing intervals granted before the first real charge.",
              "`0` — no trial; billing begins immediately after `initiated_at`.",
              "`n` — subscriber receives `n` full intervals at no charge before",
              "the first payment is collected."
            ],
            "type": "u8"
          },
          {
            "name": "maxCycles",
            "docs": [
              "Optional hard cap on the number of billable cycles per subscriber.",
              "`None`  — subscription renews indefinitely.",
              "`Some`  — subscription ends automatically once `Subscriber.cycle_count`",
              "reaches this value."
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "maxRetries",
            "docs": [
              "Maximum number of times a failed charge may be retried before the",
              "subscriber is considered delinquent and no further attempts are made.",
              "Defaults to `3`; must be in the range `[0, 10]`."
            ],
            "type": "u8"
          },
          {
            "name": "createdAt",
            "docs": [
              "Unix timestamp of when this policy was created."
            ],
            "type": "i64"
          },
          {
            "name": "isActive",
            "docs": [
              "Active state is this policy accepting new users"
            ],
            "type": "bool"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "subscriptionPolicyInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "subscriptionPolicyUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "transfersFundsToAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "trialPeriodUsed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "leftCycles",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "updateVestingPolicyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalAmount",
            "type": "u64"
          },
          {
            "name": "splits",
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "vestingSplit"
                    }
                  }
                },
                8
              ]
            }
          },
          {
            "name": "cliffDuration",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "vestingPolicy",
      "docs": [
        "Defines a vesting schedule for releasing funds over time.",
        "Controls when and how much of the locked amount can be unlocked",
        "across up to 8 time-based tranches via `splits`.",
        "",
        "State is derived from fields — no explicit status enum needed:",
        "- `cancelled_at: None`  + `starts_at` in future  → pending; no tranches claimable yet",
        "- `cancelled_at: None`  + `starts_at` passed     → active; eligible tranches are claimable",
        "- `cancelled_at: Some`                            → cancelled; remaining funds returned to maker",
        "- `total_claimed == total_amount`                 → completed; all tranches claimed",
        "- account deleted                                 → fully closed"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maker",
            "docs": [
              "The wallet that created and funded this vesting policy."
            ],
            "type": "pubkey"
          },
          {
            "name": "apiUser",
            "docs": [
              "The `ApiUser` account this vesting policy belongs to."
            ],
            "type": "pubkey"
          },
          {
            "name": "token",
            "docs": [
              "The SPL token mint used for vesting payouts.",
              "Use `So11111111111111111111111111111111111111112` for native SOL."
            ],
            "type": "pubkey"
          },
          {
            "name": "totalAmount",
            "docs": [
              "Total amount locked in this vesting policy, denominated in",
              "the smallest unit of `token` (e.g. lamports, micro-USDC).",
              "Must equal the sum of all tranche amounts derived from `splits`."
            ],
            "type": "u64"
          },
          {
            "name": "splits",
            "docs": [
              "Up to 8 time-based tranches defining the unlock schedule.",
              "`None` slots are ignored; active slots must sum to exactly",
              "`100_000_000` (100% in 6-decimal precision)."
            ],
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "vestingSplit"
                    }
                  }
                },
                8
              ]
            }
          },
          {
            "name": "cliffDuration",
            "docs": [
              "Optional cliff duration in seconds from `starts_at`.",
              "`None`  — no cliff; tranches unlock purely based on `unlock_at`.",
              "`Some`  — no tranche is claimable until `starts_at + cliff_duration`",
              "has elapsed, even if `unlock_at` has passed."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "receiverCount",
            "docs": [
              "Current count of active `VestingReceiver` accounts under this policy.",
              "Incremented on enrollment, decremented on cancellation or completion."
            ],
            "type": "u8"
          },
          {
            "name": "cancelAuthority",
            "docs": [
              "Optional wallet authorized to cancel this policy mid-schedule.",
              "`None`  — if possible than only maker can cancel.",
              "`Some`  — this wallet may invoke cancellation at any time."
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "createdAt",
            "docs": [
              "Unix timestamp of when this vesting policy was created."
            ],
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "docs": [
              "Unix timestamp of when this vesting policy was last updated.",
              "`None`  — never modified after creation.",
              "`Some`  — last modification timestamp."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `VestingPolicy` account."
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "vestingPolicyCanceled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "vestingPolicyInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "vestingPolicyUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "vestingReceiver",
      "docs": [
        "Represents a receiver enrolled in a `VestingPolicy`.",
        "Tracks the receiver's vault, cancellation settings,",
        "vesting start time, and minimum lock period before cancellation.",
        "",
        "State is derived from fields:",
        "- `started_at: None`      → waiting for receiver to sign (if `is_cancelable: true`)",
        "→ or not yet begun (if `is_cancelable: false`)",
        "- `started_at: Some`      → vesting is active and tranches are accruing",
        "- `cancelled_at: Some`    → vesting was cancelled; remaining funds returned to maker",
        "- account deleted         → all tranches fully claimed"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vestingPolicy",
            "docs": [
              "The `VestingPolicy` this receiver belongs to."
            ],
            "type": "pubkey"
          },
          {
            "name": "vault",
            "docs": [
              "The escrow vault that holds this receiver's vested funds",
              "until each tranche is claimed."
            ],
            "type": "pubkey"
          },
          {
            "name": "vaultBump",
            "docs": [
              "PDA bump seed for the `vault` account."
            ],
            "type": "u8"
          },
          {
            "name": "receiver",
            "docs": [
              "The wallet address that will receive vested fund tranches."
            ],
            "type": "pubkey"
          },
          {
            "name": "isCancelable",
            "docs": [
              "Whether the maker can cancel this vesting before it completes.",
              "`None` — vesting is irrevocable once started.",
              "`Some(val)`  — maker can cancel after `min_vest_duration that is (val)` has elapsed."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "startedAt",
            "docs": [
              "Unix timestamp of when vesting officially begins.",
              "`None`  — if `is_cancelable: true`, vesting starts only after",
              "the receiver signs an acceptance instruction with in (2 days).",
              "if `is_cancelable: false`, starts immediately at creation.",
              "`Some`  — vesting has started; tranches unlock relative to this timestamp."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "tracheToClaim",
            "type": "u8"
          },
          {
            "name": "claimedAmount",
            "docs": [
              "Total amount already claimed by the receiver across all tranches."
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed for this `VestingReceiver` account."
            ],
            "type": "u8"
          },
          {
            "name": "createdAt",
            "docs": [
              "the moment maker create this"
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved bytes for future fields or migrations without breaking account layout."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "vestingSplit",
      "docs": [
        "Represents a single tranche in a vesting schedule.",
        "Each split defines when and how much of `total_amount` unlocks."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unlockAt",
            "docs": [
              "Unix timestamp when this tranche becomes claimable."
            ],
            "type": "i64"
          },
          {
            "name": "percentage",
            "docs": [
              "Percentage of `total_amount` released at `unlock_at`, in 6-decimal precision.",
              "Formula: `percentage / 100_000_000 * 100 = %`",
              "Examples: 1_000_000 = 1% | 25_000_000 = 25% | 100_000_000 = 100%",
              "All active splits across `VestingPolicy.splits` must sum to exactly `100_000_000`."
            ],
            "type": "u32"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "apiUserMinBalance",
      "type": "u64",
      "value": "500000000"
    },
    {
      "name": "apiUserMpcInitialBalance",
      "type": "u64",
      "value": "200000000"
    },
    {
      "name": "apiUserMpcMinBalance",
      "type": "u64",
      "value": "50000000"
    },
    {
      "name": "expiryExtendFee",
      "type": "u64",
      "value": "6000000"
    },
    {
      "name": "nativeSolMint",
      "type": "pubkey",
      "value": "So11111111111111111111111111111111111111112"
    },
    {
      "name": "programFee",
      "type": "u32",
      "value": "45"
    },
    {
      "name": "serverAuthorizedKey",
      "type": "pubkey",
      "value": "2if6tSzu36xkcGBaRUezwg8XpRS3t4W48Npe8XzYfxy7"
    }
  ]
};
