import { PRODUCTS, productUrl, type ProductId } from "@/lib/products";
export default function BuyLink({ product, placement, children, className = "em-button" }: { product: ProductId; placement: string; children?: React.ReactNode; className?: string }) {
  return <a className={className} href={productUrl(product, placement)}>{children ?? `Buy on Gumroad · $${PRODUCTS[product].price}`}<span aria-hidden="true">↗</span></a>;
}
