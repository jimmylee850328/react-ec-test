import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          歡迎來到購物商城
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          探索我們精選的商品
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/products"
          sx={{ mt: 4 }}
        >
          開始購物
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 