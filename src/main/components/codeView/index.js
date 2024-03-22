import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Escolha o estilo desejado

const CodeView = ({ texto }) => {
  const MeuComponente = ({ language, code }) => {
    return (
      <SyntaxHighlighter language={language} customStyle={{ width: "100%", margin: 0 }} showInlineLineNumbers showLineNumbers useInlineStyles style={dracula}>
        {code}
      </SyntaxHighlighter>
    );
  };

  const segmentos = texto.split(/```/);
  const conteudoProcessado = segmentos.map((segmento, index) => {
    if (index % 2 === 1) {
      let linhas = segmento.split("\n").filter((linha) => linha.trim() !== "");
      let linguagem = "plaintext";
      let conteudo;
      if (linhas.length > 1) {
        [linguagem, ...conteudo] = linhas;
      } else {
        conteudo = linhas;
      }
      return <MeuComponente language={linguagem.trim()} code={conteudo.join("\n")}></MeuComponente>;
    } else {
      const linhas = segmento.split("\n\n").map((linha, idx) => (
        <span key={idx}>
          {linha}
          <br />
        </span>
      ));
      return <span key={index}>{linhas}</span>;
    }
  });

  return <div>{conteudoProcessado}</div>;
};

export default CodeView;
