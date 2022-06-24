import * as React from 'react'
import Card, {CardProps} from '../components/card'
import { Grid, GridItem } from '@chakra-ui/react'

export interface ListProps {
    emojis: CardProps[]
}

const List: React.FunctionComponent<ListProps> = ({emojis}) => {
    return (
        <>
            <Grid templateColumns={{md:'repeat(5, 1fr)', sm:'repeat(2, 1fr)'}} gap={6}>
                    {emojis.map((emoji,index) => {
                        return (
                            <GridItem key={index} >
                                <Card key={index} {...emoji} />
                            </GridItem>
                        )
                    })}
            </Grid>
        </>
    )
}

export default List
