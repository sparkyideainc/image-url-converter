import Link from "next/link";

const footerProducts = [
  { url: "https://phcopilot.ai/", name: "Product Hunt Copilot" },
  { url: "https://smartexcel.cc/", name: "Smart Excel" },
  {
    url: "https://landingpage.weijunext.com/",
    name: "Landing Page Boilerplate",
  },
  { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" },
  { url: "https://starter.weijunext.com/", name: "Next.js Starter" },
  {
    url: "https://github.com/weijunext/indie-hacker-tools",
    name: "Indie Hacker Tools",
  },
];

const FooterProducts = () => {
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {footerProducts.map((product, index) => {
        return (
          <span key={product.url}>
            <Link href={product.url} target="_blank">
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <span>{" • "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default FooterProducts;
