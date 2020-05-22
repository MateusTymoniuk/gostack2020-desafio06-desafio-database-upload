import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
// import AppError from '../errors/AppError';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class RetrieveTransactionsAndBalanceService {
  public async execute(): Promise<{
    transactions: Transaction[];
    balance: Balance;
  }> {
    const transacionsRepository = getCustomRepository(TransactionsRepository);

    const transactions = await transacionsRepository.find();
    const balance = await transacionsRepository.getBalance();

    return { transactions, balance };
  }
}

export default RetrieveTransactionsAndBalanceService;
