import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Title, ContainerItens, CategoryButton } from './styles'

import { useSearchParams } from 'react-router-dom'

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria");


  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data)
    }

    loadCategories(
    )
  }, []);

  const responsive = {

    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
  };


  return (
    <Container>
      <Title> CATEGORIAS </Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass='carousel-item'
      >
        {categories.map(category => (
          <ContainerItens key={category.id} imageUrl={category.url}>
            <CategoryButton
              to={`/cardapio?categoria=${category.id}`}

            >{category.name} </CategoryButton>

          </ContainerItens>
        ))}

      </Carousel>

    </Container>
  )
}