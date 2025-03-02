import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Box,
} from '@mui/material';

const products = [
  {
    id: 1,
    name: '精品咖啡',
    price: 299,
    image: 'https://source.unsplash.com/400x300/?coffee',
    description: '來自世界各地的精選咖啡豆',
    longDescription: '這款精品咖啡豆經過嚴格挑選，具有獨特的香氣和口感。每一顆咖啡豆都經過專業烘焙師的精心烘焙，確保最佳風味。',
  },
  {
    id: 2,
    name: '智能手錶',
    price: 3999,
    image: 'https://source.unsplash.com/400x300/?smartwatch',
    description: '具備多種運動模式和健康監測功能',
    longDescription: '這款智能手錶配備先進的健康監測功能，包括心率監測、睡眠追蹤和運動記錄。防水設計讓您可以在各種場合使用。',
  },
  {
    id: 3,
    name: '無線耳機',
    price: 2499,
    image: 'https://source.unsplash.com/400x300/?headphones',
    description: '高音質、降噪功能的優質耳機',
    longDescription: '採用最新藍牙技術，提供穩定連接和高品質音效。主動降噪功能可以有效隔絕外界噪音，讓您沉浸在音樂世界中。',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <Typography variant="h5" sx={{ mt: 4 }}>
          商品不存在
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            NT$ {product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.longDescription}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" size="large">
              加入購物車
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 