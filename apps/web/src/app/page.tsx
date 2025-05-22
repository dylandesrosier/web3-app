import { Providers } from "@/components/providers";
import { ThemeToggle } from "@repo/ui/theme-toggle";
import { Button } from "@repo/ui/components/ui/button";
import { ExternalLinkButton } from "@repo/ui/external-link-button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <Providers>
      <main>
        <div className="min-h-screen flex flex-col w-full max-w-7xl mx-auto p-8">
          <Header />
          <Content />
          <Footer />
        </div>
      </main>
    </Providers>
  );
}

const Header = () => {
  return (
    <div className="w-full p-4 flex flex-row justify-end sm:justify-between">
      <DeployOnVercelButton className="hidden sm:block" />
      <ConnectButton />
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex-grow flex p-4 flex-col max-w-md mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold">Buidl Something</h1>
        <hr className="w-20 border-b-8 border-accent" />
      </div>
      <div className="flex flex-col space-y-2 mb-4">
        <p>
          Use WAGMI to start reading and writing data with convenient hooks like{" "}
          <code>useAccount</code> and <code>useContractRead</code>.
        </p>
        <p>
          The <code>useContractWrite</code> hook makes it easy to write data
          especially when paired with the <code>TransactionButton</code> in the
          components folder.
        </p>
      </div>
      <DeployOnVercelButton className="sm:hidden block mx-auto mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
        <ExternalLinkButton href="https://wagmi.sh" icon>
          Wagmi
        </ExternalLinkButton>
        <ExternalLinkButton href="https://viem.sh" icon>
          Viem
        </ExternalLinkButton>
        <ExternalLinkButton href="https://www.rainbowkit.com/" icon>
          RainbowKit
        </ExternalLinkButton>
        <ExternalLinkButton href="https://tailwindcss.com/" icon>
          Tailwind CSS
        </ExternalLinkButton>
        <ExternalLinkButton href="https://tanstack.com/query/latest" icon>
          TanStack Query
        </ExternalLinkButton>
        <ExternalLinkButton href="https://vercel.com/" icon>
          Vercel
        </ExternalLinkButton>
      </div>
    </div>
  );
};

const DeployOnVercelButton = ({ className }: { className?: string }) => (
  <a
    className={className}
    target="_blank"
    rel="noreferrer"
    href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdylandesrosier%2Fweb3-app&env=NEXT_PUBLIC_INFURA_ID"
  >
    <Button className="font-extrabold text-base">Deploy on Vercel</Button>
  </a>
);

const Footer = () => {
  return (
    <div className="flex-grow-0 p-4 flex space-x-1 justify-end">
      <ExternalLinkButton variant={"ghost"} href="https://x.com/dylandesrosier">
        X
      </ExternalLinkButton>
      <ExternalLinkButton
        variant={"ghost"}
        href="https://github.com/dylandesrosier"
      >
        Github
      </ExternalLinkButton>
      <ThemeToggle />
    </div>
  );
};
