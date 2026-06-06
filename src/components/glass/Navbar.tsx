import { Search, ShoppingBag, User, Heart } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1200px,94%)]">
      <nav className="glass-strong flex items-center justify-between rounded-full px-3 py-2 sm:px-5">
        <a href="#" className="flex items-center gap-2 pl-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white/80 to-white/20 text-sm font-bold text-foreground shadow-inner">
            ◎
          </span>
          <span className="text-base font-semibold tracking-tight text-white">Lumo</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#shop">Shop</a>
          <a className="hover:text-white" href="#new">New</a>
          <a className="hover:text-white" href="#collections">Collections</a>
          <a className="hover:text-white" href="#story">Story</a>
        </div>
        <div className="flex items-center gap-1">
          <IconBtn aria="Search"><Search className="h-4.5 w-4.5" /></IconBtn>
          <IconBtn aria="Wishlist"><Heart className="h-4.5 w-4.5" /></IconBtn>
          <IconBtn aria="Account"><User className="h-4.5 w-4.5" /></IconBtn>
          <button
  aria-label="Cart"
  className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-[0_8px_24px_-6px_rgba(255,255,255,0.5)] transition hover:scale-[1.03]"
>
  <ShoppingBag className="h-4 w-4" />
  <span className="hidden sm:inline">Cart</span>
  <span className="rounded-full bg-black/10 px-1.5 text-xs">3</span>
</button>
        </div>
      </nav>
    </header>
  );
}

function IconBtn({ children, aria }: { children: React.ReactNode; aria: string }) {
  return (
    <button
      aria-label={aria}
      className="grid h-10 w-10 place-items-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}
