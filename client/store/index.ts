import { NuxtContext } from 'nuxt';
import { ActionContext, ActionTree, MutationTree } from 'vuex';

import { SET_IP } from '../util/mutation-types';

export const state = (): State => ({
  ip: null
});

export const mutations: MutationTree<State> = {
  [SET_IP](state, payload) {
    state.ip = payload;
  }
};

export const actions: RootActionTree<State, RootState> = {
  async nuxtServerInit(
    { commit }: ActionContext<State, RootState>,
    { app }: NuxtContext
  ) {
    try {
      const ip = await app.$axios.$get('http://icanhazip.com');
      commit(SET_IP, ip);
    } catch (e) {
      console.error('Could not get IP.', e.message);
    }
  }
};

export type RootState = State;

export interface State {
  ip: string | null;
}

export interface RootActionTree<S, R> extends ActionTree<S, R> {
  nuxtServerInit(
    context: ActionContext<S, R>,
    NuxtContext: NuxtContext
  ): Promise<void>;
}
