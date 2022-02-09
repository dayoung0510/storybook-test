import Bar from './index';
import { red, lime } from '@mui/material/colors';

export default {
  title: 'atom/appBar',
  component: Bar,
  parameters: {
    themes: {
      default: 'lime',
      list: [
        { name: 'lime', class: ['theme-lime'], color: lime[400] },
        { name: 'red', class: ['theme-red'], color: red[300] },
      ],
    },
  },
};

export const AppBar = () => {
  return (
    <>
      <Bar color={lime[200]} />
      <Bar color={lime[400]} />
      <Bar color={red[300]} />
      <Bar color={red[500]} />
    </>
  );
};
