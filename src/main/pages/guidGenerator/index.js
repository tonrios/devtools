import { Box, Button, Checkbox, FormControlLabel, FormGroup, InputAdornment, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { v4 } from "uuid";
import devTheme from "../../../core/theme";
import TypingAnimation from "../../components/typingAnimation";

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
    <main className="flex-grow m-auto flex flex-col justify-between sm:w-full md:w-[800px] px-8 sm:px-0">
      <Typography variant="h4" component="h2" style={{ textAlign: "center", color: devTheme.palette.secondary.main }}>
        <TypingAnimation text=">_ GUID GENERATOR" speed={80} />
      </Typography>

      <div className="py-10 sm:py-0">
        <TextField
          label={<TypingAnimation text="How many GUIDs do you want?" speed={50} />}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: 1, max: 3000 }}
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          helperText="(1-3000)"
          FormHelperTextProps={{ style: { textAlign: "right", color: devTheme.palette.primary.main } }}
          InputProps={{
            style: { color: devTheme.palette.secondary.main },
            startAdornment: (
              <InputAdornment position="start" className="animate-pulse">
                {">_"}
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
          <FormGroup className="my-0 m-8 sm:my-6" component="fieldset" variant="standard">
            <FormControlLabel control={<Checkbox defaultChecked value={ckUpper} onChange={(e) => setCkUpper(e.target.checked)} style={{ padding: 4 }} />} label="uppercase" />
            <FormControlLabel control={<Checkbox value={ckBraces} onChange={(e) => setCkBraces(e.target.checked)} style={{ padding: 4 }} />} label="braces {}" />
            <FormControlLabel control={<Checkbox defaultChecked value={ckHyphens} onChange={(e) => setCkHyphens(e.target.checked)} style={{ padding: 4 }} />} label="hyphens -" />
            <FormControlLabel control={<Checkbox value={ckQuotes} onChange={(e) => setCkQuotes(e.target.checked)} style={{ padding: 4 }} />} label='quotes "" ' />
          </FormGroup>

          <FormGroup className="mt-0 m-8 sm:mt-8" component="fieldset" variant="standard">
            <FormControlLabel control={<Checkbox value={ckCommas} onChange={(e) => setCkCommas(e.target.checked)} style={{ padding: 4 }} />} label="commas ," />
            <FormControlLabel control={<Checkbox value={ckBase64} onChange={(e) => setCkBase64(e.target.checked)} style={{ padding: 4 }} />} label="base64 enconded" />
            <FormControlLabel
              control={<Checkbox defaultChecked value={ckbreakLine} onChange={(e) => setCkBreakLine(e.target.checked)} style={{ padding: 4 }} />}
              label="break line"
            />
            <FormControlLabel
              control={<Checkbox value={ckSingleQuotes} onChange={(e) => setCkSingleQuotes(e.target.checked)} style={{ padding: 4 }} />}
              label="single quotes '' "
            />
          </FormGroup>
        </Box>

        <TextField
          fullWidth
          label={<TypingAnimation text="Console" speed={120} />}
          multiline
          rows={10}
          value={result}
          onChange={(e) => setResult(e.target.value)}
          InputProps={{
            style: { color: devTheme.palette.primary.main },
            startAdornment: (
              <InputAdornment position="start" className="animate-pulse" style={{ alignSelf: "flex-start", marginTop: 10 }}>
                {">_"}
              </InputAdornment>
            ),
          }}
          onFocus={() => {
            handeFocus();
          }}
        />
      </div>
      <div className="flex items-center mt-4 flex-col sm:flex-row  justify-between gap-2 sm:gap-0">
        <Button
          variant="contained"
          color="secondary"
          className="w-full sm:w-auto"
          onClick={() => {
            setResult("");
          }}
        >
          CLEAR CONSOLE
        </Button>
        <Button variant="contained" color="success" className="w-full sm:w-auto" onClick={() => generateGuid()}>
          GENERATE SOME GUIDs
        </Button>
      </div>
    </main>
  );
};

export default GuidGeneratorPage;
