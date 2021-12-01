import { interaction, pipe } from "@portto/sdk"
import { resolve as defaultResolve } from "@portto/sdk"
import { config, createSignableVoucher } from "@portto/sdk"

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
