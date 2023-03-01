import { atom } from "recoil";

export const formDataState = atom({
  key: 'formDataState',
  default: {}
});

export const errorsState = atom({
  key: 'errorsState',
  default: {}
});

export const showState = atom({
  key: 'showState',
  default: false
});

export const serviceState = atom({
  key: 'serviceState',
  default: ""
});

export const isOpenTopState = atom({
  key: 'isOpenTopState',
  default: false
});