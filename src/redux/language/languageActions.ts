export const CHANGE_LANGUAGE = "change_language"
export const ADD_LANGUAGE = "add_language"

interface changeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en"
}

interface addLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string, code: string }
}

export type LanguageActionTypes = changeLanguageAction | addLanguageAction

export const changeLanguageActionCreator = (languageCode: "zh" | "en"): changeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string): addLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}