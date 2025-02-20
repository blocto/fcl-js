import {interaction, pipe} from "@blocto/flow-sdk"
import {resolve as defaultResolve} from "@blocto/flow-sdk"
import {config, createSignableVoucher} from "@blocto/flow-sdk"

export const serialize = async (args = [], opts = {}) => {
  const resolveFunction = await config.first(
    ["sdk.resolve"],
    opts.resolve || defaultResolve
  )

  if (Array.isArray(args)) args = await pipe(interaction(), args)

  return JSON.stringify(
    createSignableVoucher(await resolveFunction(args)),
    null,
    2
  )
}
