export  const calculateInvestment = (PV, PMT, r, n, frequency) => {
    const freqMap = {
      annual: 1,
      "semi-annual": 2,
      quarterly: 4,
      monthly: 12,
    };
    const f = freqMap[frequency] || 1;
    const results = [];

    for (let t = 0; t <= n; t++) {
      const totalBalance =
        PV * Math.pow(1 + r / f, f * t) +
        PMT * ((Math.pow(1 + r / f, f * t) - 1) / (r / f));

      const investAmount = PV + PMT * t;
      results.push({
        year: t,
        totalBalance,
        investAmount,
      });
    }
    return results;
  };

  export const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "12px",
      borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(59,130,246,0.2)" : "none",
      "&:hover": { borderColor: "#3b82f6" },
      padding: "9px 4px",
      fontSize: "14px",
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "14px",
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
        ? "#e0f2fe"
        : "white",
      color: state.isSelected ? "white" : "#111827",
      cursor: "pointer",
      "&:active": { backgroundColor: "#bfdbfe" },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "12px",
      marginTop: "4px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }),
    singleValue: (base) => ({
      ...base,
      fontWeight: "500",
      color: "#000",
      fontFamily: "Mardoto",
      fontSize: "18px",
      lineHeight: "26px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
    }),
  };



  