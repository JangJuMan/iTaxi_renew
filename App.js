import React from 'react';
import ListEntry from './pages/firstList';

export default function App() {
  return (
    <ListEntry
      time="13:20"
      seats='3'
      from="한동대학교"
      to="포항역"
      carrier="2" />
  );
}
