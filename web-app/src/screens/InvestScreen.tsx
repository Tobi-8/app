import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useAppNavigation } from "../context/NavigationContext";
import { Ionicons } from "../components/Ionicons";
import { fonts, shadows } from "../theme";

export const InvestScreen = () => {
  const { c } = useTheme();
  const { goBack } = useAppNavigation();
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  const investOptions = [
    { icon: "bar-chart-outline", label: "Stocks & ETFs", desc: "Invest in global markets", tag: "Popular" },
    { icon: "logo-bitcoin", label: "Crypto Assets", desc: "Buy and hold digital assets", tag: "Volatile" },
    { icon: "leaf-outline", label: "Green Energy Funds", desc: "Sustainable & ESG portfolios", tag: "New Portfolio" },
  ];

  return (
    <div className="fade-in" style={{ maxWidth: "700px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
        <button onClick={goBack} style={{ padding: "8px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="chevron-back" size={24} color={c.foreground} />
        </button>
        <span style={{ fontSize: "22px", fontWeight: "800", color: c.foreground, fontFamily: fonts.display, letterSpacing: "-0.5px" }}>Whales Investment Platform</span>
      </div>

      <div style={{ fontSize: "12px", fontWeight: "700", color: c.mutedForeground, letterSpacing: "1.5px", marginBottom: "16px" }}>
        CHOOSE AN ASSET CLASS
      </div>

      {investOptions.map((opt) => (
        <div
          key={opt.label}
          onClick={() => setSelectedAsset(opt)}
          style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px 24px", borderRadius: "24px", backgroundColor: c.card, border: `1px solid ${c.border}50`, marginBottom: "16px", cursor: "pointer", boxShadow: shadows.card }}
          className="tx-item-hover"
        >
          <div style={{ width: "52px", height: "52px", borderRadius: "18px", backgroundColor: `${c.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Ionicons name={opt.icon} size={24} color={c.primary} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: c.foreground }}>{opt.label}</div>
            <div style={{ fontSize: "13px", color: c.mutedForeground }}>{opt.desc}</div>
          </div>
          <div style={{ padding: "8px 16px", borderRadius: "14px", backgroundColor: `${c.primary}12`, fontSize: "13px", fontWeight: "700", color: c.primary }}>
            {opt.tag}
          </div>
        </div>
      ))}

      {selectedAsset && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          backdropFilter: "blur(4px)"
        }}>
          <div className="fade-in-up" style={{
            backgroundColor: c.background,
            padding: "24px",
            borderRadius: "24px",
            width: "90%",
            maxWidth: "400px",
            boxShadow: shadows.large,
            border: `1px solid ${c.border}`
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "16px", backgroundColor: `${c.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={selectedAsset.icon} size={24} color={c.primary} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "18px", color: c.foreground }}>{selectedAsset.label}</h3>
                <p style={{ margin: "4px 0 0", fontSize: "14px", color: c.mutedForeground }}>{selectedAsset.desc}</p>
              </div>
            </div>
            
            <p style={{ color: c.foreground, fontSize: "15px", lineHeight: "1.5", marginBottom: "24px" }}>
              You are about to subscribe to the {selectedAsset.label} portfolio. Please review your selection before continuing.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setSelectedAsset(null)}
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "16px",
                  border: `1px solid ${c.border}`,
                  backgroundColor: "transparent",
                  color: c.foreground,
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Successfully subscribed to ${selectedAsset.label}!`);
                  setSelectedAsset(null);
                }}
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "16px",
                  border: "none",
                  backgroundColor: c.primary,
                  color: c.background,
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
