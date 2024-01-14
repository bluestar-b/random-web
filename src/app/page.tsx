import {
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
                <h2 className="text-xl font-semibold mb-2 underline-offset-2 hover:underline">
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
                <h2 className="text-xl font-semibold mb-2 underline-offset-2 hover:underline">
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
