export class Message {
    private sender: string;
    private body: string;
    private timestamp: number;
    private link: string;
    private isYoutube: boolean;
    private id: string;


    private linkRegex = /https?:\/\/[^\s]+/i;
    private ytRegex = /https?:\/\/(?:youtube\.|youtu\.be)[^\s]+/i;

    constructor(input: any) {
        this.id = input.id || null;
        this.sender = input.sender;
        this.timestamp = input.timestamp;
        this.setBody(input.body);
    }

    public getId(): string {
      return this.id;
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

    public getLink(): string {
      return this.link;
    }

    public getSsYoutube(): boolean {
      return this.isYoutube;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setSender(sender: string): void {
        this.sender = sender;
    }
    public setBody(body: string): void {
        this.body = body;
        this.link = (body.match(this.linkRegex) || [null]).pop();
        this.isYoutube = !!body.match(this.ytRegex);
    }
    public setTimestamp(timestamp: number): void {
        this.timestamp = timestamp;
    }

}
