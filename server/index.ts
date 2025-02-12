// src/index.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import gameRoutes from './src/route/gameRoutes';
import { setUpGameSocket } from './src/sockets/gameSocket';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Middleware
app.use(express.json());

// Routes
app.use('/api', gameRoutes);

// Socket.IO
setUpGameSocket(io);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));