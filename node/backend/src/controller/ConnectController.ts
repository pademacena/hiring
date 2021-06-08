import { Request, Response } from 'express';

class ConnectController {
  async index(req: Request, res: Response) {
    return res.json({message: "connected"});
  }
}

export default new ConnectController;