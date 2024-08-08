import { Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, InputAdornment, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { v4 } from "uuid";
import devTheme from "../../../core/theme";
import TypingAnimation from "../../components/typingAnimation";
import { Window } from "../../components/window";

const GuidGeneratorPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [quantity, setQuantity] = useState(1);
  const [ckUpper, setCkUpper] = useState(true);
  const [ckBraces, setCkBraces] = useState(false);
  const [ckHyphens, setCkHyphens] = useState(true);
  const [ckQuotes, setCkQuotes] = useState(false);
  const [ckSingleQuotes, setCkSingleQuotes] = useState(false);
  const [ckCommas, setCkCommas] = useState(false);
  const [ckBase64, setCkBase64] = useState(false);
  const [ckbreakLine, setCkBreakLine] = useState(true);
  const [result, setResult] = useState("");

  const generateGuid = () => {
    if (quantity > 3000) {
      enqueueSnackbar("The maximum limit size is 3000 GUIDs per request !", { variant: "error" });
      return false;
    }
    const arrayGuids = [];

    for (let i = 1; i <= quantity; i++) {
      let guid = v4();

      guid = ckUpper ? guid.toUpperCase() : guid;
      guid = ckBraces ? "{" + guid + "}" : guid;

      guid = !ckHyphens ? guid.replace(/-/g, "") : guid;
      guid = ckBase64 ? btoa(guid) : guid;
      guid = ckQuotes ? '"' + guid + '"' : guid;
      guid = ckSingleQuotes ? "'" + guid + "'" : guid;
      guid = ckCommas ? guid + "," : guid;
      arrayGuids.push(guid);
    }

    setResult(arrayGuids.join(ckbreakLine ? "\n" : ""));
  };

  function handeFocus() {
    if (result) {
      navigator.clipboard.writeText(result);
      enqueueSnackbar("copied !", { variant: "success" });
    }
  }

  return (
    <Window title={"guid generator"}>
      <div className="flex flex-col h-full">
        <div className="py-0 pb-2">
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
            <div
              style={{ width: 250, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
              className="my-0 m-auto"
              component="fieldset"
              variant="standard"
            >
              <div className="flex-1 mt-4">
                <TextField
                  label={<TypingAnimation text="How many GUIDs do you want?" speed={50} />}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{ min: 1, max: 3000 }}
                  fullWidth
                  value={quantity}
                  variant="standard"
                  onChange={(e) => setQuantity(e.target.value)}
                  sx={{
                    "& input[type=number]": {
                      "-moz-appearance": "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                  }}
                  FormHelperTextProps={{ style: { textAlign: "right", color: devTheme.palette.primary.main } }}
                  InputProps={{
                    disableUnderline: true,
                    style: { color: devTheme.palette.secondary.main, fontSize: 48, textAlign: "center" },
                    inputProps: {
                      style: { textAlign: "center" },
                    },
                    startAdornment: (
                      <InputAdornment position="start" className="animate-pulse">
                        {">_"}
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <IconButton
                  color="secondary"
                  onClick={() => {
                    const novo = parseInt(quantity) + 1;
                    setQuantity(novo);
                  }}
                >
                  <i className="material-icons text-green-600">add</i>
                </IconButton>

                <IconButton
                  color="secondary"
                  onClick={() => {
                    const novo = parseInt(quantity) - 1;

                    if (novo < 1) {
                      enqueueSnackbar("cannot set value less than zero !", { variant: "error" });
                    } else {
                      setQuantity(novo);
                    }
                  }}
                >
                  <i className="material-icons text-red-600">remove</i>
                </IconButton>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, alignItems: "flex-end" }}>
              <FormGroup className="my-0 m-8 sm:my-6" component="fieldset" variant="standard">
                <FormControlLabel control={<Checkbox defaultChecked value={ckUpper} onChange={(e) => setCkUpper(e.target.checked)} style={{ padding: 4 }} />} label="uppercase" />
                <FormControlLabel control={<Checkbox value={ckBraces} onChange={(e) => setCkBraces(e.target.checked)} style={{ padding: 4 }} />} label="braces {}" />
                <FormControlLabel control={<Checkbox value={ckQuotes} onChange={(e) => setCkQuotes(e.target.checked)} style={{ padding: 4 }} />} label='quotes "" ' />
              </FormGroup>

              <FormGroup className="my-0 m-8 sm:my-6" component="fieldset" variant="standard">
                <FormControlLabel control={<Checkbox value={ckCommas} onChange={(e) => setCkCommas(e.target.checked)} style={{ padding: 4 }} />} label="commas ," />
                <FormControlLabel
                  control={<Checkbox defaultChecked value={ckbreakLine} onChange={(e) => setCkBreakLine(e.target.checked)} style={{ padding: 4 }} />}
                  label="break line"
                />
                <FormControlLabel
                  control={<Checkbox value={ckSingleQuotes} onChange={(e) => setCkSingleQuotes(e.target.checked)} style={{ padding: 4 }} />}
                  label="single quotes '' "
                />
              </FormGroup>
              <FormGroup className="my-0 m-8 sm:my-6 mb-8" component="fieldset" variant="standard">
                <FormControlLabel
                  control={<Checkbox defaultChecked value={ckHyphens} onChange={(e) => setCkHyphens(e.target.checked)} style={{ padding: 4 }} />}
                  label="hyphens -"
                />
                <FormControlLabel control={<Checkbox value={ckBase64} onChange={(e) => setCkBase64(e.target.checked)} style={{ padding: 4 }} />} label="base64 enconded" />
              </FormGroup>
            </div>
          </Box>
        </div>
        <div className="bg-gray-950 p-4 flex flex-1 rounded-lg">
          <TextField
            fullWidth
            label={<TypingAnimation text="console" speed={120} />}
            multiline
            variant="standard"
            value={result}
            rows={14}
            onChange={(e) => setResult(e.target.value)}
            InputProps={{
              style: { color: devTheme.palette.primary.main },
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start" className="animate-pulse" style={{ alignSelf: "flex-start", marginTop: 10 }}>
                  {">_"}
                </InputAdornment>
              ),
            }}
            onClick={() => {
              handeFocus();
            }}
          />
        </div>

        <div className="flex items-center mt-3 mb-2 flex-col sm:flex-row  justify-between gap-2 sm:gap-0">
          <Button
            variant="text"
            color="secondary"
            className="w-full sm:w-auto"
            onClick={() => {
              setResult("");
            }}
          >
            CLEAR CONSOLE
          </Button>
          <Button variant="text" color="success" className="w-full sm:w-auto" onClick={() => generateGuid()}>
            GENERATE SOME GUIDs
          </Button>
        </div>
      </div>
    </Window>
  );
};

export default GuidGeneratorPage;
