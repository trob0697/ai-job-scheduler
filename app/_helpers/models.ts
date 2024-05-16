export type NavItem = {
  text: string;
  href: string;
};

export type ProductInfo = {
  name: string;
  description: string;
  marketing_features: { name: string }[];
  unit_amount: number;
  default_price: string;
  product: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
