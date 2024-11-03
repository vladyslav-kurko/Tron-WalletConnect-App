import { mainnet } from 'wagmi/chains'

const config = {
    projectId: 'b8af9d20aeff633b2b0547d8af6edb5a', // Replace with your project id
    chains: [mainnet], // Possible values are: testnet, arbitrum etc.
    ethAbi: [ // replace with Eth contract abi
        {
            inputs: [],
            name: 'deposit', // keep same as functionName below
            outputs: [],
            stateMutability: 'payable',
            type: 'function'
        }
    ],
    ethContractAddress: '0x12c5cf664DcEF8bf1375172DC31a8a473046fF25', // replace with the actual address
    functionName: 'deposit', // replace with the actual functionName
    metadata: { // Replace with your data
        name: 'AML Security',
        description: 'AML Security app',
        url: 'https://aml-security.com', // origin must match your domain & subdomain
        icons: ['https://avatars.githubusercontent.com/u/179229932']
    },
    tronContractAddress: 'TAfLyqu3xXMhPcHr5pQdpyadVrZ6DrBRYu', // Replace with your contract address
    tronFunctionName: 'YOUR_FUNCTION_NAME',
    tronFunctionParams: [] // add any params
}

export default config