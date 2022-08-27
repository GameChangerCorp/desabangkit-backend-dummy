import { createContainer } from 'instances-container'
import ProductCategoryRepo from './repositories/ProductCategoryRepo'
import ProductCategoryUseCase from '../Application/usecases/ProductCategoryUseCase'
import ProductRepo from './repositories/ProductRepo'
import ProductUseCase from '../Application/usecases/ProductUseCase'

const Container = createContainer()
Container.register([
  {
    key: ProductCategoryRepo.name,
    Class: ProductCategoryRepo
  },
  {
    key: ProductRepo.name,
    Class: ProductRepo
  }
])

Container.register([
  {
    key: ProductCategoryUseCase.name,
    Class: ProductCategoryUseCase,
    parameter: {
      dependencies: [
        {
          internal: ProductCategoryRepo.name
        }
      ]
    }
  },
  {
    key: ProductUseCase.name,
    Class: ProductUseCase,
    parameter: {
      dependencies: [
        {
          internal: ProductRepo.name
        }
      ]
    }
  }
])

export default Container
