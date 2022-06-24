import * as React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import emojisData from '../api/apiData';
import Layout from '../components/layout';
import List from '../components/list';
import CategoryCard from '../components/category';
import { Center, Heading, Input, Text, Image, Grid, GridItem } from '@chakra-ui/react'

const Home: NextPage = () => {
    const [currentSearch, setCurrentSearch] = React.useState('');
    const [filterEmojis, setFilterEmojis] = React.useState(
      emojisData.slice(0, 50)
    );
  
    function handlerFilterByCategory(category: string) {
      setFilterEmojis(
        emojisData.filter((emoji) =>
          emoji.group.toUpperCase().includes(category.toUpperCase())
        )
      );
    }

    function handleFilterBySearch(search: string) {
      setCurrentSearch(search.trim());
      if (search.trim().length > 0) {
        setFilterEmojis(
          emojisData.filter((emoji) =>
            emoji.name.toUpperCase().includes(search.toUpperCase().trim())
          )
        );
      } else {
        setFilterEmojis(emojisData.slice(0, 500));
      }
    }

    return (
      <>
        <Layout>
          <Heading m='10' display='flex' justifyContent='center' alignItems='center'>
            <Image src='https://upload.wikimedia.org/wikipedia/en/0/03/Emojipedia_logo.png?1656027471593' alt='emojipedia' boxSize='70px' mr='5'></Image>
            <Text>Emojipedia</Text>
          </Heading>
          <Center>
            <Input mb='10' placeholder='Type your emoji' size='sm' w={{md: '50%', sm: '70%'}} borderRadius='5' boxShadow='5px 5px 15px -7px rgba(0,0,0,0.75)' onChange={(e) => handleFilterBySearch(e.target.value)}/>
          </Center>
          <Grid templateColumns={{md:'repeat(3, 1fr)', sm:'repeat(1, 1fr)'}}>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center' >
              <CategoryCard 
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🤩"
              group={'Smileys & Emotion'} 
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🧑🏽"
              group={'People & Body'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🦧"
              group={'Animals & Nature'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🧀"
              group={'Food & Drink'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🎊"
              group={'Activities'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🌎"
              group={'Travel & Places'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🕶️"
              group={'Objects'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🚸"
              group={'Symbols'}
              />
            </GridItem>
            <GridItem m='3' display='flex' justifyContent='center' alignItems='center'>
              <CategoryCard
              handlerFilterGroup={handlerFilterByCategory}
              emoji="🏳‍🌈"
              group={'Flags'}
              />
            </GridItem>
          
          </Grid>

          <List emojis={filterEmojis.slice(0, 50)} />

        </Layout>
      </>
    )

}

export default Home
