import Panel from "../ui/panel/Panel";

export default function AlertPanel({ children }: any) {
  return (
    <Panel variant="alert" title="Alertas de mantenimiento">
      {children}
    </Panel>
  );
}
