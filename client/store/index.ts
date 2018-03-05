import { NuxtContext } from 'nuxt';
import { ActionContext, ActionTree, MutationTree } from 'vuex';

import { SET_IP } from '../util/mutation-types';

/**
 * Root State
 */
export const state = (): State => ({
  ip: null
});

export interface State {
  ip: string | null;
}

export interface RootState extends State {}

/**
 * Root Mutations
 */
export const mutations: MutationTree<State> = {
  [SET_IP](state, payload) {
    state.ip = payload;
  }
};

/**
 * Root Actions
 */
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

export interface RootActionTree<S, R> extends ActionTree<S, R> {
  nuxtServerInit(
    context: ActionContext<S, R>,
    NuxtContext: NuxtContext
  ): Promise<void>;
}
