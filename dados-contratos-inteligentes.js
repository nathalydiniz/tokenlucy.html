var enderecoContrato = "0x6c6D3788010E841363461965aCAD2DDb283fece1";
var abiContrato = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_endereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nomeAdquirente",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_numeroUnidades",
        type: "uint256",
      },
    ],
    name: "comprarLucy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cadastro",
        type: "uint256",
      },
    ],
    name: "devolveNomeAdquirente",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "livro1",
    outputs: [
      {
        internalType: "address",
        name: "endereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "nomeAdquirente",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numeroUnidades",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "livro2",
    outputs: [
      {
        internalType: "address",
        name: "endereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "nomeAdquirente",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numeroUnidades",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];