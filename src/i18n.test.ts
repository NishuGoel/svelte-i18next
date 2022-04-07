const storeMock = jest.fn(() => ({ i18n: "i18nWritableInstance" }));
jest.mock("./translation-store", () => {
  return { I18NextTranslationStore: storeMock };
});

import { createI18nStore } from "./i18n";
import i18next from "i18next";

describe("i18n module", () => {
  describe("createI18nStore", () => {
    it("should create an instance of the translation class", () => {
      createI18nStore(i18next);
      expect(storeMock).toBeCalled();
    });

    it("should return Writable i18n instance", () => {
      const store = createI18nStore(i18next);
      expect(store).toEqual("i18nWritableInstance");
    });
  });
});