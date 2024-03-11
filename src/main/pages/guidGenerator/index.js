import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { v4 } from "uuid";

export default function GuidGenerator() {
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

  const genetateGuid = () => {
    if (quantity > 3000) {
      enqueueSnackbar("the maximum limit is 3000 guids per request !", { variant: "error" });
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

    setResult(arrayGuids.join(ckbreakLine ? "\n" : " "));
  };

  function handeFocus() {
    if (result) {
      navigator.clipboard.writeText(result);
      enqueueSnackbar("copied !", { variant: "success" });
    }
  }

  return (
    <main className="flex-grow w-[800px] m-auto flex flex-col justify-between">
      <Typography variant="h4" component="h2" style={{ textAlign: "center" }}>
        GUID GENERATOR
      </Typography>

      <TextField
        label="How many GUIDs do you want"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: 1, max: 3000 }}
        fullWidth
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        variant="standard"
        helperText="(1-3000)"
      />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormGroup className="ml-4" sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormControlLabel control={<Checkbox defaultChecked value={ckUpper} onChange={(e) => setCkUpper(e.target.checked)} style={{ padding: 4 }} />} label="uppercase" />
          <FormControlLabel control={<Checkbox value={ckBraces} onChange={(e) => setCkBraces(e.target.checked)} style={{ padding: 4 }} />} label="braces {}" />
          <FormControlLabel control={<Checkbox defaultChecked value={ckHyphens} onChange={(e) => setCkHyphens(e.target.checked)} style={{ padding: 4 }} />} label="hyphens -" />
          <FormControlLabel control={<Checkbox value={ckQuotes} onChange={(e) => setCkQuotes(e.target.checked)} style={{ padding: 4 }} />} label='quotes " " ' />
        </FormGroup>

        <FormGroup className="ml-4" sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormControlLabel control={<Checkbox value={ckCommas} onChange={(e) => setCkCommas(e.target.checked)} style={{ padding: 4 }} />} label="commas ," />
          <FormControlLabel control={<Checkbox value={ckBase64} onChange={(e) => setCkBase64(e.target.checked)} style={{ padding: 4 }} />} label="base64 enconded" />
          <FormControlLabel
            control={<Checkbox defaultChecked value={ckbreakLine} onChange={(e) => setCkBreakLine(e.target.checked)} style={{ padding: 4 }} />}
            label="break line"
          />
          <FormControlLabel control={<Checkbox value={ckSingleQuotes} onChange={(e) => setCkSingleQuotes(e.target.checked)} style={{ padding: 4 }} />} label="single quotes ' ' " />
        </FormGroup>
      </Box>

      <TextField
        fullWidth
        label="Result"
        multiline
        rows={10}
        value={result}
        onChange={(e) => setResult(e.target.value)}
        onFocus={() => {
          handeFocus();
        }}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" color="error" onClick={() => setResult("")}>
          CLEAR
        </Button>
        <Button variant="contained" color="success" onClick={() => genetateGuid()}>
          GENERATE
        </Button>
      </div>
    </main>
  );
}
