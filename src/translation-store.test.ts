import i18next from "i18next";
import { I18NextTranslationStore } from "./translation-store";

describe("Translation store", () => {
  describe("I18NextTranslationStore", () => {
    it("should update the writable on init event", () => {
      // Arrange
      const i18nInstance = i18next.createInstance();

      const store = new I18NextTranslationStore(i18nInstance);
      const initialiseMock = jest.fn();
      store.i18n.subscribe(initialiseMock);

      // Act
      i18nInstance.init();

      // Assert
      expect(initialiseMock).toBeCalled();
    });

    it("should update the writable on languageChanged event", () => {
      // Arrange
      const i18nInstance = i18next.createInstance();
      i18nInstance.init();

      const store = new I18NextTranslationStore(i18nInstance);
      const changeLanguageMock = jest.fn();
      store.i18n.subscribe(changeLanguageMock);

      // Act
      i18nInstance.changeLanguage("en");

      // Assert
      expect(changeLanguageMock).toBeCalled();
      expect(changeLanguageMock).toBeCalledWith(
        expect.objectContaining({ language: "en" })
      );
    });

    it("should update the writable on namespace resource added", () => {
      // Arrange
      const i18nInstance = i18next.createInstance();
      i18nInstance.init();

      const store = new I18NextTranslationStore(i18nInstance);
      const addNamespaceMock = jest.fn();
      store.i18n.subscribe(addNamespaceMock);

      // Act
      i18nInstance.loadNamespaces(["test"]);

      // Assert
      expect(addNamespaceMock).toBeCalled();
      expect(addNamespaceMock).toBeCalledWith(
        expect.objectContaining({
          options: expect.objectContaining({
            ns: expect.arrayContaining(["test"]),
          }),
        })
      );
    });
  });
});
