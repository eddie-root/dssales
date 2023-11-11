import './styles.css';
import React, { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../Utils/request';
import { FilterData, Gender, Sale, SalesResponse } from '../../Utils/types';
import { formatDate, formatPrice } from '../../Utils/formatters';

type Props = {
  filterData?: FilterData;
};

// const extraParams = {
//   page: 0,
//   size: 12,
//   sort: 'date, desc'
// };

const SalesTable = ({ filterData }: Props) => {
  const [sales, setSales] = useState<Sale[]>([]);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesResponse>('/sales', { params })
      .then((response) => {
        setSales(response.data.content);
      })
      .catch(() => {
        console.log('Error to fetch sales');
      });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Femenino',
      OTHER: 'Outros'
    };

    return textByGender[gender];
  };

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
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{formatDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
