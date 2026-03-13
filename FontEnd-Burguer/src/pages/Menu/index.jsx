import { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import { api } from "../../services/api.js";
import { formatPrice } from "../../utils/formatPrice.js";
import { CardProduct } from "../../components/CardProduct/index.jsx";
import {
  CategoriesMenu,
  Container,
  Banner,
  ProductsContainer,
  CategoryButtom,
  ButtomBack
} from "./styles.js"

export function Menu() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])


  const navigate = useNavigate()

  const { search } = useLocation() //categoria=1

  const queryParams = new URLSearchParams(search)

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria')

    if (categoryId) {
      return categoryId
    }
    return 0
  })



  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('/products')

      const newProducts = data.map(product => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, []);


  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [products, activeCategory])


  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI
        </h1>
        <span> Esse cardápio está inrresistivel </span>
      </Banner>
      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButtom
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true
                },
              )
              setActiveCategory(category.id)
            }}


          >{category.name} </CategoryButtom>
        ))}


        <ButtomBack
          to={`/`}
        > Voltar</ButtomBack>

      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}

      </ProductsContainer>
    </Container>
  )
}