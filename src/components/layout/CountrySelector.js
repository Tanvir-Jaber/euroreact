import React, { useState } from "react";
// import "./styles.css";
import ReactFlagsSelect from "react-flags-select";
// import "./flags.css";
import "./../../assets/css/flag.css";

export default function CountrySelector() {
  const [select, setSelect] = useState("US");
  const onSelect = (code) => setSelect(code);
  // console.log("SELECT", select);
  return (
    // <div className="App">
      

      <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={["US", "GB", "FR","DE","IT"]}
        customLabels={{"US": "English","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}

        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
      />

     
    // </div>
  );
}
