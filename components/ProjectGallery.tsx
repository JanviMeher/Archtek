import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import type { Project } from "@/data/projects";

interface ProjectGalleryProps {
  gallery: Project["images"]["gallery"];
}

type GalleryBlock =
  | { type: "full"; image: Project["images"]["gallery"][number] }
  | { type: "pair"; images: Project["images"]["gallery"] };

function groupGallery(
  gallery: Project["images"]["gallery"]
): GalleryBlock[] {
  const blocks: GalleryBlock[] = [];
  let pairBuffer: Project["images"]["gallery"] = [];

  const flushPair = () => {
    if (pairBuffer.length > 0) {
      blocks.push({ type: "pair", images: [...pairBuffer] });
      pairBuffer = [];
    }
  };

  for (const image of gallery) {
    if (image.layout === "half") {
      pairBuffer.push(image);
      if (pairBuffer.length === 2) flushPair();
    } else {
      flushPair();
      blocks.push({ type: "full", image });
    }
  }
  flushPair();

  return blocks;
}

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const blocks = groupGallery(gallery);

  return (
    <div className="space-y-6">
      {blocks.map((block, blockIndex) => {
        if (block.type === "full") {
          return (
            <FadeIn key={block.image.src} delay={(blockIndex % 3) * 80}>
              <figure className="overflow-hidden rounded-lg">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={block.image.src}
                    alt={block.image.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-sage">
                  {block.image.alt}
                </figcaption>
              </figure>
            </FadeIn>
          );
        }

        return (
          <div key={`pair-${blockIndex}`} className="grid gap-6 md:grid-cols-2">
            {block.images.map((image, index) => (
              <FadeIn key={image.src} delay={index * 80}>
                <figure className="overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-sage">
                    {image.alt}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        );
      })}
    </div>
  );
}
