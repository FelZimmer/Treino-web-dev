"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function DetalhesNota() {
  // Lê os parâmetros que vieram na URL (?title=...&content=...)
  const searchParams = useSearchParams();
  const title = searchParams.get("title")
  const content = searchParams.get("content")

  // Efeito colateral: atualiza o título da aba do navegador
  useEffect(() => {
    document.title = title
  }, [title]);

  return (
    <main>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link href="/">Voltar</Link>
    </main>
  );
}