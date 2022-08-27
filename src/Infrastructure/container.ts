import { createContainer } from 'instances-container'
import ProductCategoryRepo from './repositories/ProductCategoryRepo'
import ProductCategoryUseCase from '../Application/usecases/ProductCategoryUseCase'
import ProductRepo from './repositories/ProductRepo'
import ProductUseCase from '../Application/usecases/ProductUseCase'
import CooperationRepo from './repositories/CooperationRepo'
import CooperationUseCase from '../Application/usecases/CooperationUseCase'

const Container = createContainer()
Container.register([
  {
    key: ProductCategoryRepo.name,
    Class: ProductCategoryRepo
  },
  {
    key: ProductRepo.name,
    Class: ProductRepo
  },
  {
    key: CooperationRepo.name,
    Class: CooperationRepo
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
  },
  {
    key: CooperationUseCase.name,
    Class: CooperationUseCase,
    parameter: {
      dependencies: [
        {
          internal: CooperationRepo.name
        }
      ]
    }
  }
])

export default Container
