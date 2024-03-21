import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import styled from "styled-components";
// import { BiCross } from "react-icons/bi";

function createData(
  name,
  s,
  m,
  l,
  xl,
  xxl
) {
  return { name, s, m, l, xl, xxl };
}

const rows = [
  createData("Chest", 20.5, 22, 22.5, 24, 25.5),
  createData("Length", 27.5, 28.5, 29.5, 30, 31.5),
  createData("Shoulder", 19, 20, 21, 22.5, 23.5),
  createData("Sleeve", 8.5, 9, 10, 10, 11),
];

// const Wrapper = styled.div`
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// backdrop-filter: blur(2px);
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// z-index: 999;
// `;

// const Div = styled.div`
// display: flex;
// justify-content: flex-end;
// width: 100%;
// `;

export default function DenseTable() {
  return (
    // <Wrapper>
    // <Div><BiCross/></Div>
    <TableContainer component={Paper} className="example" style={{ width: '80%',padding:"20px",borderRadius:"20px" ,marginTop:"20px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Size</TableCell>
            <TableCell align="right">S</TableCell>
            <TableCell align="right">M</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">XL</TableCell>
            <TableCell align="right">XXL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.s}</TableCell>
              <TableCell align="right">{row.m}</TableCell>
              <TableCell align="right">{row.l}</TableCell>
              <TableCell align="right">{row.xl}</TableCell>
              <TableCell align="right">{row.xxl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </Wrapper>
  );
}
