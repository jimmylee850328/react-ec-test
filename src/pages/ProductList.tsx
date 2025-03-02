import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '精品咖啡',
    price: 299,
    image: 'https://source.unsplash.com/400x300/?coffee',
    description: '來自世界各地的精選咖啡豆',
  },
  {
    id: 2,
    name: '智能手錶',
    price: 3999,
    image: 'https://source.unsplash.com/400x300/?smartwatch',
    description: '具備多種運動模式和健康監測功能',
  },
  {
    id: 3,
    name: '無線耳機',
    price: 2499,
    image: 'https://source.unsplash.com/400x300/?headphones',
    description: '高音質、降噪功能的優質耳機',
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  NT$ {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  查看詳情
                </Button>
                <Button size="small" color="primary">
                  加入購物車
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList; 