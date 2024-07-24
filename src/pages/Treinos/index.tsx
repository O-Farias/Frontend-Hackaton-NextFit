import * as React from "react";
import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[6],
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CardActionsCentered = styled(CardActions)({
  display: "flex",
  justifyContent: "center",
});

const PageTreinos = () => {
  const [treinos, setTreinos] = useState([
    {
      id: 1,
      nome: "Treino A",
      descricao: "Descrição do Treino A",
      duracao: "30 min",
      nivel: "Iniciante",
    },
    {
      id: 2,
      nome: "Treino B",
      descricao: "Descrição do Treino B",
      duracao: "45 min",
      nivel: "Intermediário",
    },
    {
      id: 3,
      nome: "Treino C",
      descricao: "Descrição do Treino C",
      duracao: "60 min",
      nivel: "Avançado",
    },
  ]);

  const [selectedTreino, setSelectedTreino] = useState(null);

  const handleTreinoClick = (treino: {
    id: number;
    nome: string;
    descricao: string;
    duracao: string;
    nivel: string;
  }) => {
    setSelectedTreino(treino);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Treinos
        </Typography>
        <Typography variant="subtitle1">
          Bem-vindo à página de treinos!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {treinos.map((treino) => (
          <Grid item xs={12} sm={6} md={4} key={treino.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  {treino.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {treino.duracao} - {treino.nivel}
                </Typography>
              </CardContent>
              <CardActionsCentered>
                <StyledButton
                  size="small"
                  onClick={() => handleTreinoClick(treino)}
                >
                  Ver Detalhes
                </StyledButton>
              </CardActionsCentered>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      {selectedTreino && (
        <StyledCard sx={{ marginTop: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {selectedTreino.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {selectedTreino.descricao}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duração: {selectedTreino.duracao}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nível: {selectedTreino.nivel}
            </Typography>
          </CardContent>
        </StyledCard>
      )}
    </Container>
  );
};

export default PageTreinos;
