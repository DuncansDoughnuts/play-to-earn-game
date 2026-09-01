const address = (name: string, fallback: string): string => {
  const value = process.env[name] ?? fallback;
  if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
    throw new Error(`${name} must be a valid EVM contract address`);
  }
  return value;
};

// Historical addresses remain defaults for local/demo compatibility.
// Production must override all four NEXT_PUBLIC_* variables with contracts
// deployed on NEXT_PUBLIC_ACTIVE_CHAIN.
export const CHARACTER_EDITION_ADDRESS = address(
  "NEXT_PUBLIC_CHARACTER_EDITION_ADDRESS",
  "0x16A131b7e5a62E8fe83f0993aAF2ECCaBF519382",
);

export const MINING_CONTRACT_ADDRESS = address(
  "NEXT_PUBLIC_MINING_CONTRACT_ADDRESS",
  "0x5231B9a9E55739641a63989faec3db4d8F56fBBb",
);

export const GOLD_GEMS_ADDRESS = address(
  "NEXT_PUBLIC_GOLD_GEMS_ADDRESS",
  "0x18B18e5D2375c592997e1eaFf6C77A6bd24F5c44",
);

export const PICKAXE_EDITION_ADDRESS = address(
  "NEXT_PUBLIC_PICKAXE_EDITION_ADDRESS",
  "0x9d33597aD43bE6295Fe7626baDBF72B862F71bB2",
);
