export class Message {
    private sender: string;
    private body: string;
    private timestamp: number;

    constructor(sender: string, body: string, timestamp: number) {
        this.sender = sender;
        this.body = body;
        this.timestamp = timestamp;
    }

    public getSender(): string {
        return this.sender;
    }
    public getBody(): string {
        return this.body;
    }
    public getTimestamp(): number {
        return this.timestamp;
    }

    public setSender(sender: string): void{
        this.sender = sender;
    }
    public setBody(body: string): void{
        this.body = body;
    }
    public setTimestamp(timestamp: number): void{
        this.timestamp = timestamp;
    }
}