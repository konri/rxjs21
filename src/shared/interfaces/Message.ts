export class Message {
  public readonly id = '';
  public readonly sender = '';
  public readonly timestamp = 0;
  public readonly body = '';

  constructor (data: Partial<Message>) {
    Object.assign(this, data);
  }
}
