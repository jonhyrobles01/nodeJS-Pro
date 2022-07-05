import { Request, Response } from "express";
import { UsersAplication } from "../../aplication/users.aplication";

export class UserController {
  constructor(private usersAplication: UsersAplication) {
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.findById = this.findById.bind(this);
  }

  async list(req: Request, res: Response) {
    const users = await this.usersAplication.findAll();

    res.json(users);
  }

  async add(req: Request, res: Response) {
    const user = await this.usersAplication.add(req.body);

    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await this.usersAplication.update(req.body);

    res.json(user);
  }

  async delete(req: Request, res: Response) {
    const user = await this.usersAplication.delete(req.params.id);

    res.json(user);
  }

  async findById(req: Request, res: Response) {
    const user = await this.usersAplication.findById(req.params.id);

    res.json(user);
  }
}
