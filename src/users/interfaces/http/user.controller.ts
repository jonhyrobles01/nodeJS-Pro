import { UsersAplication } from "@users/aplication";
import { UsersFactory } from "@users/domain/models";

import { Request, Response } from "express";

export class UserController {
  constructor(private usersAplication: UsersAplication) {
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.findOne = this.findOne.bind(this);
  }

  async list(req: Request, res: Response) {
    const users = await this.usersAplication.findAll();

    res.json(users);
  }

  async add(req: Request, res: Response) {
    const userFactory = new UsersFactory().create(req.body);
    const user = await this.usersAplication.add(userFactory);

    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await this.usersAplication.update(req.body);

    res.json(user);
  }

  async delete(req: Request, res: Response) {
    const user = await this.usersAplication.delete(+req.params.id);

    res.json(user);
  }

  async findOne(req: Request, res: Response) {
    const user = await this.usersAplication.findOne(+req.params.id);

    res.json(user);
  }
}
