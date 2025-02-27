import { useEffect, useState, useRef } from "react";

const GoogleTranslateWidget = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const scriptLoaded = useRef(false);
  const selectBoxRef = useRef(null);
  const observerRef = useRef(null);
  const translateInstance = useRef(null);

  const languageOptions = [
    { code: "en", name: "English", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { code: "nl", name: "Dutch", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { code: "pt", name: "Portuguese", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    { code: "fr", name: "French", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
    { code: "de", name: "German", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
    { code: "es", name: "Spanish", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
    { code: "uk", name: "Ukrainian", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" }
  ];

  // Initialize Google Translate
  useEffect(() => {
    if (!scriptLoaded.current) {
      const addGoogleTranslateScript = () => {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = (error) => {
          console.error("Failed to load Google Translate script:", error);
        };
        document.body.appendChild(script);
      };

      window.googleTranslateElementInit = () => {
        try {
          translateInstance.current = new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,nl,pt,fr,de,es,uk",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            "google_translate_element"
          );

          // Set up MutationObserver
          observerRef.current = new MutationObserver(() => {
            const selectBox = document.querySelector(".goog-te-combo");
            if (selectBox && !selectBoxRef.current) {
              selectBoxRef.current = selectBox;
              selectBoxRef.current.value = selectedLang;
              
              const changeHandler = (event) => {
                setSelectedLang(event.target.value);
              };
              selectBoxRef.current.addEventListener("change", changeHandler);
            }
          });

          observerRef.current.observe(document.body, {
            childList: true,
            subtree: true
          });

        } catch (error) {
          console.error("Google Translate initialization error:", error);
        }
      };

      addGoogleTranslateScript();
      scriptLoaded.current = true;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Synchronize selected language
  useEffect(() => {
    const lang = languageOptions.find(lang => lang.code === selectedLang);
    setSelectedLanguage(lang || languageOptions[0]);

    if (translateInstance.current && window.google?.translate?.TranslateElement) {
      try {
        // Use Google's API to change language
        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox && selectBox.value !== selectedLang) {
          selectBox.value = selectedLang;
          selectBox.dispatchEvent(new Event("change"));
          
          // Trigger Google's translation
          const iframe = document.querySelector(".goog-te-menu-frame");
          if (iframe) {
            iframe.contentWindow.postMessage({
              command: "translate",
              langPair: `en|${selectedLang}`
            }, "*");
          }
        }
      } catch (error) {
        console.error("Error updating language:", error);
      }
    }
  }, [selectedLang]);

  const handleSelect = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
  };

  return (
    <div className="d-flex align-items-center">
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="custom-language-selector">
        <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-option">
            {selectedLanguage && (
              <>
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  style={{ width: "20px", height: "15px", marginRight: "8px" }}
                />
                {selectedLanguage.name}
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

export default GoogleTranslateWidget;