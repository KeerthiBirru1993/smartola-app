import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

import "./Filters.css";

const Filters = () => {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState(false);

  const handleClick = () => {
    setScenarios(true);
  };

  const handleNavigateOverviewHighRisk = () => {
    navigate("/overviewhighrisk");
  };

  const handleNavigateIrregularPO = () => {
    navigate("/irregularpo");
  };

  return (
    <div>
      <Typography fontSize={28} color="#415A6C" marginLeft="3px" p={1}>
        Filters
      </Typography>
      <Grid container mt={-2}>
        <Grid
          container
          spacing={3}
          item
          xs={12}
          sx={{
            boxShadow: 3,
            height: "6rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            // p: 1,
            m: 1,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }} ml={2}>
              <FormControl fullWidth>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  // sx={{ marginLeft:"30px" }}
                >
                  <Typography fontSize={22} mt={-1}>
                    Customer
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Customer",
                    id: "uncontrolled-native",
                  }}
                  style={{ backgroundColor: "", marginBottom: "20px" }}
                >
                  <option value="Amazon">Amazon</option>
                  <option value="Tesco">Tesco</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography fontSize={22} mt={-1}>
                    Location
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Country",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="United Kingdom">United Kingdom</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography fontSize={22} mt={-1}>
                    Brand
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="AirWick">AirWick</option>
                  <option value="Durex">Durex</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign="center" alignItems="center">
            <Box className="btn-filters">
              <Typography onClick={handleClick}>APPLY FILTERS </Typography>{" "}
              <PlayArrowIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {scenarios && (
        <Grid
          container
          p={1}
          spacing={1}
          mt={{ lg: "1px" }}
          justifyContent="space-between"
        >
          <Grid item xs={3} onClick={handleNavigateOverviewHighRisk}>
            <Box className="btn-fltr">
              <Typography color="#fff"> Low Stock on hand (10)</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="btn-fltr" onClick={handleNavigateIrregularPO}>
              <Typography color="#fff"> Irregular PO (5)</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="btn-fltr">
              <Typography color="#fff"> OOS Scenario (20)</Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Filters;

<Box className="pln-cards-header">
  <Typography color="#fff"> Low Stock on hand (10)</Typography>
</Box>;
