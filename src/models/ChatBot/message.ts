import { User } from "../User/user";
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "messages",
})
export class Message extends Model {
  @AllowNull(false)
  @Column(DataType.TEXT)
  content!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column(DataType.STRING)
  sentimientos!: string;

  @Column(DataType.STRING)
  factor_psicosocial!: string;

  @Column(DataType.INTEGER)
  score!: number;

  @Column(DataType.INTEGER)
  message_length!: number;

  @AllowNull(true)
  @Default(DataType.NOW)
  @Column(DataType.DATE)
  created_at!: Date;
}
