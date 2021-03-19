import CHANGE_INPUT_FIELD from './actionsTypes';

export type languageType = {
  lan: string,
  val: string,
}

export type stateType = {
  input: string,
}

export type changeInputFieldAT = {
  type: typeof CHANGE_INPUT_FIELD,
  str: string,
}
