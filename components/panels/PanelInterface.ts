
export interface PanelInterface {
    panelId: string;
    focused: boolean;
    onFocus: () => void;
}