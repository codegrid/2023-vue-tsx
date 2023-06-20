import { CheckboxItem } from './components/CheckboxItemTsx/index';
import { Expander } from './components/Expander';
import { ExpanderVShow } from './components/ExpanderVShow';
import { ListItems } from './components/ListItems';

const listItems = ['item1', 'item2', 'item3'];

export default () => {
  return (
    <>
      <h1>.tsx based</h1>
      <Expander />
      <ListItems listItems={listItems} />
      <CheckboxItem />
      <ExpanderVShow />
    </>
  );
};
