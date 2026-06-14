import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center section-padding pt-28">
      <div className="container-content text-center">
        <p className="label-caps mb-4">404</p>
        <h1 className="text-4xl md:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
        </div>
        <p className="mt-8 text-sm text-sage">
          <Link href="/contact" className="hover:text-accent-dark transition-colors">
            Contact us
          </Link>{" "}
          if you need help finding something.
        </p>
      </div>
    </section>
  );
}
