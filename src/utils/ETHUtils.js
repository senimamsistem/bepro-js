import { ethutils } from '../interfaces';
import IContract from '../models/IContract';
import Numbers from './Numbers';

const BigNumber = require('bignumber.js');

/**
 * ETHUtils Object
 * @class ETHUtils
 * @param {ETHUtils~Options} options
 */
export default class ETHUtils extends IContract {
  constructor(params) {
    super({ abi: ethutils, ...params });
  }


  /**
   * Get token name given token address
   * @param {address} tokenAddress
   * @returns {Promise<string>}
   */
  async name(tokenAddress) {
    return await this.getWeb3Contract().methods.name(tokenAddress).call();
  }


  /**
   * Get token symbol given token address
   * @param {address} tokenAddress
   * @returns {Promise<string>}
   */
  async symbol(tokenAddress) {
    return await this.getWeb3Contract().methods.symbol(tokenAddress).call();
  }


  /**
   * Get token decimals given token address
   * @param {address} tokenAddress
   * @returns {Promise<uint8>}
   */
  async decimals(tokenAddress) {
    return Number(await this.getWeb3Contract().methods.decimals(tokenAddress).call());
  }


  /**
   * Get block timestamp
   * @returns {Promise<uint256>}
   */
  async blockTimestamp() {
    // TODO: convert to some format?
    return BigNumber(await this.getWeb3Contract().methods.blockTimestamp().call());
  }


  /**
   * Get block number
   * @returns {Promise<uint256>}
   */
  async blockNumber() {
    return BigNumber(await this.getWeb3Contract().methods.blockNumber().call());
  }


  /**
   * Get block number and timestamp
   * @returns {Promise<uint256,uint256>}
   */
  async blockNumberAndTimestamp() {
    const [blockNumber, blocktimestamp] = await this.getWeb3Contract().methods.blockNumberAndTimestamp().call();
    return [
      BigNumber(blockNumber),
      BigNumber(blockTimestamp),
    ];
  }
}
