import { useEffect, useState } from "react";

const GoogleTranslateWidget1 = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Start with null or empty state
  const [isOpen, setIsOpen] = useState(false);

  const languageOptions = [
    { code: "en", name: "English", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { code: "nl", name: "Dutch", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { code: "pt", name: "Portuguese", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    { code: "fr", name: "French", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
    { code: "de", name: "German", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
    { code: "es", name: "Spanish", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
    { code: "uk", name: "Ukrainian", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" }
  ];

  // Update selected language dynamically when selectedLang changes
  useEffect(() => {
    const lang = languageOptions.find((lang) => lang.code === selectedLang);
    setSelectedLanguage(lang || languageOptions[0]); // Fallback to the first language (English)
  }, [selectedLang]);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            includedLanguages: "en,nl,pt,fr,de,es,uk", // English and Portuguese only
          },
          "google_translate_element"
        );

        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox) {
          selectBox.addEventListener("change", (event) => {
            setSelectedLang(event.target.value);
          });
        }
      };
      addGoogleTranslateScript();
    }
  }, []);

  useEffect(() => {
    const selectBox = document.querySelector(".goog-te-combo");
    if (selectBox && selectBox.value !== selectedLang) {
      selectBox.value = selectedLang;
      selectBox.dispatchEvent(new Event("change"));
    }
  }, [selectedLang]);

  const handleSelect = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    console.log();
    
  };

  return (
    <div className="d-flex align-items-center">
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="custom-language-selector me-3">
        <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-option">
            {selectedLanguage && (
              <>
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  style={{ width: "20px", height: "15px", marginRight: "8px" }}
                />
                {/* {selectedLanguage.name} */}
              </>
            )}
          </div>

          {isOpen && (
            <div className="dropdown-options">
              {languageOptions.map((lang) => (
                <div
                  key={lang.code}
                  className="dropdown-option"
                  onClick={() => handleSelect(lang.code)}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    style={{ width: "20px", height: "15px", marginRight: "8px" }}
                  />
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleTranslateWidget1;