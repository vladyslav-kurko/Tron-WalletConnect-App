export const faqDataEn = [
    {
        title: 'What does the AMLBot check show?',
        description: `<p>The basic AMLBot check result includes a risk assessment percentage, risk sources, and blacklist status.</p>
                    <p>Additionally, the result may contain various additional information about the address, such as cluster affiliation, actual balance, and the total amount of funds transferred.</p>
                    <p>If the required information is missing, the check result may be incomplete compared to the described data.</p>
                    <p>Please note that for blockchains checked in limited mode, clustering and risk percentage are unavailable. Risk assessment can only be provided for a counterparty if it belongs to a clustered entity.</p>`,
    },
    {
        title: 'What does the risk percentage indicate?',
        description: `<p>The overall risk score (in percentage) represents the likelihood that the address is associated with illegal activities.</p>
                    <p>AMLBot identifies connections of the verified address with other blockchain addresses and entities of different categories, each with a different conditional risk score, and calculates an overall risk score based on these connections.</p>
                    <p>The severity of detected connections is taken into account when calculating the overall risk score. For example, in cases of connections to categories like "Mining" (0% risk) and "Darknet" (100% risk), the influence of the Darknet, as a more high-risk category, will be higher, while mining will have less weight in risk assessment.</p>`,
    },
    {
        title: 'What are risk sources?',
        description: `<p>AMLBot checks the specified wallet address for links with known blockchain services—entities. AMLBot conditionally groups these services into categories with varying levels of illegal activity risk.</p>
                    <p>The AML check shows the connections of the verified address with these entity categories as risk sources and the percentage of funds transferred to/from these services.</p>
                    <p>Based on all risk sources, an overall risk score is calculated, helping users make further decisions about their assets.</p>`,
    },
    {
        title: 'What is the difference between address and transaction checks?',
        description: `<p>An address check analyzes all connections with other addresses and blockchain entities, considering the movement of incoming and outgoing funds.</p>
                    <p>The transaction check process differs from the address check, and the result depends on your role in the transaction. The overall risk score always depends on the counterparty.</p>
                    <p>To check a transaction, you need to specify the TxID, the recipient's address, and select your role in the transaction:<br />
                    - Recipient (you received a deposit in your wallet) - the addresses from which the funds were received are checked. Risk sources describe the services through which senders of the TX accumulated the transferred funds, with a percentage breakdown.<br />
                    - Sender (you sent funds from your wallet) - the address where the funds were received is checked. Risk sources describe all the recipient address's connections with a percentage breakdown.</p>
                    <p>Thus, a transaction check evaluates the recipient's risks when receiving funds and the sender's risks when sending funds.</p>`,
    },
    {
        title: 'How do I interpret risk assessments?',
        description: `<p>Each client determines for themselves what risk percentage is acceptable. Risk assessment can be conditionally divided as follows:<br />
                    - 0-25% — clean wallet/transaction;<br />
                    - 25-75% — medium risk level;<br />
                    - Over 75% — such a wallet/transaction is considered high-risk.<br />
                    Pay attention to red risk sources in the detailed analysis described on the <a href="">page</a>.</p>`,
    },
    {
        title: 'Which cryptocurrencies does AMLBot analyze?',
        description: `<p>AMLBot supports all major blockchains and tokens. We are constantly adding support for additional cryptocurrencies. 
                    You can always view the current list of supported cryptocurrencies <a href="">in your account</a> or in the <a href="">API Documentation</a>.</p>`,
    },
    {
        title: 'How does AMLBot help protect you from account suspension?',
        description: `<p>By checking counterpart wallets before a transaction, you can decline their assets if the risk level is high. Before transferring funds to other services, you can also check your wallet address and save the result (take a screenshot).</p>
                    <p>If the check shows that your assets are not linked to illegal activity and a service blocks you, you can provide the saved result to confirm your assets' legitimacy.</p>`,
    },
    {
        title: 'The risk exceeds 50%, but I am confident the address is reliable. What should I do?',
        description: `<p>Check results are based on international databases that are constantly updated. 
                    Therefore, an address with a 0% risk yesterday may have sent or received assets from a risky counterparty today. 
                    In such cases, the risk assessment will change. If you want to be sure of the result and understand the cause of the high risk, we can conduct a detailed check for you. 
                    Please contact us at <a href="mailto:example@example.com">info@amlbot.com</a></p>`,
    },
    {
        title: 'How often should checks be performed?',
        description: `<p>The answer depends on your unique risk model. It is generally recommended to perform AML checks every time you interact with an unknown wallet or smart contract.</p>`,
    },
    {
        title: 'How quickly is the balance updated?',
        description: `<p>After confirming the transaction, the balance is updated:<br/>
                    • Within 10 minutes if payment was made within 24 hours after the invoice was issued;<br/>
                    • Within 25 minutes if payment was made more than 24 hours after the invoice was issued. In general, BTC, ETH, USDT, and fiat are processed faster than other coins.</p>`,
    },
    {
        title: 'What happens if I do not use all my checks each month?',
        description: `<p>If you purchased checks without an expiration date, they remain in your account and can be used anytime.</p>
                    <p>If you purchased checks with an expiration date, they will be deducted from your account upon expiry.</p>`,
    },
    {
        title: 'What if I need additional checks?',
        description: `<p>If necessary, you can purchase additional checks. The number of checks is always displayed in your personal account.</p>`,
    },
    {
        title: 'How does AMLBot ensure data protection?',
        description: `<p>AMLBot protects data by adhering to strict standards, as confirmed by our ISO 9001 and ISO 27001 certifications.</p>
                    <p>Our ISO 9001 certification emphasizes our commitment to consistent quality and customer satisfaction. 
                    More importantly, ISO 27001 certification demonstrates our dedication to maintaining high information security standards, protecting confidential data, and complying with regulatory requirements.</p>
                    <p>Learn more about our certifications <a>here.</a></p>`,
    },
];
