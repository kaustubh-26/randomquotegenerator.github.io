import { createSlice } from '@reduxjs/toolkit';
import quotesFile from '../../data/quotes.json';
import colorsFile from '../../data/colors.json';

const initialState = {
  quotes: quotesFile,
  colors: colorsFile,
  quote: {},
  color: '',
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    getQuote: (state) => {
      const number = Math.floor(Math.random() * initialState.quotes.length);
      const color = Math.floor(Math.random() * initialState.colors.length);
      state.quote = state.quotes[number];
      state.color = state.colors[color];
    },
  },
});

export const { getQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
