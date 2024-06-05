import { Button, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";
import devTheme from "../../../core/theme";
import TypingAnimation from "../../components/typingAnimation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    var templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_lyn4vpz", "template_v00g6hm", templateParams, "RyRTFkH6UQrx3vZfZ").then(
      (result) => {
        console.log(result.text);
        alert("E-mail enviado com sucesso!");
      },
      (error) => {
        console.log(error.text);
        alert("Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
      }
    );
  };

  return (
    <main className="flex flex-col  justify-center w-full md:px-32">
      <Typography variant="h4" component="h2" style={{ textAlign: "center", color: devTheme.palette.secondary.main, marginBottom: 8 }}>
        <TypingAnimation text=">_ CONTACT ME" speed={80} />
      </Typography>

      <Typography style={{ textAlign: "center" }}>Send me a message!</Typography>

      <div className="mt-12 sm:py-0 flex gap-8 flex-col ">
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            style: { color: devTheme.palette.primary.main },
          }}
        />

        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: { color: devTheme.palette.primary.main },
          }}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            style: { color: devTheme.palette.primary.main },
          }}
        />
      </div>
      <div className="flex items-center mt-4 flex-col sm:flex-row  content-end justify-end gap-2 sm:gap-0">
        <Button
          variant="contained"
          color="success"
          className="w-full sm:w-auto"
          onClick={() => {
            handleSubmit();
          }}
        >
          SEND EMAIL
        </Button>
      </div>
    </main>
  );
};

export default Contact;
