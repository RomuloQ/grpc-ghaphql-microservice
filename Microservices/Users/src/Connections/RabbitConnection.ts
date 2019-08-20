import { Channel, Connection, connect } from "amqplib";
import { injectable, postConstruct } from "inversify";

export interface IAMQPPersistentConnection {
  isConnected(): Boolean;
  getChannel(): Promise<Channel>;
  connect(): Promise<Connection>;
}

@injectable()
export class RabbitConnection implements IAMQPPersistentConnection {
  private _amqpPersistentConnection: Connection;

  @postConstruct()
  public async connect(): Promise<Connection> {
    if (!this._amqpPersistentConnection) {
      this._amqpPersistentConnection = await connect({
        protocol: "amqp",
        hostname: process.env.RABBIT_HOSTNAME,
        port: 5672,
        username: process.env.RABBIT_USER,
        password: process.env.RABBIT_PASSWORD
      });
    }

    return this._amqpPersistentConnection;
  }

  isConnected(): Boolean {
    return (
      this._amqpPersistentConnection !== null &&
      this._amqpPersistentConnection !== undefined
    );
  }

  public async getChannel(): Promise<Channel> {
    return await this._amqpPersistentConnection.createChannel();
  }
}
