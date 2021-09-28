import { IconButton } from '@chakra-ui/react';
import { useRouter } from "next/dist/client/router"
import {IoIosArrowRoundBack} from "react-icons/io"
export function BackButton(){
    const {back} = useRouter()
    return(
        <IconButton aria-label="get back" onClick={back} icon={<IoIosArrowRoundBack/>} />
    )
}