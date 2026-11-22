export function getCompanyOutlook(stats) {
  if (stats.revenue < 20) {
    return {
      title: "Financial Crisis",
      message: "Revenue is falling. The company is on the brink of bankruptcy.",
      severity: "critical"
    };
  }

  if (stats.revenue < 40) {
    return {
      title: "Financial Worries",
      message: "Revenue is falling. The company is struggling to maintain its operations.",
      severity: "warning"
    };
  }

  if (stats.investorTrust < 20) {
    return {
      title: "Investor Concerns",
      message: "Investors are losing confidence in the company's direction.",
      severity: "critical"
    };
  }

  if (stats.userSatisfaction < 20) {
    return {
      title: "Reputation Crisis",
      message: "User dissatisfaction is reaching critical levels.",
      severity: "critical"
    };
  }

  if (stats.userTraffic < 20) {
    return {
      title: "Declining Engagement",
      message: "The platform is losing its audience.",
      severity: "critical"
    };
  }

  return {
    title: "Stable Operations",
    message: "The company is maintaining steady performance across its departments.",
    severity: "normal"
  };
}