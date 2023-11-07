import React from 'react';
import './styles.css';

const SalesTable = () => {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Femenino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlandia</td>
            <td>Credito</td>
            <td>R$ 540,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Femenino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlandia</td>
            <td>Credito</td>
            <td>R$ 540,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Femenino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlandia</td>
            <td>Credito</td>
            <td>R$ 540,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Femenino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlandia</td>
            <td>Credito</td>
            <td>R$ 540,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Femenino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlandia</td>
            <td>Credito</td>
            <td>R$ 540,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
