"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppNavbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Industries", link: "/industries" },
    { name: "Solutions", link: "/solutions" },
    { name: "Customers", link: "/customers" },
    { name: "Resources", link: "/resources" },
    { name: "Support", link: "/support" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Link href="/admin/login" className="text-sm font-medium text-foreground hover:text-brand-accent transition-colors">
            Login
          </Link>
          <NavbarButton 
            variant="primary" 
            onClick={() => router.push('/request-demo')}
            className="bg-brand-accent hover:bg-brand-accent/90 text-black border-none shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]"
          >
            Request Demo
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md text-foreground/80 hover:bg-surface hover:text-brand-accent transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 px-4 pt-4 border-t border-border mt-2">
            <Link
              href="/admin/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-foreground hover:text-brand-accent transition-colors"
            >
              Login
            </Link>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push('/request-demo');
              }}
              variant="primary"
              className="w-full h-12 bg-brand-accent hover:bg-brand-accent/90 text-black border-none shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]"
            >
              Request Demo
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
