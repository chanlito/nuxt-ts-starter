import { NuxtContext } from 'nuxt';
import { ActionContext, ActionTree, MutationTree } from 'vuex';

export const state = (): State => ({
  ip: null
});

export const mutations: MutationTree<State> = {
  setIp(state, payload) {
    state.ip = payload;
  }
};

export const actions: RootActionTree<State, RootState> = {
  async nuxtServerInit(
    { commit }: ActionContext<State, RootState>,
    { app, req }: NuxtContext
  ) {
    try {
      const ip = await app.$axios.$get('http://icanhazip.com');
      commit('setIp', ip);
    } catch (e) {
      console.error('Could not get IP.', e.message);
    }
  }
};

export interface State {
  ip: string | null;
}

export type RootState = State;

export interface RootActionTree<S, R> extends ActionTree<S, R> {
  nuxtServerInit(
    context: ActionContext<S, R>,
    NuxtContext: NuxtContext
  ): Promise<void>;
}
