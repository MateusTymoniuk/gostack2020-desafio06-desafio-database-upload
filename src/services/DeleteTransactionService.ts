import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transacionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transacionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transação não encontrada.');
    }

    await transacionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
