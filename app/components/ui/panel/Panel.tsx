import { UI_SIZES } from "@/app/utils/uiSizes";

interface PanelProps {
  variant?: "dashboard" | "alert" | "qr" | "gestion";
  title?: string;
  children: React.ReactNode;
}

export default function Panel({
  variant = "dashboard",
  title,
  children,
}: PanelProps) {
  const sizes = {
    dashboard: {},
    alert: UI_SIZES.ALERT_PANEL,
    qr: UI_SIZES.QR_PANEL,
    gestion: {},
  };

  const variants = {
    dashboard: "bg-[var(--color-panel-yellow)]",
    alert: "bg-[var(--color-panel-blue)]",
    qr: "bg-[var(--color-form-bg)]",
    gestion: "bg-[var(--color-panel-yellow)]",
  };

  return (
    <div
      style={sizes[variant]}
      className={`${variants[variant]} p-8 rounded shadow mx-auto`}
    >
      {title && (
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
}
