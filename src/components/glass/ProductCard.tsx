import { Plus, Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  tag: string;
  price: string;
  rating?: number;
}

export function ProductCard({ image, name, tag, price, rating = 4.9 }: ProductCardProps) {
  return (
    <article className="glass group relative overflow-hidden rounded-[28px] p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="relative aspect-square overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          <Star className="h-3 w-3 fill-white" /> {rating}
        </span>
        <button
          aria-label="Add to cart"
          className="glass-icon absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-2xl text-white transition hover:scale-110"
        >
          <Plus className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>
      <div className="flex items-end justify-between px-2 pb-1 pt-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-white/60">{tag}</p>
          <h3 className="text-sm font-semibold text-white">{name}</h3>
        </div>
        <p className="text-sm font-semibold text-white">{price}</p>
      </div>
    </article>
  );
}
