import { createMetadata } from "@/lib/seo";
import { BlogContent } from "@/components/sections/BlogContent";

export const metadata = createMetadata({
  title: "Blog de Segurança Inteligente | Phoenix Security",
  description:
    "Artigos sobre portaria virtual, controle de acesso, monitoramento, condomínios e tecnologia de segurança em São José dos Campos e São Paulo.",
  path: "/blog",
  keywords: [
    "blog segurança condomínio",
    "portaria virtual artigos",
    "controle de acesso conteúdo",
    "segurança predial SP",
  ],
});

export default function BlogPage() {
  return <BlogContent />;
}
