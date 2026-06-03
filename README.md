# Validador de CPF com JavaScript Puro

## 📋 Sobre o Projeto

Este projeto demonstra como validar um CPF utilizando apenas JavaScript puro, sem bibliotecas ou frameworks.

O objetivo é mostrar, de forma prática e didática, como funcionam os dois dígitos verificadores presentes em todo CPF válido.

Ao digitar um CPF no campo de entrada, a aplicação realiza a validação em tempo real e informa imediatamente se o documento é válido ou inválido.

---

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla (Puro)

---

## 🎯 Funcionalidades

* Validação automática durante a digitação
* Remoção automática de caracteres não numéricos
* Verificação do tamanho do CPF
* Bloqueio de sequências inválidas (111.111.111-11, 222.222.222-22, etc.)
* Cálculo do primeiro dígito verificador
* Cálculo do segundo dígito verificador
* Feedback visual instantâneo

---

## 📂 Estrutura do Projeto

```text
projeto/
│
├── index.html
├── style.css
└── main.js
```

---

## 🧠 Como Funciona a Validação

O CPF possui 11 números.

Os nove primeiros representam o número base.

Os dois últimos são chamados de **dígitos verificadores**.

Esses dígitos são calculados através de operações matemáticas que permitem identificar CPFs inválidos ou digitados incorretamente.

### Etapa 1

Multiplicar os 9 primeiros números por pesos decrescentes:

```text
10, 9, 8, 7, 6, 5, 4, 3, 2
```

Somar todos os resultados.

### Etapa 2

Aplicar a fórmula:

```javascript
digito = (soma * 10) % 11;
```

Caso o resultado seja 10, o dígito passa a ser 0.

### Etapa 3

Comparar o resultado calculado com o primeiro dígito verificador informado.

### Etapa 4

Repetir o processo utilizando os 10 primeiros números para obter o segundo dígito verificador.

---

## 💻 Exemplo de Uso

CPF válido:

```text
529.982.247-25
```

Resultado:

```text
✅ CPF VERDADEIRO
```

CPF inválido:

```text
111.111.111-11
```

Resultado:

```text
❌ CPF FALSO
```

---

## 📚 Conceitos Trabalhados

Durante o desenvolvimento deste projeto são utilizados diversos conceitos importantes:

* Manipulação do DOM
* Eventos HTML
* oninput
* Funções JavaScript
* Loops (for)
* Arrays e Strings
* Expressões Regulares (Regex)
* Operadores matemáticos
* Validação de dados
* Feedback visual para o usuário

---

## 🎓 Objetivo Educacional

Este projeto foi criado para ajudar estudantes e programadores iniciantes a compreenderem:

* Como funcionam algoritmos de validação
* Como manipular entradas do usuário
* Como criar aplicações interativas utilizando JavaScript puro
* Como aplicar lógica de programação em problemas reais

---

## 📌 Próximos Passos

Possíveis evoluções para este projeto:

* Máscara automática de CPF
* Consulta de CPF via API
* Validação de CNPJ
* Validação de CEP
* Integração com formulários de cadastro
* Persistência de dados utilizando LocalStorage

---

## 📺 Acompanhe os Projetos em Vídeo

Este projeto faz parte da série de projetos práticos desenvolvidos no canal.

👉 Inscreva-se:
[https://www.youtube.com/@rogeriopontesti](https://www.youtube.com/@rogeriopontesti)

Lá você encontrará aulas sobre:

- JavaScript Puro
- Git e GitHub
- HTML e CSS
- Lógica de Programação
- Projetos Reais para Portfólio
- Desenvolvimento Web

---

## 👨‍💻 Autor

Rogerio Pontes

Canal focado em programação, JavaScript, desenvolvimento web e projetos práticos para iniciantes.

Se este projeto foi útil para você, considere deixar uma estrela ⭐ no repositório e compartilhar com outros estudantes.
