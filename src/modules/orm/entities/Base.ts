import { PrimaryKey, Property, BaseEntity } from '@mikro-orm/core'
import { v4 } from 'uuid'

export abstract class Base extends BaseEntity<Base, 'id'> {
  @PrimaryKey()
  id: string = v4()

  @Property()
  createdAt: Date = new Date()

  @Property({ nullable: true, onUpdate: () => new Date() })
  updatedAt?: Date

  @Property({ nullable: true })
  deletedAt?: Date
}
