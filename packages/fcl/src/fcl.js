import "./default-config"
export { VERSION } from "./VERSION"
export { query } from "./exec/query"
export { mutate } from "./exec/mutate"
export { verifyUserSignatures } from "./exec/verify"
export { serialize } from "./serialize"
export { transaction as tx } from "./transaction"
export { events } from "./events"

import { currentUser } from "./current-user"
export { currentUser }

import { discovery } from "./discovery"
export { discovery }

export const authenticate = (opts = {}) => currentUser().authenticate(opts)
export const unauthenticate = () => currentUser().unauthenticate()
export const reauthenticate = (opts = {}) => {
  currentUser().unauthenticate()
  return currentUser().authenticate(opts)
}
export const signUp = (opts = {}) => currentUser().authenticate(opts)
export const logIn = (opts = {}) => currentUser().authenticate(opts)

export const authz = currentUser().authorization

import * as types from "@onflow/types"
export const t = types

import * as WalletUtils from "./wallet-utils"
export { WalletUtils }

export { TestUtils } from "@portto/sdk"
export { config } from "@portto/sdk"
export { send } from "@portto/sdk"
export { decode } from "@portto/sdk"
export { account } from "@portto/sdk"
export { latestBlock } from "@portto/sdk"
export { isOk, isBad, why, pipe, build } from "@portto/sdk"
export { withPrefix, sansPrefix, display } from "@onflow/util-address"
export { template as cadence } from "@onflow/util-template"
export { template as cdc } from "@onflow/util-template"
export { createSignableVoucher } from "@portto/sdk"

// builders
export { transaction } from "@portto/sdk"
export { script } from "@portto/sdk"
export { ping } from "@portto/sdk"
export { atBlockHeight } from "@portto/sdk"
export { atBlockId } from "@portto/sdk"
export { getAccount } from "@portto/sdk"
export { getEvents } from "@portto/sdk"
export { getEventsAtBlockHeightRange } from "@portto/sdk"
export { getEventsAtBlockIds } from "@portto/sdk"
export { getLatestBlock } from "@portto/sdk"
export { getBlock } from "@portto/sdk"
export { getBlockHeader } from "@portto/sdk"
export { getBlockById } from "@portto/sdk"
export { getBlockByHeight } from "@portto/sdk"
export { getCollection } from "@portto/sdk"
export { getTransactionStatus } from "@portto/sdk"
export { getTransaction } from "@portto/sdk"
export { authorizations, authorization } from "@portto/sdk"
export { args, arg } from "@portto/sdk"
export { proposer } from "@portto/sdk"
export { payer } from "@portto/sdk"
export { limit } from "@portto/sdk"
export { ref } from "@portto/sdk"
export { params, param } from "@portto/sdk"
export { validator } from "@portto/sdk"
export { invariant } from "@portto/sdk"
