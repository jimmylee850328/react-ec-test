import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';

const Cart = () => {
  // 這裡應該使用狀態管理來處理購物車數據
  const cartItems = [
    {
      id: 1,
      name: '精品咖啡',
      price: 299,
      quantity: 2,
    },
    {
      id: 2,
      name: '智能手錶',
      price: 3999,
      quantity: 1,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        購物車
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">購物車是空的</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>商品名稱</TableCell>
                  <TableCell align="right">單價</TableCell>
                  <TableCell align="right">數量</TableCell>
                  <TableCell align="right">小計</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">NT$ {item.price}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">
                      NT$ {item.price * item.quantity}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography variant="h6">總計</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">NT$ {total}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Button variant="contained" color="primary" size="large">
              結帳
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart; 