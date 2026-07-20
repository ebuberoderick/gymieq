import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CartEmptyProps {
  onBrowse?: () => void;
}

export function CartEmpty({ onBrowse }: CartEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="glass flex h-16 w-16 items-center justify-center rounded-full">
        <ShoppingBag className="h-7 w-7 text-white/40" />
      </div>
      <p className="mt-4 text-lg font-semibold text-white">Your bag is empty</p>
      <p className="mt-2 max-w-xs text-sm text-white/50">
        Browse the marketplace and add gear to get started.
      </p>
      <Button href="/marketplace" onClick={onBrowse} className="mt-6">
        Shop Marketplace
      </Button>
    </div>
  );
}
