export interface SocketState {
  error: string;
  status: 'connected' | 'disconnected';
}

export const initialSocketState: SocketState = {
  error: '',
  status: 'disconnected'
};
