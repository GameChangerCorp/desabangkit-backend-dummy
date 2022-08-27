import { createContainer } from 'instances-container'
import ProductCategoryRepo from './repositories/ProductCategoryRepo'
import ProductCategoryUseCase from '../Application/usecases/ProductCategoryUseCase'

const Container = createContainer()
Container.register([
  {
    key: ProductCategoryRepo.name,
    Class: ProductCategoryRepo
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
  }
])

export default Container
