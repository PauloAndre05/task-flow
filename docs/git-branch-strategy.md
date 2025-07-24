# 📚 Estratégia de Branches – Task Flow Project

Este documento define a estratégia de versionamento e fluxo de trabalho com Git para garantir organização, escalabilidade e colaboração eficaz no projeto **Task Flow**.

---

## 🔀 Branches principais

- **main**:  
  - Contém o código estável e pronto para produção.
  - Só recebe merges da branch `dev` após revisão e testes.

- **dev**:  
  - Contém o código em desenvolvimento.
  - Serve como base para todas as novas features, correções e melhorias.

---

## 🌱 Tipos de Branches

| Tipo           | Prefixo       | Exemplo                         | Descrição                                 |
|----------------|---------------|----------------------------------|-------------------------------------------|
| Feature        | `feat/`       | `feat/sidebar-component`         | Nova funcionalidade                       |
| Bugfix         | `fix/`        | `fix/responsive-sidebar`         | Correções de bugs                         |
| Refatoração    | `refactor/`   | `refactor/sidebar-structure`     | Melhorias no código sem alterar função    |
| Tarefa técnica | `chore/`      | `chore/setup-eslint`             | Tarefas que não impactam diretamente a app|
| Hotfix         | `hotfix/`     | `hotfix/login-crash`             | Correções urgentes em produção            |

---

## ✅ Fluxo de Trabalho

1. **Checkout na dev**
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Criar uma nova branch**
   ```bash
   git checkout -b feat/nome-da-feature
   ```

3. **Fazer commits frequentes e significativos**
   ```bash
   git add .
   git commit -m "feat: adiciona componente sidebar"
   ```

4. **Push da branch**
   ```bash
   git push origin feat/nome-da-feature
   ```

5. **Abrir Pull Request (PR)**
   - De `feat/nome-da-feature` → `dev`
   - Adicionar descrição clara

6. **Merge para dev após testes**
   - Só fazer merge para `main` após validação da `dev`

---

## 📌 Regras de Commits

- Use prefixos: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`
- Seja breve e claro:
  ```bash
  git commit -m "fix: corrige erro de alinhamento no header"
  ```

---

## 🛡️ Boas práticas

- Sempre atualize a `dev` antes de criar uma nova branch.
- Nunca faça push direto na `main`.
- Faça rebase/squash se necessário para manter o histórico limpo.
- Escreva descrições úteis nos Pull Requests.

---

## 💬 Dúvidas?

Caso tenhas dúvidas ou precises alterar o fluxo, documente aqui ou combine com a equipa.