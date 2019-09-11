import * as React from 'react';

const context = React.createContext<any>(null);

export const ContextProvider = context.Provider;
  
export const ContextConsumer = context.Consumer;