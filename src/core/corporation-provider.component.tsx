import React from 'react';

interface CorporationContext {
  corporation: string;
  setCorporation: (value: string) => void;
}

const defaultValue: string = 'lemoncode';

export const CorporationContext = React.createContext<CorporationContext>({
  corporation: '',
  setCorporation: (value) => console.log('missing context provider'),
});

export const CorporationProvider: React.FC = (props) => {
  const [corporation, setCorporation] = React.useState(defaultValue);

  return (
    <CorporationContext.Provider
      value={{
        corporation,
        setCorporation,
      }}
    >
      {props.children}
    </CorporationContext.Provider>
  );
};
