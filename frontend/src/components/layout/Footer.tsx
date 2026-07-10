import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-bold whitespace-nowrap text-foreground tracking-tight">
                B & Y <span className="text-brand-accent">Tech</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-foreground/60 max-w-sm">
              Empowering your future with next-gen technology and enterprise solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wide">Products</h2>
              <ul className="text-foreground/70 font-medium text-sm space-y-4">
                <li><Link href="/products" className="hover:text-brand-accent transition-colors">All Products</Link></li>
                <li><Link href="/industries" className="hover:text-brand-accent transition-colors">By Industry</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wide">Company</h2>
              <ul className="text-foreground/70 font-medium text-sm space-y-4">
                <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                <li><Link href="/about/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wide">Legal</h2>
              <ul className="text-foreground/70 font-medium text-sm space-y-4">
                <li><Link href="/legal/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/terms-of-service" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wide">Contact</h2>
              <ul className="text-foreground/70 font-medium text-sm space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    No.624, Khivraj Building, Anna Salai,<br/>
                    Chennai-600006<br/>
                    LM.Gemini Flyover
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="tel:+919941070555" className="hover:text-brand-accent transition-colors">+91 99410 70555</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="tel:+918667735575" className="hover:text-brand-accent transition-colors">+91 86677 35575</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="mailto:info@bnytechnologies.com" className="hover:text-brand-accent transition-colors break-all">info@bnytechnologies.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-foreground/60 sm:text-center">
            © 2026 <Link href="/" className="hover:text-brand-accent transition-colors">B & Y Technology™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <Link href="#" className="text-foreground/50 hover:text-brand-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-brand-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-brand-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-brand-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              <span className="sr-only">LinkedIn account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
