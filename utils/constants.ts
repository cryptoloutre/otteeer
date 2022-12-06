import { PublicKey } from "@solana/web3.js"

export const PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_STAKE_PROGRAM_ID ?? "Gkd7Ys1g7SWhDZpwnVfw86m11wGZe4jAmJciqujyubEZ"
)

export const STAKE_MINT = new PublicKey(
  process.env.NEXT_PUBLIC_STAKE_MINT_ADDRESS ?? "AFXPLSwTin6VV6dBFnSKoNA3SwmDqCqNfH5cRfQLESEU"
)