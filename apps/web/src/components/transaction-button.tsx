import { useAccount, useSwitchChain, useChainId } from "wagmi";
import {
  getChainNiceName,
  getEtherscanTransactionLink,
} from "@/lib/blockchain";
import { ConnectButton } from "@rainbow-me/rainbowkit";

/**
 * Pairs with useContractWrite to provide a button that will connect the wallet, switch the network, write to the contract and display a receipt link.
 * @param props
 * @returns
 */
export const TransactionButton = (props: {
  children: React.ReactNode;
  chainId: number;
  write: (() => void) | undefined;
  className?: string;
  hash?: string;
}) => {
  const { chainId: targetChainId, className, write, hash } = props;

  const { switchChainAsync } = useSwitchChain();
  const { isConnected } = useAccount();
  const chainId = useChainId();

  if (!isConnected) {
    return <ConnectButton />;
  } else if (chainId !== targetChainId) {
    return (
      <button
        className={className}
        disabled={!switchChainAsync}
        onClick={() => {
          switchChainAsync?.({ chainId: targetChainId });
        }}
      >
        Switch to {getChainNiceName(chainId)}
      </button>
    );
  }

  return (
    <>
      <button
        className={className}
        disabled={!write}
        onClick={() => {
          write?.();
        }}
      >
        {props.children}
      </button>
      {!!hash && (
        <a
          className={className}
          href={getEtherscanTransactionLink(chainId, hash)}
        >
          Receipt
        </a>
      )}
    </>
  );
};
