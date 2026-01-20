
export interface Product {
  id: string;
  name: string;
  benefits: string;
  presentation: string;
  dosage?: string;
  advancedDescription?: string;
  image?: string;
  color?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  themeColor: string;
  accentColor: string;
}
