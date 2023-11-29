
import axios from 'axios';

export default class DataGridService{

    static async getDatagrid() {
      return await axios.get('/api/movimentacoes');
    }
  }

