import { Button, InputAdornment, TextField } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import devTheme from "../../../core/theme";
import { readData, saveData } from "../../../database/firebase";
import { generateId } from "../../../helpers";
import TypingAnimation from "../../components/typingAnimation";
import { Window } from "../../components/window";

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
    <Window title={"notepad"}>
      <div className="flex flex-col h-full">
        <div className="my-4">
          <span style={{ color: devTheme.palette.secondary.main }}> {" $ "}</span> <TypingAnimation text="type your notes" speed={80} />
        </div>
        <div className="bg-gray-950 p-4 flex flex-1 rounded-lg">
          <TextField
            fullWidth
            multiline
            variant="standard"
            value={notes}
            rows={18}
            onChange={(e) => setNotes(e.target.value)}
            InputProps={{
              style: { color: devTheme.palette.secondary.main },
              startAdornment: (
                <InputAdornment position="start" style={{ alignSelf: "flex-start", marginTop: 10 }}>
                  <span style={{ color: devTheme.palette.secondary.main }}> {">_"}</span>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </div>
        <div className="flex items-center mt-3 mb-2 flex-col sm:flex-row  justify-between gap-2 sm:gap-0">
          <div>
            <p>
              <span style={{ color: devTheme.palette.secondary.main }}> {" ~ "}</span>
              {window.location.href}
            </p>
          </div>
          <Button variant="text" color="success" className="w-full sm:w-auto" onClick={() => copy()}>
            COPY URL TO SHARE
          </Button>
        </div>
      </div>
    </Window>
  );
};
