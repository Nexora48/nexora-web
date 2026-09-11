import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="text-center">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">404</span>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for may have been moved or removed.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
