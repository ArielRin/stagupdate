import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrum, mainnet } from '@reown/appkit/networks'

// 1. Get projectId
const projectId = '4f4219739b8aaf48ca130a77a163a4fa'

// 2. Set the networks
const networks = [bsc]

// 3. Create a metadata object - optional
const metadata = {
  name: 'Stag Token rewards dapp thanks to selena',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new ethersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function App() {
  return <YourApp /> // Configure the <appkit-button> or a similar button inside
}
