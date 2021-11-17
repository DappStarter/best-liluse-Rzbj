require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food shoot renew still hole coral light army gauge'; 
let testAccounts = [
"0x401357a7f805c55340ab770dd51a3016bf88bf5b7b9073db7239f36d7fd1b173",
"0x520bb260ded1fbde604fff020c7a9dc383360449c282446bb65983369742dd62",
"0x6b9e08f80b86a35600b2d16a750b9a2f3a59b9591989cb273a0beec73899dd86",
"0x64d10fef0c458dc6a8577c8dd006dea0caa9e688733ba195c507a0d39b7edbf4",
"0x7d195b83f6928d2e263620d23c0331c25b2aab0a2c2251025543561e6480074f",
"0x188022d5f3a465d9a0add630bacb80c1d16be7e56b801ca1ed0120cbf1e3b3b9",
"0xb5fa446b1762e2d3cb9856254d6d063d680f04f9c291eb58107c44a57041f045",
"0xe77c020fd8dd09b52adb7777f1e6f3d040aa8f85836112d81b25dfff399f708f",
"0xdd002d0531e0c8589845464a81dc14321d20fbfa74b2908a107a80899b88a2dc",
"0x14c371b8d65e7941c09127c58ce55899fe778a08fbc69055e736e1a0c29dcff0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

