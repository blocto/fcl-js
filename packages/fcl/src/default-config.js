import { config } from "@portto/sdk"
import { DISCOVERY_METHOD, STORAGE_DEFAULT } from "./config-utils"

config({
  "discovery.wallet.method.default": DISCOVERY_METHOD,
  "fcl.storage.default": STORAGE_DEFAULT,
})
