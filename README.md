## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 🛍️ MarketPlace Modular

![Vue 3](https://img.shields.io/badge/Vue.js-3.3.0-green?logo=vuedotjs)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsive-blue)
![Dark Mode](https://img.shields.io/badge/Dark-Mode-black)

Uma aplicação moderna de marketplace construída com Vue 3, featuring arquitetura modular, GraphQL e design totalmente responsivo com suporte a dark mode.

![MarketPlace Modular Preview](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop)

## ✨ Características Principais

### 🏗️ Arquitetura Modular
- **Módulos independentes**: Produtos, Carrinho, Pedidos, Usuários, Pagamentos
- **Code splitting automático**: Carregamento sob demanda para melhor performance
- **Escalabilidade**: Fácil adição de novos módulos e funcionalidades

### 🎨 Experiência do Usuário
- **Design Responsivo**: Otimizado para mobile, tablet e desktop
- **Dark Mode**: Tema escuro com toggle suave
- **Interface Moderna**: Design limpo com Tailwind CSS
- **Loading States**: Skeletons e animações durante carregamento

### 🚀 Tecnologias & Performance
- **Vue 3**: Composition API e Reactivity System
- **GraphQL**: Queries eficientes com Apollo Client
- **Pinia**: Gerenciamento de estado moderno
- **Vue Router 4**: Navegação com lazy loading
- **Vite**: Build tool rápido e eficiente

### 🛒 Funcionalidades do E-commerce
- **Catálogo de Produtos**: Busca, filtros e paginação
- **Carrinho Dinâmico**: Sidebar interativa com cálculos em tempo real
- **Checkout Completo**: Processo de compra com múltiplas etapas
- **Sistema de Pedidos**: Histórico e acompanhamento
- **Pagamentos Simulados**: Múltiplos métodos de pagamento

## 📦 Módulos da Aplicação

| Módulo | Descrição | Status |
|--------|-----------|---------|
| **Products** | Catálogo, busca, filtros e detalhes | ✅ Completo |
| **Cart** | Carrinho com sidebar responsiva | ✅ Completo |
| **Orders** | Histórico e detalhes de pedidos | ✅ Completo |
| **Users** | Perfil e autenticação | ✅ Completo |
| **Payments** | Processamento de pagamentos | ✅ Completo |
| **Checkout** | Fluxo completo de compra | ✅ Completo |

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue 3.3** - Framework principal
- **Vue Router 4** - Roteamento
- **Pinia** - Gerenciamento de estado
- **Apollo Client** - Cliente GraphQL
- **Tailwind CSS** - Framework CSS
- **Lucide Vue** - Ícones
- **Vite** - Build tool e dev server

### Desenvolvimento
- **ES6+** - JavaScript moderno
- **SCSS** - Pré-processador CSS
- **GraphQL** - API query language
- **Responsive Design** - Mobile-first

## 🏃‍♂️ Começando

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/NinoMiquelino/vue-modular-marketplace.git
cd vue-modular-marketplace
```

1. Instale as dependências

```bash
npm install
```

1. Configure variáveis de ambiente

```bash
cp .env.example .env
# Edite .env com suas configurações
```

1. Execute em desenvolvimento

```bash
npm run dev
```

1. Acesse a aplicação

```
http://localhost:5173
```

Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

📁 Estrutura do Projeto

```
vue-modular-marketplace/
├── src/
│   ├── modules/              # Módulos de funcionalidades
│   │   ├── products/         # Catálogo de produtos
│   │   ├── cart/            # Gerenciamento do carrinho
│   │   ├── orders/          # Histórico de pedidos
│   │   ├── users/           # Autenticação e perfil
│   │   ├── payments/        # Processamento de pagamentos
│   │   └── checkout/        # Fluxo de checkout
│   ├── components/          # Componentes reutilizáveis
│   │   └── layout/          # Componentes de layout
│   ├── stores/              # Gerenciamento de estado (Pinia)
│   ├── router/              # Configuração de rotas
│   ├── composables/         # Composables Vue 3
│   ├── utils/               # Utilitários e helpers
│   └── styles/              # Estilos globais
├── public/                  # Arquivos estáticos
└── docs/                   # Documentação
```

🎯 Funcionalidades Detalhadas

🏪 Módulo de Produtos

· Listagem com grid responsivo<br>
· Busca em tempo real<br>
· Filtros por categoria, preço e avaliação<br>
· Paginação com lazy loading<br>
· Detalhes do produto com galeria<br>
· Sistema de avaliações

🛒 Módulo do Carrinho

· Sidebar deslizante<br>
· Adição/remoção de itens<br>
· Cálculo automático de totais<br>
· Persistência no localStorage<br>
· Quantidade ajustável<br>
· Empty states

💳 Módulo de Checkout

· Processo multi-etapas<br>
· Múltiplos métodos de pagamento<br>
· Validação de formulários<br>
· Simulação de processamento<br>
· Confirmação de pedido

👤 Módulo de Usuários

· Perfil do usuário<br>
· Histórico de pedidos<br>
· Gestão de endereços<br>
· Autenticação simulada<br>
· Avatar personalizável

🔧 Configuração

Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

```env
VITE_APP_NAME="MarketPlace Modular"
VITE_GRAPHQL_ENDPOINT="https://api.mocki.io/v2/c4d7a195/graphql"
VITE_API_TIMEOUT=5000
```

GraphQL Endpoint

A aplicação utiliza um endpoint mock para demonstração. Para produção, substitua pela sua API real:

```javascript
// src/main.js
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT
})
```

🚀 Deploy

Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta dist/ prontos para deploy.

Plataformas de Deploy Recomendadas

· Vercel: Deploy automático com GitHub<br>
· Netlify: Deploy contínuo<br>
· GitHub Pages: Para demonstrações<br>
· Firebase Hosting: Para projetos Google

Padrões de Código

· Siga a Vue Style Guide<br>
· Use Composition API<br>
· Mantenha componentes modulares<br>
· Escreva testes para novas funcionalidades

📝 Roadmap

· Sistema de avaliações real<br>
· Integração com APIs de pagamento<br>
· Modo offline com PWA<br>
· Internacionalização (i18n)<br>
· Dashboard administrativo<br>
· Sistema de cupons e promoções<br>
· Wishlist e listas de desejos<br>
· Comparação de produtos

🐛 Troubleshooting

Problemas Comuns

Erro de CORS no GraphQL

· Verifique o endpoint configurado<br>
· Configure proxy no Vite se necessário

Styles não carregando

· Execute npm install novamente<br>
· Verifique imports do SCSS

Hot reload não funcionando

· Reinicie o servidor de desenvolvimento<br>
· Verifique configurações do Vite

🙏 Agradecimentos

· Vue.js - Framework incrível<br>
· Tailwind CSS - Utility-first CSS<br>
· Apollo GraphQL - Cliente GraphQL<br>
· Lucide - Ícones bonitos

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/vue-modular-marketplace/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/vue-modular-marketplace/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
