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
    <main>
      <div className="max-w-md md:max-w-2xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl md:text-4xl font-bold">Lorem ipsum</div>
          <div className="flex space-x-4">
            <Link href="https://github.com" aria-label="Github">
              <GithubLogo size={27} color="#ffffff" weight="duotone" />
            </Link>
            <Link href="https://instagram.com/" aria-label="Instagram">
              <InstagramLogo size={27} color="#ffffff" weight="duotone" />
            </Link>
            <Link href="https://x.com/" aria-label="Twitter/X">
              <TwitterLogo size={27} color="#ffffff" weight="duotone" />
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
            <div className="">
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
            <div className="">
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

