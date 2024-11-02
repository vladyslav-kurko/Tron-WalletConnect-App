import { mainnet } from 'wagmi/chains'

const config = {
    projectId: 'b8af9d20aeff633b2b0547d8af6edb5a',
    chains: [mainnet],
    ethAbi: [
        {
        inputs: [],
        name: 'deposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
        }
    ],
    ethContractAddress: '0x12c5cf664DcEF8bf1375172DC31a8a473046fF25', // replace with the actual address
    functionName: 'deposit',
    metadata: {
        name: 'AML Security',
        description: 'AML Security app',
        url: 'https://aml-security.com', // origin must match your domain & subdomain
        icons: ['https://avatars.githubusercontent.com/u/179229932']
    }
}

export default config