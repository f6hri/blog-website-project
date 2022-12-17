import {Link} from "react-router-dom";
import { ROUTES } from "../../config/ROUTES";
import { Heading } from "@chakra-ui/react";

export default function Brand(){
    return(
        <Link to={ROUTES.HOME}>
            <Heading color="blackAlpha.800">
                Blogging.
            </Heading>
        </Link>
    );
}