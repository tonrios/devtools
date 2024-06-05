import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import devTheme from "../../../core/theme";
import { readData, saveData } from "../../../database/firebase";
import { generateId } from "../../../helpers";
import TypingAnimation from "../../components/typingAnimation";

export const NotePadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notes, setNotes] = useState("");
  console.log(id);

  useEffect(() => {
    if (!id) {
      const rota = generateId(6);
      navigate("/notepad/" + rota);
    } else {
      loadData();
    }
  }, [id]);

  useEffect(() => {
    if (notes) {
      saveData("devtools/notepad/" + id + "/data", {
        notes: notes,
      });
    }
  }, [notes]);

  const loadData = async () => {
    const { notes } = (await readData("devtools/notepad/" + id + "/data")) ?? "";
    if (notes) {
      setNotes(notes);
    }
  };

  function copy() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    enqueueSnackbar("copied !", { variant: "success" });
  }

  return (
    <main className="flex-grow m-auto flex flex-col justify-center sm:w-full md:w-[1024px] px-8 sm:px-0">
      <Typography variant="h4" component="h2" style={{ textAlign: "center", color: devTheme.palette.secondary.main, marginBottom: 36 }}>
        <TypingAnimation text=">_ NOTEPAD" speed={80} />
      </Typography>

      <div className="py-10 sm:py-0">
        <TextField
          fullWidth
          label={<TypingAnimation text="type your notes" speed={80} />}
          multiline
          rows={15}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          InputProps={{
            style: { color: devTheme.palette.primary.main },
            startAdornment: (
              <InputAdornment position="start" className="animate-pulse" style={{ alignSelf: "flex-start", marginTop: 10 }}>
                {">_"}
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex items-center mt-4 flex-col sm:flex-row  justify-center gap-2 sm:gap-0">
        <Button variant="contained" color="success" className="w-full sm:w-auto" onClick={() => copy()}>
          COPY URL TO SHARE
        </Button>
      </div>
    </main>
  );
};
