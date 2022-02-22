import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Marketplace({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <nav className="border-b">
        <div className="flex items-center border-b p-6">
          <Image
            src="/logo-mozilla.jpg"
            alt="Mozilla Logo"
            width="200"
            height="57"
          />
          <p className="text-4xl font-bold ml-4">NFT Marketplace</p>
        </div>
        <div className="m-6">
          <div className="flex bg-gray-200 p-6">
            <Link href="/">
              <a
                className={`mr-6 hover:text-violet-500 ${
                  router.pathname == "/" ? "text-violet-800" : "text-gray-600 "
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/create-item">
              <a
                className={`mr-6 hover:text-violet-500 ${
                  router.pathname == "/create-item"
                    ? "text-violet-800"
                    : "text-gray-600 "
                }`}
              >
                Sell
              </a>
            </Link>
            <Link href="/my-assets">
              <a
                className={`mr-6 hover:text-violet-500 ${
                  router.pathname == "/my-assets"
                    ? "text-violet-800"
                    : "text-gray-600 "
                }`}
              >
                Your NFTs
              </a>
            </Link>
            <Link href="/creator-dashboard">
              <a
                className={`mr-6 hover:text-violet-500 ${
                  router.pathname == "/creator-dashboard"
                    ? "text-violet-800"
                    : "text-gray-600 "
                }`}
              >
                Dashboard
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default Marketplace;
