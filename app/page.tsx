"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 px-4 shadow-md">
        <h1 className="text-3xl font-bold">Systan Travel</h1>
        <p className="text-sm mt-1">Transformando sonhos em experiências reais</p>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Descubra o que a Systan Travel pode fazer por você</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">Nossa equipe se dedica a planejar viagens sob medida, com pacotes personalizados, roteiros exclusivos e consultoria completa para você explorar o mundo com tranquilidade e segurança.</p>
        <Button className="text-lg">Fale com a gente</Button>
      </section>

      {/* Trabalhos da Systan Travel */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Nossos Trabalhos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              titulo: "Pacotes Personalizados",
              descricao: "Montamos roteiros exclusivos para cada cliente com base nos seus interesses, tempo e orçamento."
            },
            {
              titulo: "Viagens em Grupo",
              descricao: "Organizamos viagens para grupos com tudo incluso: transporte, hospedagem, guia e experiências culturais."
            },
            {
              titulo: "Consultoria de Viagem",
              descricao: "Ajudamos com dicas, documentação, seguros, vistos e tudo que você precisa antes da sua viagem."
            },
            {
              titulo: "Experiências Locais",
              descricao: "Oferecemos acesso a atividades autênticas como gastronomia, tours históricos e eventos regionais."
            },
            {
              titulo: "Apoio ao Viajante",
              descricao: "Acompanhamento durante a viagem com suporte em tempo real para imprevistos ou dúvidas."
            },
            {
              titulo: "Viagens Corporativas",
              descricao: "Soluções para empresas que precisam enviar equipes ou clientes para eventos, feiras ou reuniões."
            }
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
                <p>{item.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre nós */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sobre a Systan Travel</h2>
        <p className="max-w-2xl mx-auto">Desde a nossa fundação, temos ajudado centenas de clientes a realizar o sonho de viajar com qualidade, conforto e segurança. Nosso diferencial está no cuidado com os detalhes e no atendimento personalizado.</p>
      </section>

      {/* Contato */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Entre em Contato</h2>
        <form
          action="https://formspree.io/f/meqwnnlj"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <Input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows={4}
            required
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          />
          <Button type="submit">Enviar mensagem</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4 mt-12">
        <p>&copy; 2025 Systan Travel. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
