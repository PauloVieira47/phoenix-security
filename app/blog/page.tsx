import { createMetadata } from "@/lib/seo";
import { BlogContent } from "@/components/sections/BlogContent";

export const metadata = createMetadata({
  title: "Blog | Phoenix Security",
  description:
    "Artigos sobre segurança, tecnologia, condomínios, portaria virtual e controle de acesso.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogContent />;
}
