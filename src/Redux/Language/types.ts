export type languageType = {
  lan: string,
  val: string
}

export type stateType = {
  selectedLanguage: languageType,
  languages: languageType[],
}
