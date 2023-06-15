import './styles.css';
import FlatPicker from 'react-flatpickr';
import flatPickerLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import 'flatpickr/dist/themes/material_green.css';

flatPickerLib.localize(Portuguese);

const Filter = () => {
  const onchangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onchangeDate}
        placeholder="Selecione um periodo"
      />
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
};

export default Filter;
