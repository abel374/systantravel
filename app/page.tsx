"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const trabalhos = [
    { titulo: "Pacotes Personalizados", descricao: "Montamos roteiros exclusivos para cada cliente com base nos seus interesses, tempo e orçamento.", icone: "🧳" },
    { titulo: "Viagens em Grupo", descricao: "Organizamos viagens para grupos com tudo incluso: transporte, hospedagem, guia e experiências culturais.", icone: "👥" },
    { titulo: "Consultoria de Viagem", descricao: "Ajudamos com dicas, documentação, seguros, vistos e tudo que você precisa antes da sua viagem.", icone: "📋" },
    { titulo: "Experiências Locais", descricao: "Oferecemos acesso a atividades autênticas como gastronomia, tours históricos e eventos regionais.", icone: "🌍" },
    { titulo: "Apoio ao Viajante", descricao: "Acompanhamento durante a viagem com suporte em tempo real para imprevistos ou dúvidas.", icone: "📞" },
    { titulo: "Viagens Corporativas", descricao: "Soluções para empresas que precisam enviar equipes ou clientes para eventos, feiras ou reuniões.", icone: "🏢" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-8 shadow-lg flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-wide">Systan Travel</h1>
        <nav>
          <ul className="flex space-x-8 text-lg font-semibold">
            <li><a href="#trabalhos" className="hover:text-yellow-400 transition-colors duration-300">Nossos Trabalhos</a></li>
            <li><a href="#sobre" className="hover:text-yellow-400 transition-colors duration-300">Sobre Nós</a></li>
            <li><a href="#contato" className="hover:text-yellow-400 transition-colors duration-300">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-28 px-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Transforme seus sonhos em viagens inesquecíveis</h2>
          <p className="mb-10 text-xl max-w-3xl mx-auto drop-shadow-md">Pacotes personalizados, consultoria especializada e experiências únicas para você explorar o mundo com tranquilidade e segurança.</p>
          <Button className="text-xl px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition">
            Fale com a gente
          </Button>
        </div>
        <div className="absolute inset-0 opacity-30">
          <img
            src="/systan-travel.jpg"
            alt="Imagem de viagem"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Trabalhos da Systan Travel */}
      <section id="trabalhos" className="py-20 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Trabalhos</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {trabalhos.map(({ titulo, descricao, icone }, idx) => (
            <Card
              key={idx}
              className="rounded-3xl shadow-xl hover:shadow-yellow-400 transition-shadow duration-300 cursor-pointer"
            >
              <CardContent className="p-10 text-center">
                <div className="text-7xl mb-6">{icone}</div>
                <h3 className="text-3xl font-semibold mb-4">{titulo}</h3>
                <p className="text-gray-700 text-lg">{descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre nós */}
      <section id="sobre" className="bg-blue-100 py-20 px-8 text-center max-w-5xl mx-auto rounded-xl shadow-md">
        <h2 className="text-4xl font-bold mb-8">Sobre a Systan Travel</h2>
        <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
          Desde a nossa fundação, temos ajudado centenas de clientes a realizar o sonho de viajar com qualidade, conforto e segurança. Nosso diferencial está no cuidado com os detalhes e no atendimento personalizado.
        </p>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-8 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Entre em Contato</h2>
        <form
          action="https://formspree.io/f/meqwnnlj"
          method="POST"
          className="space-y-8"
        >
          <Input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows={6}
            required
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className="w-full rounded border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Button type="submit" className="w-full py-5 text-lg font-bold bg-yellow-400 text-blue-900 rounded-lg shadow-lg hover:bg-yellow-500 transition">
            Enviar mensagem
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8 mt-20">
        <p>© 2025 Systan Travel. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
