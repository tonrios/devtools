import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/pt";
import { Circles } from "react-loader-spinner";
import apiGPT from "../../../services/apiGPT";
import CodeView from "../../components/codeView";

const ModelCreatorPage = () => {
  const [lang, setLang] = useState("plaintext");

  const [resultadoDoChat, setResultadoDoChat] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  function callChat() {
    setLoading(true);
    apiGPT
      .post("/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "conveter esse json em uma classe " + lang + " segue os dados do json " + jsonData }],
        temperature: 1,
      })
      .then((res) => {
        setLoading(false);
        const respostaDoChat = res.data.choices[0].message.content;
        setResultadoDoChat(respostaDoChat);
      });
  }

  return (
    <div className="h-full w-full px-48">
      <div className="grid w-full grid-cols-2 gap-x-8">
        <div className="w-full p-4 bg-gray-600  rounded-md">
          <h2 className="pb-3"> JSON input </h2>
          <div className="w-full  h-[550px]  overflow-hidden rounded-md">
            <JSONInput
              placeholder={null}
              theme="dark_vscode_tribute"
              locale={locale}
              colors={{
                background: "#111827",
              }}
              onChange={({ json }) => {
                setJsonData(json);
              }}
              width="100%"
            />
          </div>
          <div className="text-right pt-4">
            <TextField
              select
              label="Native select"
              value={lang}
              fullWidth
              onChange={(e) => {
                console.log(e.target.value);
                setLang(e.target.value);
              }}
            >
              {["csharp", "java", "javascript", "pyton", "xml"].map((option) => (
                <MenuItem value={option}> {option}</MenuItem>
              ))}
            </TextField>

            <Button variant="contained" color="success" className="w-full sm:w-auto" onClick={() => callChat()}>
              GENERATE
            </Button>
          </div>
        </div>

        <div className="w-full p-4 bg-gray-600 rounded-md">
          <h2 className="pb-3"> Result </h2>

          <div className="w-full overflow-scroll rounded-md justify-center content-center items-center flex break-words">
            {loading ? <Circles height="80" width="80" color="#fff" ariaLabel="circles-loading" visible={true} /> : <CodeView texto={resultadoDoChat}></CodeView>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCreatorPage;
