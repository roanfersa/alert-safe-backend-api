# Alert Safe Backend

Backend do sistema de monitoramento de desastres ambientais desenvolvido com Next.js.

## 🚀 Tecnologias Utilizadas

- Next.js
- SQLite (better-sqlite3)
- JWT para autenticação
- Tailwind CSS
- ESLint

## 📁 Estrutura do Projeto

```
/alert-safe-backend
├── /src
│   ├── /app
│   │   └── /api           # Endpoints da API
│   ├── /lib
│   │   ├── /db           # Configuração do banco de dados
│   │   ├── /models       # Modelos de dados
│   │   ├── /services     # Serviços e lógica de negócios
│   │   └── /utils        # Funções utilitárias
│   ├── /config          # Configurações do sistema
│   └── /middleware      # Middlewares
├── /data                # Banco de dados SQLite
└── .env.local          # Variáveis de ambiente
```

## 🛠️ Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env.local`
- Preencha as variáveis necessárias:
  ```
  DB_PATH=./data/disaster_monitor.db
  JWT_SECRET=your_jwt_secret_here
  OPENAI_API_KEY=your_openai_api_key_here
  PORT=3000
  NODE_ENV=development
  ```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📝 Funcionalidades Implementadas

### ✅ Configuração Base
- [x] Estrutura inicial do projeto Next.js
- [x] Configuração do banco de dados SQLite
- [x] Middleware de autenticação JWT
- [x] Utilitários básicos
- [x] Configuração do servidor
- [x] Sistema de variáveis de ambiente

### 🚧 Próximos Passos

#### 1. Configuração da API
- [ ] Implementar rotas da API
- [ ] Configurar CORS
- [ ] Implementar validação de dados
- [ ] Configurar sistema de logs

#### 2. Modelos de Dados
- [ ] Criar modelos para usuários
- [ ] Criar modelos para alertas
- [ ] Criar modelos para abrigos
- [ ] Criar modelos para equipes

#### 3. Serviços
- [ ] Implementar serviço de autenticação
- [ ] Implementar serviço de alertas
- [ ] Implementar serviço de abrigos
- [ ] Implementar serviço de equipes

#### 4. Integrações
- [ ] Integração com APIs externas (INMET, CPRM, ANA, CENAD)
- [ ] Integração com OpenAI
- [ ] Integração com sistema Python

#### 5. Segurança
- [ ] Implementar rate limiting
- [ ] Configurar validação de entrada
- [ ] Implementar sanitização de dados
- [ ] Configurar headers de segurança

#### 6. Testes
- [ ] Configurar ambiente de testes
- [ ] Implementar testes unitários
- [ ] Implementar testes de integração
- [ ] Implementar testes de API

## 🔒 Segurança

- Todas as rotas sensíveis são protegidas com autenticação JWT
- Senhas são hasheadas antes de serem armazenadas
- Validação de dados em todas as entradas
- Proteção contra ataques comuns (XSS, CSRF, etc.)

## 📚 Documentação

A documentação detalhada da API será gerada usando Swagger/OpenAPI e estará disponível em `/api-docs` quando o servidor estiver rodando.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
# alert-safe-backend-api
