import {
  ArrowSquareOut,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="max-w-md md:max-w-2xl mx-auto py-12 px-6">
        <div className="md:flex justify-between items-center mb-4">
          <div className="text-3xl md:text-4xl font-bold">Lorem ipsum</div>
          <div className="flex space-x-4">
            <Link href="https://github.com" aria-label="Github">
              <GithubLogo size={26} color="#ffffff" weight="duotone" />
            </Link>
            <Link href="https://instagram.com/" aria-label="Instagram">
              <InstagramLogo size={26} color="#ffffff" weight="duotone" />
            </Link>
            <Link href="https://x.com/" aria-label="Twitter/X">
              <TwitterLogo size={26} color="#ffffff" weight="duotone" />
            </Link>
          </div>
        </div>
        <p className="mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
          repudiandae eos fuga architecto quisquam iste, quo vel excepturi,
          error illum magnam! Rerum, reiciendis quam blanditiis nemo facere
          dignissimos accusantium?
        </p>
        <h2 className="text-2xl font-semibold mb-4">My projects</h2>
        <div className="flex flex-col gap-6">
          <div className="bordered p-4">
            <div className="p-4">
              <Link href="https://github.com" aria-label="Project Link">
                <h2 className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-700 text-xl font-semibold mb-2 underline-offset-2 hover:underline">
                  Project A
                </h2>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna.
              </p>
            </div>
            <div className="p-4">
              <Link href="https://github.com" aria-label="Project Link">
                <h2 className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-700 text-xl font-semibold mb-2 underline-offset-2 hover:underline">
                  Project B
                </h2>
               
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


function ExternalLinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}
