import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AsFarCoinModule = buildModule("AsFarCoinModule2", (m) => {
  // The constructor for RohitCoin needs an 'initialOwner' address.
  // m.getAccount(0) gets the address of the wallet whose private key
  // is configured in hardhat.config.js (that's you!).
  const initialOwner = m.getAccount(0);

  // We deploy the contract and pass 'initialOwner' as the constructor argument.this is address of the wallet whose private key is configured in hardhat.config.js (that's you!).
  const AsFarCoin = m.contract("AsFar", [initialOwner]);

  return { AsFarCoin };
});

export default AsFarCoinModule;
