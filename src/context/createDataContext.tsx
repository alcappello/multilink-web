import React, { Dispatch, Reducer, useReducer } from 'react';
import { State as LinksState } from './LinksContext';

export interface Action {
  type: string;
  payload: any;
}

type State = LinksState;

interface Actions {
  [key: string]: Action;
}

interface DataContext {
  Context: React.Context<ContextValue<State>>;
  Provider: (props: ProviderProps<State>) => JSX.Element;
}

interface ProviderProps<State> {
  children: JSX.Element;
  injectedState?: State;
}

type BoundActions<T> = {
  [K in keyof T]: T[K] extends (d: Dispatch<Action>) => infer R ? R : any;
};

type ContextValue<State> = {
  state: State;
} & BoundActions<Actions>;

export const createDataContext = (reducer: Reducer<State, Action>, actions: BoundActions<Actions>, defaultState: State): DataContext => {
  const Context = React.createContext({ state: defaultState } as ContextValue<State>);
  const Provider = ({ children, injectedState }: ProviderProps<State>) => {
    const initialState = injectedState || defaultState;

    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {} as BoundActions<Actions>;
    const actionKeys = Object.keys(actions);
    actionKeys.forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
