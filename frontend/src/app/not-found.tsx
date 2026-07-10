import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background items-center justify-center text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <h1 className="text-8xl font-bold text-brand-accent mb-4">404</h1>
      <h2 className="text-3xl font-bold tracking-tight mb-6">Page Not Found</h2>
      <p className="text-lg text-foreground/70 max-w-md mx-auto mb-10">
        We couldn't find the page you were looking for. It might have been moved or deleted.
      </p>
      <Link href="/" className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Return Home
      </Link>
    </div>
  );
}
