import { ILang, IShow } from "./types";
import { useTranslation } from "react-i18next";

function Shows(): IShow {
  const { t } = useTranslation();
  return {
    showAll: t("showAll"),
    onlyDone: t("onlyDone"),
    onlyNotDone: t("onlyNotDone"),
  };
}

function Langs(): ILang {
  return {
    en: "EN",
    ru: "RU",
  };
}

export { Shows, Langs };
