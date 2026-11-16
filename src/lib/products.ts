export const SHOP_URL = "https://ethnicmuse.gumroad.com";
export const PRODUCTS = {
  lifestyle: { id: "lifestyle", name: "Lifestyle & Ethnic Stock Bundle", price: "14.99", format: "864 images", url: SHOP_URL + "/l/EthnicMuseWorldLifestyleEthnicStockBundle" },
  portraits: { id: "portraits", name: "Saree Portrait Starter", price: "9.99", format: "50 PNG portraits", url: SHOP_URL + "/l/EthnicMuseSareePortraitPack" },
  volume1: { id: "volume1", name: "Saree Stock Prompts · Volume 1", price: "4.99", format: "1,000 prompts · PDF", url: SHOP_URL + "/l/baemqv" },
  volume2: { id: "volume2", name: "Saree Stock Prompts · Volume 2", price: "4.99", format: "1,000 prompts · PDF", url: SHOP_URL + "/l/zkpqe" },
  promptBundle: { id: "promptBundle", name: "The Complete Prompt Library", price: "7.99", format: "2,000 prompts · 2 PDFs", url: SHOP_URL + "/l/ykjyvh" },
} as const;
export type ProductId = keyof typeof PRODUCTS;
export function productUrl(id: ProductId, placement: string) {
  const url = new URL(PRODUCTS[id].url);
  url.searchParams.set("utm_source", "ethnicmuseworld");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", id);
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
