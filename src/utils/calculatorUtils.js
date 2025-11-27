export function calculateInvestment(startDeposit, year, expectedRate, investAmount) {
  const results = [];
  const P = Number(startDeposit);
  const PMT = Number(investAmount);
  const tYears = Number(year);
  const r = Number(expectedRate) / 100; // convert % → decimal
  const n = 12; // monthly compounding

  // --- Add first element for current year (year = 0) ---
  results.push({
    year: 0,
    totalBalance: Number(P.toFixed(2)), // initial deposit only
    investAmount: Number(P.toFixed(2)), // invested amount so far
  });

  // --- Compound for each year ---
  for (let t = 1; t <= tYears; t++) {
    // compound initial deposit
    const compoundPrincipal = P * Math.pow(1 + r / n, n * t);

    // compound monthly contributions
    const compoundContrib = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    const totalBalance = compoundPrincipal + compoundContrib;

    // total invested up to this year
    const totalInvested = P + PMT * 12 * t;

    results.push({
      year: t,
      totalBalance: Number(totalBalance.toFixed(2)),
      investAmount: Number(totalInvested.toFixed(2)),
    });
  }

  return results;
}

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
