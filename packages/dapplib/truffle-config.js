require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name royal pizza history include praise army ghost'; 
let testAccounts = [
"0xa07cb718aac3e2bcd4cede67a5c1c882e12250f73eeefc4dfec81e7e2bf3d9b8",
"0x956210d8f9c193f0f47c3530d23453e03d314c9c29570dfbf2d837389f4227cf",
"0x9e3af88d0faa73439ae48f7e40dee42606006b0a982d2ed26717a321dcd5a836",
"0xe487949022d4b01a89d41e5ccd535a678dae1040f3ecbab41a0e24a34252feaa",
"0x2fabbf2e29ad841cd5221f83456ca823ecb0c8cbe2ce682d129569107b81e2f2",
"0x0f029b0760cf50748583f3bf942f1ff4830aeee13040b8b0eab1df1b44a6a7cb",
"0xa642a8c8e0c847f12ffe534d0326874edb2fb01f49635076dcd33a559ccd00c6",
"0x277535e63076f61c25fc05d0409623ddbe42ad1097fe64716475d98750d00c37",
"0xe3258369abf768f27f09833eb3329997ec76cda620e600ce75574367cf435448",
"0x7eacef7c5e9d5facdc826631db0c65939899de171b9444623d5bc39cda9c498e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


