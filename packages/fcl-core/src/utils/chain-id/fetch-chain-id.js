import * as sdk from "@blocto/flow-sdk"

export async function fetchChainId(opts = {}) {
  const response = await sdk
    .send([sdk.getNetworkParameters()], opts)
    .then(sdk.decode)
  return response.chainId
}
