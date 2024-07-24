import * as React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
}));

const PageFinanceiro = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [resumo, setResumo] = useState({ receita: 0, despesa: 0, lucro: 0 });

  useEffect(() => {
    // Fetch data from API and update state
    // setTransacoes(fetchedTransacoes);
    // setResumo(calculatedResumo);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Financeiro
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Receita Total
              </Typography>
              <Typography variant="h4" color="primary">
                {resumo.receita}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Despesa Total
              </Typography>
              <Typography variant="h4" color="error">
                {resumo.despesa}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Lucro Líquido
              </Typography>
              <Typography variant="h4" color="success.main">
                {resumo.lucro}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Gráfico de Receitas e Despesas
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={transacoes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="receita" stroke="#8884d8" />
            <Line type="monotone" dataKey="despesa" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Transações
        </Typography>
        <DataGrid
          autoHeight
          rows={transacoes}
          columns={[
            { field: "data", headerName: "Data", width: 150 },
            { field: "descricao", headerName: "Descrição", width: 300 },
            { field: "valor", headerName: "Valor", width: 150 },
            { field: "categoria", headerName: "Categoria", width: 150 },
          ]}
          disableRowSelectionOnClick
        />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" color="primary">
            Adicionar Transação
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PageFinanceiro;
