import {init} from "./fcl-wc"
import * as fcl from "@blocto/fcl"

jest.mock("@walletconnect/modal", () => {})
jest.mock("@walletconnect/sign-client", () => {})
jest.mock("@walletconnect/utils", () => {})

jest.mock("@blocto/fcl", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@blocto/fcl"),
  }
})

describe("Init Client", () => {
  let chainIdSpy
  beforeEach(() => {
    chainIdSpy = jest.spyOn(fcl, "getChainId")
    chainIdSpy.mockImplementation(async () => "testnet")
  })

  afterEach(() => {
    chainIdSpy.mockRestore()
  })

  it("should throw without projectId", async () => {
    expect.assertions(1)
    await expect(init).rejects.toThrow(Error)
  })
})
