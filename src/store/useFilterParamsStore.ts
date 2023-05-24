import { create } from 'zustand'

export interface Params {
  page: number
  count: number
  catalogues: string
  keyword: string
  payment_to: number | ''
  payment_from: number | ''
  no_agreement: number
  published: number
}

interface ParamsState {
  params: Params
  setPage: (page: number) => void
  setCount: (count: number) => void
  setCatalogues: (catalogues: string) => void
  setKeyword: (keyword: string) => void
  setPaymentFrom: (paymentFrom: number | '') => void
  setPaymentTo: (paymentTo: number | '') => void
  setNoAgreement: (noAgreement: number) => void
}

export const initialState: Params = {
  page: 1,
  count: 4,
  catalogues: '',
  keyword: '',
  payment_to: '',
  payment_from: '',
  no_agreement: 1,
  published: 1,
}

export const useFilterParamsStore = create<ParamsState>((set) => ({
  params: initialState,
  setPage: (page) =>
    set((state) => ({
      params: {
        ...state.params,
        page,
      },
    })),
  setCount: (count) =>
    set((state) => ({
      params: {
        ...state.params,
        count,
      },
    })),
  setCatalogues: (catalogues) =>
    set((state) => ({
      params: {
        ...state.params,
        catalogues,
      },
    })),
  setKeyword: (keyword) =>
    set((state) => ({
      params: {
        ...state.params,
        keyword,
      },
    })),
  setPaymentFrom: (paymentFrom) =>
    set((state) => ({
      params: {
        ...state.params,
        payment_from: paymentFrom,
      },
    })),
  setPaymentTo: (paymentTo) =>
    set((state) => ({
      params: {
        ...state.params,
        payment_to: paymentTo,
      },
    })),
  setNoAgreement: (noAgreement) =>
    set((state) => ({
      params: {
        ...state.params,
        no_agreement: noAgreement,
      },
    })),
  clearState: () =>
    set((state) => ({
      params: { ...state.params, ...initialState },
    })),
}))
