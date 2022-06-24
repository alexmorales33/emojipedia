import * as React from 'react'
import {Button} from '@chakra-ui/react'

interface CategoryProps {
    emoji: string;
    group: string;
    handlerFilterGroup: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<CategoryProps> = ({
    emoji,
    group,
    handlerFilterGroup
}) => {
    return(
        <>
            <Button 
            w={'90%'}
            colorScheme='yellow' 
            variant='outline'
            onClick={() => handlerFilterGroup(group)}
            >
                <span>
                    {emoji}
                </span>
                <p>{group} </p>
            </Button>
        </>
    )
}

export default CategoryCard