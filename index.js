const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = require('./bd'); 

// CRUD RESTAURANTE 
app.post('/api/restaurantes', (req, res) => {
  const data = req.body;
  res.json({ message: 'Restaurante creado', data });
});

app.get('/api/restaurantes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurante');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener restaurantes:', error.message);
    res.status(500).json({ error: 'Error al obtener restaurantes' });
  }
});

app.get('/api/restaurantes/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM restaurante WHERE id_restaurante = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Restaurante no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener restaurante:', error.message);
    res.status(500).json({ error: 'Error al obtener restaurante' });
  }
});

app.put('/api/restaurantes/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `Restaurante ${id} actualizado`, data });
});
app.delete('/api/restaurantes/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Restaurante ${id} eliminado` });
});

//  CRUD EMPLEADO 
app.post('/api/empleados', (req, res) => {
  const data = req.body;
  res.json({ message: 'Empleado creado', data });
});

app.get('/api/empleados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empleado');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener empleados:', error.message);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

app.get('/api/empleados/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM empleado WHERE id_empleado = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener empleado:', error.message);
    res.status(500).json({ error: 'Error al obtener empleado' });
  }
});

app.put('/api/empleados/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `Empleado ${id} actualizado`, data });
});

app.delete('/api/empleados/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Empleado ${id} eliminado` });
});

// CRUD PRODUCTO 
app.post('/api/productos', (req, res) => {
  const data = req.body;
  res.json({ message: 'Producto creado', data });
});

app.get('/api/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM producto');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.get('/api/productos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM producto WHERE id_producto = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener producto:', error.message);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

app.put('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `Producto ${id} actualizado`, data });
});

app.delete('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Producto ${id} eliminado` });
});

//  CRUD PEDIDO 
app.post('/api/pedidos', (req, res) => {
  const data = req.body;
  res.json({ message: 'Pedido creado', data });
});

app.get('/api/pedidos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pedido');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener pedidos:', error.message);
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

app.get('/api/pedidos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM pedido WHERE id_pedido = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener pedido:', error.message);
    res.status(500).json({ error: 'Error al obtener pedido' });
  }
});


app.put('/api/pedidos/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `Pedido ${id} actualizado`, data });
});

app.delete('/api/pedidos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Pedido ${id} eliminado` });
});

//  CRUD DETALLEPEDIDO 
app.post('/api/detallepedidos', (req, res) => {
  const data = req.body;
  res.json({ message: 'Detalle de pedido creado', data });
});

app.get('/api/detallepedidos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM detallepedido');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener detallepedidos:', error.message);
    res.status(500).json({ error: 'Error al obtener detallepedidos' });
  }
});

app.get('/api/detallepedidos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM detallepedido WHERE id_detalle = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'DetallePedido no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener detallepedido:', error.message);
    res.status(500).json({ error: 'Error al obtener detallepedido' });
  }
});

app.put('/api/detallepedidos/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `DetallePedido ${id} actualizado`, data });
});

app.delete('/api/detallepedidos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `DetallePedido ${id} eliminado` });
});

// CONSULTAS NATIVAS

// 1. Productos de un pedido específico
app.get('/consultas/productos-pedido/:id_pedido', async (req, res) => {
  const { id_pedido } = req.params;
  const result = await pool.query(`
    SELECT p.nombre, dp.cantidad, dp.subtotal
    FROM DetallePedido dp
    JOIN Producto p ON dp.id_prod = p.id_prod
    WHERE dp.id_pedido = $1
  `, [id_pedido]);
  res.json(result.rows);
});

// 2. Productos más vendidos
app.get('/consultas/productos-mas-vendidos/:cantidad_min', async (req, res) => {
  const { cantidad_min } = req.params;
  const result = await pool.query(`
    SELECT p.nombre, SUM(dp.cantidad) AS total_vendido
    FROM DetallePedido dp
    JOIN Producto p ON dp.id_prod = p.id_prod
    GROUP BY p.nombre
    HAVING SUM(dp.cantidad) > $1
  `, [cantidad_min]);
  res.json(result.rows);
});

// 3. Total de ventas por restaurante
app.get('/consultas/ventas-por-restaurante', async (req, res) => {
  const result = await pool.query(`
    SELECT r.nombre, SUM(p.total) AS total_ventas
    FROM Pedido p
    JOIN Restaurante r ON p.id_rest = r.id_rest
    GROUP BY r.nombre
  `);
  res.json(result.rows);
});

// 4. Pedidos por fecha
app.get('/consultas/pedidos-por-fecha/:fecha', async (req, res) => {
  const { fecha } = req.params;
  const result = await pool.query(`SELECT * FROM Pedido WHERE fecha = $1`, [fecha]);
  res.json(result.rows);
});

// 5. Empleados por rol en un restaurante
app.get('/consultas/empleados-por-rol/:id_rest/:rol', async (req, res) => {
  const { id_rest, rol } = req.params;
  const result = await pool.query(`
    SELECT nombre FROM Empleado
    WHERE id_rest = $1 AND rol = $2
  `, [id_rest, rol]);
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
