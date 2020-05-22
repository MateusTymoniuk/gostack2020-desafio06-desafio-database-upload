import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';
import CreateCategoryService from './CreateCategoryService';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category: categoryTitle,
  }: Request): Promise<Transaction> {
    if (!['income', 'outcome'].includes(type)) {
      throw new AppError('Tipo não permitido.');
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    if (type === 'outcome') {
      const balance = await transactionsRepository.getBalance();

      if (balance.total < value) {
        throw new AppError(
          'Transaction value not allowed: cannot have negative balance',
        );
      }
    }

    const category_id = await this.checkCategoryOnDatabase(categoryTitle);

    const transaction = await transactionsRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }

  private async checkCategoryOnDatabase(
    categoryTitle: string,
  ): Promise<string> {
    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute(categoryTitle);

    return category.id;
  }
}

export default CreateTransactionService;
