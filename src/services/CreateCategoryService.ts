import { getRepository } from 'typeorm';

import Category from '../models/Category';

class CreateCategoryService {
  public async execute(category: string): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    const foundCategoryWithGivenTitle = await categoriesRepository.findOne({
      where: {
        title: category,
      },
    });

    if (foundCategoryWithGivenTitle) {
      return foundCategoryWithGivenTitle;
    }

    const newCategory = await categoriesRepository.create({
      title: category,
    });

    await categoriesRepository.save(newCategory);

    return newCategory;
  }
}

export default CreateCategoryService;
