import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./DataTable.css";

import { useNavigate } from "react-router-dom";
// import MyBreadcrumbs from "./MyBreadcrumbs";

const DataTable = ({ onData }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "60",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "Yes",
    },
    {
      skuname: "Airwick Electrical Lavende",
      skucode: "23434534693dlf1",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "70",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Aersol Floral",
      skucode: "23434534693dlf2",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Aersol Lemon",
      skucode: "23434534693dlf3",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Candles White Melon",
      skucode: "23434534693dlf4",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Candles White Orange",
      skucode: "23434534693dlf5",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Mist Diffuser Calming Rose",
      skucode: "23434534693dlg1",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Mist Diffuser Relaxing Lavender",
      skucode: "23434534693dlg2",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Fabric Refresher Fresh Sea Air",
      skucode: "23434534693dlg3",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Fabric Refresher Garden After Rain",
      skucode: "23434534693dlg4",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg5",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg6",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "6",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg7",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "4",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg8",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "7",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowsData, setselectedRowsData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = (property) => {
    let direction = "asc";
    if (sortConfig.key === property && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[property] < b[property]) return direction === "asc" ? -1 : 1;
      if (a[property] > b[property]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key: property, direction });
  };
  // var selectedRowsData = [];
  const handleCheckboxChange = (event, skucode) => {
    if (skucode === "selectAll") {
      const checked = event.target.checked;
      const updatedData = data.map((item) => ({
        ...item,
        checkbox: checked,
      }));
      setData(updatedData);
      setSelectAll(checked);

      // setselectedRowsData((prevDataArray) => [...prevDataArray, data]);
      // selectedRowsData.push(data);
      onData(data);
    } else {
      const updatedData = data.map((item) => {
        if (item.skucode === skucode) {
          setselectedRowsData((prevDataArray) => [...prevDataArray, item]);
          selectedRowsData.push(item);
          onData(selectedRowsData);
          return { ...item, checkbox: event.target.checked };
        }
        return item;
      });
      setData(updatedData);
      setSelectAll(updatedData.every((item) => item.checkbox));
    }
  };

  const getSortSymbol = (property) => {
    if (sortConfig.key === property) {
      if (sortConfig.direction === "asc") {
        return <ArrowDropUpIcon fontSize="small" />;
      } else {
        return <ArrowDropDownIcon fontSize="small" />;
      }
    }
    return null;
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Box display="flex" fontSize={14} mx="1px">
        <Box mt="1px">
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "30px 30px ",
              border: "#fff",
              marginTop: "-6px",
              height: "24px",
              // width: "27px",
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                height: "12px",
                width: "12px",
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "#FF007E",
                color: "#fff",
              }}
            />
            &#160;
            <Typography fontSize={12} onClick={handleBack}>
              Back
            </Typography>
          </Button>
        </Box>{" "}
        &#160;&#160;&#160;&#160;&#160;&#160;
        <Typography fontSize={14}>OOS Risk Dectection</Typography>
        <Typography>
          <ChevronRightIcon sx={{ height: "20px" }} />
        </Typography>
        <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
      </Box>
      <Typography p={1} fontSize="26px">
        Overview High-Risk SKUs
      </Typography>
      <TableContainer
        style={{ maxHeight: 730, width: "100%" }}
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                className="datatable-head"
                sx={{
                  backgroundColor: "#E5EBEF",
                  marginLeft: "5px",
                  // border: "1px solid red",
                  // width: "20px",
                }}
              >
                <Box className="bdr-ckeck">
                  <Checkbox
                    className="datatable-checkbox"
                    checked={selectAll}
                    onChange={(event) =>
                      handleCheckboxChange(event, "selectAll")
                    }
                  />
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#E5EBEF",
                  // cursor: "pointer",
                }}
                onClick={() => handleSort("skuname")}
                style={{
                  // cursor: "pointer",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box
                  className="bdr-sku"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                    marginLeft: "-20px",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography fontSize={14} mt="12px" mx="-6px">
                      SKU
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-skucode"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography fontSize={14} mt="12px" mx="-6px">
                      SKU Code
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell
                onClick={() => handleSort("")}
                sx={{ textAlign: "center", backgroundColor: "#E5EBEF" }}
              >
                <Box className="bdr-timeframe">
                  <Typography
                    lineHeight="16px"
                    sx={{ fontSize: "14px", color: "#415A6C" }}
                  >
                    TimeFrame <br />
                    (weeks)
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("servicelevel")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-netrevenue"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                  }}
                >
                  <Box mx="-7px">
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center" mt="14px" mx="2px">
                    <Typography fontSize={14} lineHeight="16px">
                      Net Revenue
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("servicelevel")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-expectedola"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // marginLeft: "-25px",
                    width: "85px",
                  }}
                >
                  <Box mx="-7px">
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center" mt="3px" mx="-10px">
                    <Typography fontSize={14} lineHeight="16px" mt="3px">
                      Expected OLA
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("servicelevel")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-servicelevel"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // marginLeft: "-25px",
                    width: "65px",
                  }}
                >
                  <Box mx="-5px">
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center" mt="3px" mx="-10px">
                    <Typography fontSize={14} lineHeight="16px" mt="3px">
                      Service Level{" "}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      width: "",
                      textAlign: "center",
                      width: "80px",
                      marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    Expected NetRevenue
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("bestseller")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-bestseller"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // marginLeft: "-20px",
                    width: "46px",
                  }}
                >
                  <Box sx={{ marginRight: "" }}>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center" mt="1px" mx="-6px">
                    <Typography lineHeight="16px" mt="6px" fontSize={14}>
                      Best Seller
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("risk")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-risk"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "80px",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography mt="6px" sx={{ fontSize: "14px" }}>
                      Risk
                      <InfoOutlinedIcon sx={{ height: "15px", color: "red" }} />
                      <Typography ml="-15px" mt="-4px">
                        {" "}
                        (1-10)
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row" : ""}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>
                  <Checkbox
                    checked={item.checkbox}
                    onChange={(event) =>
                      handleCheckboxChange(event, item.skucode)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      //   border: "1px solid",
                      width: "146px",
                      marginLeft: "-25px",
                      fontSize: "13px",
                    }}
                  >
                    {item.skuname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography ml="-8px" fontSize="13px">
                    {item.skucode}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "13px" }}>
                  {item.timeframe}
                </TableCell>
                <TableCell>
                  <Typography mx="7px" fontSize="13px">
                    {item.netrevenue}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    mx="10px"
                    sx={{
                      color: "#F08C2A",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {item.expectedola}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography mx="6px" fontSize="13px">
                    {item.servicelevel}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: "red", fontSize: "13px" }}>
                  {item.expectednetrevenue}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography mx="9px" fontSize="13px">
                    {" "}
                    {item.bestseller}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", color: "red", fontSize: "13px" }}
                >
                  {item.risk}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
