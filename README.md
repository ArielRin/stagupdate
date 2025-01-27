
# StagTokenV2 Smart Contract Whitepaper

#### 1. Executive Summary
- **Title:** StagTokenV2 Smart Contract Whitepaper
- **Purpose:** To provide an in-depth explanation of the StagTokenV2 smart contract, detailing its functionality, design, and intended use.
- **Contract Version:** V2
- **Platform:** Binance Smart Chain (BSC)

#### 2. Introduction
- **Overview:** The StagTokenV2 is a decentralized cryptocurrency token built on the Binance Smart Chain (BSC). This smart contract is designed to facilitate the trading of STAG tokens with unique features such as automated liquidity provisioning, tax fees, and reward distributions.
- **Objective:** This whitepaper aims to explain the architecture, mechanics, and operations of the StagTokenV2 smart contract to stakeholders including developers, investors, and community members.

#### 3. Contract Architecture
- **Inheritance:** The contract inherits from `Context`, `IBEP20`, and `Ownable`.
- **Libraries:** Utilizes `Address` library for secure BNB transfers.
- **Interfaces:** Interacts with `IFactory` and `IRouter` for liquidity pool creation and routing.

#### 4. Core Features
- **Tokenomics:**
  - **Name:** Stag Token V2
  - **Symbol:** STAG
  - **Decimals:** 9
  - **Total Supply:** 100,000 STAG
  - **Max Transaction Amount:** 5,000 STAG
  - **Swap Tokens At Amount:** 700 STAG

- **Fees:**
  - **Buy Taxes:** RFI (3%), NFT Reward (2%), Liquidity (1%), Dev (2%)
  - **Sell Taxes:** RFI (3%), NFT Reward (2%), Liquidity (2%), Dev (3%)

- **Wallets:**
  - **Dead Wallet:** 0x000000000000000000000000000000000000dEaD
  - **NFT Reward Wallet:** 0xF8D1360B0Aa99797C8Ca315A28e47F6B2aa14d83
  - **Ops Wallet:** 0x3f39B8d07f4568bf2A653494a3584069d0f68227
  - **Dev Wallet:** 0x7ac401C9D349241D9A5E23CBf7B6b0FF20F0CC01

- **Trading Mechanics:**
  - **Trading Enabled:** Controlled by the `tradingEnabled` flag.
  - **Swap Enabled:** Controlled by the `swapEnabled` flag.
  - **Automated Liquidity Provision:** Ensures that a portion of the transaction fees is automatically added to the liquidity pool.
  - **Token Distribution:** Fees are distributed to the liquidity pool, NFT reward wallet, ops wallet, and dev wallet.

#### 5. Detailed Functionality
- **Token Transfer and Reflection:**
  - **Transfer Mechanism:** The `_transfer` function handles all token transfers, applying fees as necessary.
  - **Reflection Mechanism:** Excludes certain addresses from reflection, allowing them to receive tokens without incurring reflection fees.
  - **Taxes Calculation:** Taxes are calculated based on the transaction amount and applied during the transfer.

- **Liquidity and Fees Handling:**
  - **Add Liquidity:** The `addLiquidity` function adds tokens and BNB to the liquidity pool.
  - **Swap Tokens for BNB:** The `swapTokensForBNB` function swaps tokens for BNB to facilitate liquidity additions and fee distributions.
  - **Swap and Liquify:** The `swapAndLiquify` function executes the swap and liquidity addition process.

#### 6. Security and Safety
- **Ownership:** The contract is Ownable, allowing the owner to perform critical operations such as enabling trading, updating wallets, and managing fees.
- **Exclusions:** Addresses can be excluded from fees and rewards to ensure safe transactions and token distribution.
- **Rescue Functions:** The contract includes functions to rescue BNB and any BEP20 tokens accidentally sent to the contract.

#### 7. Deployment and Configuration
- **Router and Pair:** The contract interacts with PancakeSwap’s router and pair for liquidity provision and trading.
- **Environment:** Deployed on Binance Smart Chain (BSC).
- **Configuration:** Post-deployment, the owner can enable trading, update fees, and manage other parameters as needed.

#### 8. Conclusion
- The StagTokenV2 smart contract is a robust solution for token creation and management on the Binance Smart Chain, offering a range of features to enhance trading and community engagement.
- The contract is designed with security and flexibility in mind, ensuring a smooth and secure experience for all users.


### How Reflections Work in the `StagTokenV2` Contract

1. **Tokenomics and Fees:**
   - **Reflection Fee (RFI):** A portion of each transaction fee is designated as a reflection fee. This fee is used to reward token holders.
   - **Other Fees:** Additional fees may be taken for liquidity provisioning, NFT rewards, operations, and development.

2. **Reflection Distribution:**
   - **Reflection Fee Collection:** When a transaction occurs, the reflection fee is collected from the transaction amount.
   - **Reflection Distribution:** The collected reflection fee is used to increase the total supply of tokens, thereby giving all token holders a proportional increase in their token balance.

3. **Internal Accounting:**
   - **Reflection and Token Balances:** The contract maintains two types of balances:
     - **_rOwned:** The reflective balance, which includes the reflection fee distribution.
     - **_tOwned:** The token balance, which is only updated for excluded addresses (addresses that are not participating in reflections).

4. **Token Transfer Mechanism:**
   - **_transfer Function:** This function handles all token transfers and applies the necessary fees.
   - **Calculating Fees:** Fees are calculated based on the transaction amount and the current fee rates.
   - **Applying Fees:** Fees are deducted from the transaction amount and distributed according to the specified fee categories (RFI, liquidity, NFT rewards, etc.).
   - **Reflection Mechanism:** The reflection fee is used to increase the `_rTotal` supply, which effectively increases the balance of all token holders proportionally.

### Detailed Explanation with Code Snippets

#### Key Data Structures

- **_rOwned:** Mapping of addresses to their reflective balance.
- **_tOwned:** Mapping of addresses to their actual token balance (only used for excluded addresses).
- **_isExcluded:** Mapping of addresses to whether they are excluded from reflections.
- **_rTotal:** Total reflective supply.
- **_tTotal:** Total token supply.


### Summary of Reflections in `StagTokenV2`

- **Mechanism:** Reflections in `StagTokenV2` are achieved by reducing the `_rTotal` supply, which effectively increases the balance of all token holders proportionally.
- **Fees:** A portion of each transaction is designated as a reflection fee and is used to reduce `_rTotal`, thus distributing the fee back to all token holders.
- **Exclusions:** Certain addresses (e.g., the liquidity pool, dead wallet) can be excluded from reflections to avoid unnecessary complexity and potential issues.

By understanding these mechanisms, you can appreciate how the `StagTokenV2` rewards token holders through reflections, encouraging long-term holding and engagement with the token.
