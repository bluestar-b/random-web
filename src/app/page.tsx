import Heading from "@/components/Heading"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  return (
    <main>
      <div className="max-w-md md:max-w-2xl mx-auto py-12 px-6">
        <Heading />
        <p className="mb-8">
          In the vast cosmos, a Pale Blue Dot—a tiny, fragile world. With azure
          beauty, it spins in cosmic dance, a reminder of life&apos;s wonders. Amidst
          celestial grandeur, we find awe and humility, gazing at our ethereal
          home in the cosmic vastness.
        </p>
        <h2 className="text-2xl font-semibold mb-4">My projects</h2>
        <div className="flex flex-col gap-6">
          <div className="p-4 space-y-4">
            <ProjectCard
              linkHref={"https://github.com"}
              linkAriaLabel={"See on github"}
              title={"Project A"}
              content={
                "Stars sprinkle the vast cosmic canvas, each a radiant storyteller in the galactic tapestry, weaving tales of wonder across the infinite expanse."
              }
            />
            <ProjectCard
              linkHref={"https://github.com"}
              linkAriaLabel={"See on github"}
              title={"Project B"}
              content={
                "Celestial ballet, stars pirouette in the velvet sky, painting constellations that whisper tales of the universe's secrets."
              }
            />
          </div>
        </div>
      </div>
    </main>
  )
}
