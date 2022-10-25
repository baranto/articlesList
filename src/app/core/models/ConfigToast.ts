export type Severity = 'success' | 'info' | 'error' | 'warning';
export type Position = 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br';

export class ConfigToast {
    severity: Severity;
    summary: string;
    detail: string;
    position: Position;
    life: number;
    closable: boolean;

    constructor(severity: Severity, summary: string, detail: string, position: Position, life: number, closable: boolean) {
        this.severity = severity;
        this.summary = summary;
        this.detail = detail;
        this.life = life;
        this.closable = closable;
        this.position = position;
    }
}
